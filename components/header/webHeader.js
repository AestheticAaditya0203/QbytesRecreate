import React from "react";
import Link from "next/link";

import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import GlobalSearch from "./globalSearch";

import {
  FlAppBar,
  FlToolbar,
  FlTypography,
  FlIconButton,
  FlGrid,
  FlAvatar,
  FlClickAwayListener,
  FlGrow,
  FlPopper,
  FlPaper,
  FlMenuList,
  FlMenuItem,
} from "../../elements";

function webHeader() {
  return (
    <>
      <FlGrid
        container
        justifyContent="space-between"
        alignItems="center"
        style={{ height: "64px", background: "#fff" }}
      >
        <FlGrid
          item
          xs={2}
          style={{ background: "transparent", textAlign: "left" }}
        >
          <div>
            <Link href="/">
              <img
                src="/Vector.png"
                style={{
                  height: "20px",
                  width: "100px",
                  marginLeft: "12vw" /* 
                  marginTop: "20px", */,
                }}
              />
            </Link>
          </div>
        </FlGrid>

        <FlGrid item xs={4} style={{ background: "transparent" }}>
          {typeof window !== "undefined" && (
            <GlobalSearch
            //type="homePage"
            //handleShowSearch={(!isUserLogin && router.asPath !== '/') || isUserLogin}
            />
          )}
        </FlGrid>

        <FlIconButton
          style={{
            background: "#f2f2f2",
            padding: "10px  20px",
            borderRadius: "10px",
          }}
          onClick={() => {
            dispatch(authAction.OpenLoginModel());
          }}
        >
          {/* <img
                priority
                width={20}
                height={20}
                src="/icons/UserPrimary.svg"
                alt="user"
              /> */}
          <FlTypography
            noWrap
            style={{
              marginLeft: "10px",
              fontWeight: "bold",
              color: "#EF613B",
              fontSize: "13px",
            }}
          >
            LOGIN / SIGNUP
          </FlTypography>
        </FlIconButton>
        {/* 
        <div>
          <Link href="/profile">
            <h1>
              {" "}
              <a>Profile</a>
            </h1>
          </Link>
        </div> */}
      </FlGrid>
    </>
  );
}

export default webHeader;
