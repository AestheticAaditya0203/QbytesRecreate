/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
/* eslint-disable linebreak-style */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable linebreak-style */
import React, { useEffect } from "react";
import Badge from "@mui/material/Badge";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import Link from "next/link";
//import Image from 'next/image';
import { retrieveLocalStorage } from "../../services/storageServices";
import {
  FlMakeStyles,
  FlAppBar,
  FlToolbar,
  FlGrid,
  FlIconButton,
  FlAvatar,
  // FlButton,
} from "../../elements";
//import Menu from '../header/menu';

// import HomeIcon from '../../assets/homeIcon.svg';
// import HomeSelectedIcon from '../../assets/footerIcons/home_selected.svg';
// import SearchIcon from '../../assets/Search.svg';
// import SearchSelectedIcon from '../../assets/footerIcons/search_selected.svg';
// import AddIcon from '../../assets/Add.svg';
// import BellIcon from '../../assets/Bell.svg';
// import BellSelectedIon from '../../assets/footerIcons/bell_selected.svg';
// import UserIcon from '../../assets/user.svg';
// import UserSelectedIon from '../../assets/footerIcons/user_selected.svg';
//import { NAV_SELECTED } from '../../actions/navBarAction';
// import PostClear from '../../containers/createPosts/clearPostData';
//import * as postAction from '../../actions/postAction';
import stringAvatar from "../../elements/FlStringAvatar";
// import * as authAction from '../../actions/authAction';

const useStyles = FlMakeStyles(() => ({
  appBar: {
    top: "auto",
    bottom: 0,
    position: "fixed",
    left: 0,
    right: 0,
    padding: 10,
    zIndex: 1000,
    // backgroundColor: '#FFFFFF',
  },
  primaryColor: {
    color: "#f1846b",
  },
}));

export default function Bottombar({ hideFooter }) {
  const classes = useStyles();
  const router = useRouter();
  const isUserLogin = retrieveLocalStorage("userLogin");
  const navSelected = useSelector((state) => state?.navBar?.navSelected);
  const notificationCount = useSelector(
    (state) => state.feeds.notificationCount
  );
  const dispatch = useDispatch();
  const user = useSelector((state) => state.profile.userDetails);

  // const { setAlert } = useContext(AlertNotificationContext);

  const location = router.asPath;

  useEffect(() => {
    if (
      location === "/stories/search" ||
      location?.split("/")?.[1] === "stories"
    ) {
      dispatch({ type: NAV_SELECTED, payload: "search" });
    } else if (location === "/profile") {
      dispatch({ type: NAV_SELECTED, payload: "profile" });
    } else if (location === "/posts/create") {
      dispatch({ type: NAV_SELECTED, payload: "postCreate" });
    } else if (location === "/notifications") {
      dispatch({ type: NAV_SELECTED, payload: "notifications" });
    } else if (location === "/") {
      dispatch({ type: NAV_SELECTED, payload: "home" });
    } else {
      dispatch({ type: NAV_SELECTED, payload: "" });
    }
  }, [location]);

  if (!isUserLogin || hideFooter) {
    return null;
  }

  return (
    <div
      className={classes.appBar}
      style={{
        height: "64px",
        boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.1)",
        background: "#fff",
      }}
    >
      {isUserLogin ? (
        <FlToolbar style={{ display: "flex", justifyContent: "center" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              width: "100%",
            }}
          >
            <FlGrid
              container
              item
              md={2}
              spacing={3}
              justifyContent="center"
              alignItems="center"
              style={{ marginLeft: "0px" }}
            >
              <Link href="/" color="inherit" passHref>
                <FlIconButton>
                  <img
                    loading="lazy"
                    priority
                    src={
                      navSelected === "home"
                        ? "/icons/footerIcons/home_selected.svg"
                        : "/icons/homeIcon.svg"
                    }
                    alt="Home"
                    width={20}
                    height={20}
                    // style={{
                    //   height: '20px',
                    //   objectFit: 'contain',
                    //   aspectRatio: '1/1',
                    // }}
                    onClick={() => {
                      dispatch(postAction.scrollToView("feed"));
                    }}
                  />
                </FlIconButton>
              </Link>
            </FlGrid>
            <FlGrid
              container
              item
              md={2}
              spacing={3}
              justifyContent="center"
              alignItems="center"
              style={{ marginLeft: "10px" }}
            >
              <Link href="/stories/search" color="inherit" passHref>
                <FlIconButton>
                  <img
                    loading="lazy"
                    priority
                    src={
                      navSelected === "search"
                        ? "/icons/footerIcons/search_selected.svg"
                        : "/icons/Search.svg"
                    }
                    alt="Search"
                    width={24}
                    height={24}
                  />
                </FlIconButton>
              </Link>
            </FlGrid>
            <FlGrid
              container
              item
              md={2}
              spacing={3}
              justifyContent="center"
              alignItems="center"
              style={{ marginLeft: "14px" }}
            >
              <Menu isMobile />
            </FlGrid>
            <FlGrid
              container
              item
              md={2}
              spacing={3}
              justifyContent="center"
              alignItems="center"
              style={{ marginLeft: "10px" }}
              onClick={() => dispatch({ type: NAV_SELECTED, payload: "bell" })}
            >
              <Link href="/notifications" color="inherit" passHref>
                <FlIconButton>
                  <Badge badgeContent={notificationCount} color="primary">
                    <img
                      loading="lazy"
                      priority
                      src={
                        navSelected === "notifications"
                          ? "/icons/footerIcons/bell_selected.svg"
                          : "/icons/Bell.svg"
                      }
                      alt="Notification"
                      width={24}
                      height={24}
                      style={{
                        height: "24px",
                        objectFit: "contain",
                        aspectRatio: "1/1",
                      }}
                    />
                  </Badge>
                </FlIconButton>
              </Link>
            </FlGrid>
            <FlGrid
              container
              item
              md={2}
              spacing={3}
              justifyContent="center"
              alignItems="center"
              style={{ marginLeft: "10px" }}
            >
              <Link href="/profile" color="inherit" passHref>
                <FlIconButton
                  onClick={() => dispatch(postAction.postType("Feeds"))}
                >
                  <FlAvatar
                    {...stringAvatar(user?.name || "Profile Image")}
                    alt={user?.name}
                    src={user?.profileImage}
                    className={classes.small}
                    style={{ width: 28, height: 28 }}
                  />
                </FlIconButton>
              </Link>
            </FlGrid>
          </div>
        </FlToolbar>
      ) : null}
    </div>
  );
}
