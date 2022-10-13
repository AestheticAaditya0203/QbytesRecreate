/* eslint-disable max-len */
/* eslint-disable no-unreachable */
/* eslint-disable linebreak-style */
/* eslint-disable no-console */
import { parseCookies, setCookie } from "nookies";
import { API } from "../config/api";
import { axiosGet, axiosGetWithToken } from "../services/apiServices";
import axiosInstance from "../services/axiosInstance";
import * as postAction from "./postAction";
import * as userAction from "./userAction";
import { signInWithGoogle } from "../config/firebase";
import { GET_SUGGESTED_PAGES } from "./feedAction";
import {
  retrieveLocalStorage,
  saveLocalStorage,
  removeLocalStorage,
} from "../services/storageServices";

export const LOGIN = "LOGIN";
export const TOKEN = "TOKEN";
export const CURRENT_STEP = "CURRENT_STEP";
export const INTREST_LIST = "INTREST_LIST";
export const SELECTED_INTREST = "SELECTED_INTREST";
export const OPEN_LOGIN_MODEL = "OPEN_LOGIN_MODEL";
export const VIEW_TYPE = "VIEW_TYPE";
export const LOADING = "LOADING";
export const USER_DETAILS = "USER_DETAILS";
export const PROGRESS = "PROGRESS_BAR";
export const PROFILE_IMAGE = "PROFILE_IMAGE";

export const OpenLoginModel =
  (step = 1) =>
  async (dispatch) => {
    dispatch({ type: OPEN_LOGIN_MODEL, payload: true });
    dispatch({ type: VIEW_TYPE, payload: "model" });
    dispatch({ type: CURRENT_STEP, payload: step });
    saveLocalStorage("OPEN_LOGIN_MODEL", true);
    saveLocalStorage("VIEW_TYPE", "model");
    saveLocalStorage("CURRENT_STEP", step);
  };

export const CloseLoginModel = () => async (dispatch) => {
  dispatch({ type: OPEN_LOGIN_MODEL, payload: false });
  dispatch({ type: VIEW_TYPE, payload: "" });
  dispatch({ type: CURRENT_STEP, payload: 1 });
  removeLocalStorage("OPEN_LOGIN_MODEL");
  removeLocalStorage("VIEW_TYPE");
  removeLocalStorage("CURRENT_STEP");
  removeLocalStorage("TOKEN");
  removeLocalStorage("INTREST_LIST");
  removeLocalStorage("USER_DETAILS");
};

const handleUserLogin = async (userData, dispatch) => {
  dispatch({ type: LOADING, payload: true });
  try {
    const { data } = await axiosInstance.post(
      `${API.USER_SIGNUP}`,
      { ...userData },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (data?.status === "success") {
      dispatch({ type: GET_SUGGESTED_PAGES, payload: [] });
      dispatch(postAction.scrollToView("feed"));
      return { status: "success", data };
    }
  } catch (err) {
    return {
      status: "error",
      message:
        err?.response?.data?.message || "Something went wrong please try again",
    };
  } finally {
    dispatch({ type: LOADING, payload: false });
  }
  return { status: "error", message: "somthing went wrong" };
};

export const loginWithGoogle =
  (history, setAlert, setLoading, intrestList, isMobile, fromStoryEnd) =>
  async (dispatch) => {
    setLoading(true);
    const response = await signInWithGoogle();
    const referralId = retrieveLocalStorage("REFERRAL_ID");
    if (response.status === "success") {
      const userData = {
        name: response?.data?.displayName,
        email: response?.data?.email,
        profileImage: response?.data?.photoURL,
        socialID: response?.data?.uid,
      };
      if (referralId) {
        userData.referral_id = referralId;
      }
      const userResponse = await handleUserLogin(userData, dispatch);
      if (userResponse.status === "success") {
        saveLocalStorage("userLogin", true);
        saveLocalStorage("token", userResponse?.data?.token);
        saveLocalStorage("userUrl", userResponse?.data?.data?.user?.url);
        dispatch({ type: TOKEN, payload: userResponse?.data?.token });
        dispatch({ type: INTREST_LIST, payload: intrestList });
        dispatch({ type: USER_DETAILS, payload: response?.data });
        saveLocalStorage("TOKEN", userResponse?.data?.token);
        saveLocalStorage("INTREST_LIST", intrestList);
        saveLocalStorage("USER_DETAILS", response?.data);
        const cookies = parseCookies();
        console.log({ cookies });
        setCookie(null, "token", userResponse?.data?.token, {
          maxAge: 30 * 24 * 60 * 60,
          path: "/",
        });
        if (referralId) {
          dispatch(
            userAction.followUserWithUrl(userData?.referral_id, () => {
              console.log("followed user");
            })
          );
        }
        // dispatch(OpenLoginModel(2));
        // setLoading(false);
        if (userResponse?.data?.data?.newUser === true) {
          if (isMobile) {
            history.push("/complete-your-profile/add-name");
            dispatch(CloseLoginModel());
            setLoading(false);
            return;
          }
          dispatch(OpenLoginModel(2));
          setLoading(false);
        } else {
          if (fromStoryEnd) {
            history.push("/stories/create");
            dispatch(CloseLoginModel());
            setLoading(false);
            setAlert("success", "Successfully logged in");
            return;
          }
          dispatch(CloseLoginModel());
          history.push(window.location.pathname + window.location.search);
          setLoading(false);
          setAlert("success", "Successfully logged in");
        }
      } else {
        setLoading(false);
        setAlert("error", userResponse?.message);
      }
    } else {
      setLoading(false);
      setAlert("error", response.message);
    }
  };

export const handleProfileUpdate = (userData, setAlert) => async (dispatch) => {
  dispatch({ type: LOADING, payload: true });
  try {
    const { data } = await axiosInstance.put(
      `${API.USER_PROFILE_UPDATE}`,
      { ...userData },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (data?.status === "Success") {
      setAlert("success", "profile updated successfully");
      dispatch({ type: CURRENT_STEP, payload: 3 });
      dispatch(OpenLoginModel(3));
    }
  } catch (err) {
    setAlert(
      "error",
      err?.response?.data?.message || "Something went wrong please try again"
    );
  } finally {
    dispatch({ type: LOADING, payload: false });
  }
};

export const updateSelectedIntrest =
  (selectedIntrest, setAlert, history) => async (dispatch) => {
    dispatch({ type: LOADING, payload: true });
    const formData = {
      category: selectedIntrest,
    };
    try {
      const { data } = await axiosInstance.put(
        `${API.UPDATE_INTERESTS}`,
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (data?.status === "Success") {
        setAlert("success", data?.message);
        history.push("/");
        dispatch(CloseLoginModel());
      }
    } catch (error) {
      setAlert("error", error?.response?.data?.message);
    } finally {
      dispatch({ type: LOADING, payload: false });
    }
  };

export const emailUnsubscribe = (id, loader) => async () => {
  axiosGet(`${API.UNSUBSCRIBE}/${id}`)
    .then((res) => {
      if (res?.data?.status === "Success" || res?.data?.status === "success") {
        if (loader) {
          loader();
        }
      } else if (loader) {
        loader("error");
      }
      // console.log('res', res);
    })
    .catch((err) => {
      console.log("Error", err);
      if (loader) {
        loader();
      }
    });
};

export const emailVerify = (id, loader) => async () => {
  const token = await retrieveLocalStorage("token");
  axiosGetWithToken(`${API.VERIFY_EMAIL}/${id}`, token)
    .then((res) => {
      if (res?.data?.status === "Success" || res?.data?.status === "success") {
        if (loader) {
          loader("success", res?.data?.message);
        }
      } else if (loader) {
        loader("error");
      }
      // console.log('res', res);
    })
    .catch((err) => {
      console.log("Error", err);
      if (loader) {
        loader("error");
      }
    });
};
