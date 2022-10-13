/* eslint-disable no-const-assign */
/* eslint-disable consistent-return */
/* eslint-disable max-len */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
//import "react-loading-skeleton/dist/skeleton.css";
//import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import Link from "next/link";
import {
  FlAppBar,
  FlToolbar,
  FlTypography,
  FlIconButton,
  FlGrid,
  FlUseTheme,
} from "../../elements";
//import { retrieveLocalStorage } from "../../services/storageServices";
//import * as profileAction from "../../actions/profileAction";
//import * as authAction from "../../actions/authAction";
// import MobileDrawer from './mobileDrawer';
//import style from "./header.style";
//import FlBreadCrumb from "../../elements/FlBreadCrumb";
//import InfluencerDialog from "../auth/InfluencerDialog";

//const MobileDrawer = dynamic(() => import("./mobileDrawer"));

function MobileHeader({ showPage, categories }) {
  const dispatch = useDispatch();
  const classes = style();
  const [open, setOpen] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);
  const theme = FlUseTheme();
  //const isUserLogin = retrieveLocalStorage("userLogin");
  //const userDetails = useSelector((state) => state.profile.userDetails);
  /*   useEffect(() => {
    if (isUserLogin) {
      dispatch(profileAction.viewProfile());
    }
  }, [isUserLogin]); */

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  function Logo() {
    return (
      <FlTypography variant="h4" className={classes.title}>
        <Link className={classes.primaryColor} href="/" passHref>
          <img
            priority
            src="Vector.png"
            alt="QuickBytes - Visual Web Stories"
            height={30}
            width={100}
            // style={{ aspectRatio: '4/1', height: '20px', objectFit: 'contain' }}
            onClick={() => {
              // window.scrollTo(0, 0);
              // dispatch(postAction.scrollToView('feed'));
            }}
          />
        </Link>
      </FlTypography>
    );
  }

  function MobileHead() {
    return (
      <FlGrid
        justifyContent="space-between"
        display="flex"
        flex={1}
        alignItems="center"
      >
        {/*  <div style={{ display: "flex", alignItems: "center" }}>
          <FlIconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={handleDrawerOpen}
          >
            <MenuOutlinedIcon />
          </FlIconButton>
          {Logo()}
        </div> */}
        {typeof window !== "undefined" && !isUserLogin ? (
          <FlIconButton onClick={() => dispatch(authAction.OpenLoginModel())}>
            <img
              priority
              width={20}
              height={20}
              src="/icons/UserPrimary.svg"
              alt="user"
            />
          </FlIconButton>
        ) : (
          <FlIconButton
            onClick={() => {
              setOpenDialog(true);
              // router.push('/profile/settings');
            }}
            style={{
              background: "#EF613B",
              borderRadius: 4,
            }}
          >
            <FlTypography
              sx={{ color: "#fff", fontSize: 14, fontWeight: "normal" }}
            >
              {userDetails?.points} Points
            </FlTypography>
          </FlIconButton>
        )}
      </FlGrid>
    );
  }

  return (
    <>
      {showPage ? (
        <FlBreadCrumb pageName={showPage} />
      ) : (
        <FlAppBar
          color="inherit"
          // className="WebHeader_block"
          style={{
            height: "64px",
            boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.1)",
            background: "#fff",
          }}
        >
          <FlToolbar>{MobileHead()}</FlToolbar>
        </FlAppBar>
      )}

      {open && (
        <MobileDrawer
          open={open}
          handleDrawerClose={handleDrawerClose}
          classes={classes}
          theme={theme}
          categories={categories}
        />
      )}
      {openDialog ? (
        <InfluencerDialog
          openModel={openDialog}
          handleClose={() => setOpenDialog(false)}
        />
      ) : null}
    </>
  );
}

export default MobileHeader;
