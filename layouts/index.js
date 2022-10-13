import React from "react";
import Link from "next/link";

function Layout() {
  return (
    <>
      <div
      /* style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          backgroundColor: "grey",
          height: "64px",
        }} */
      >
        <div>
          <Link href="/">
            <img
              src="/Vector.png"
              style={{
                height: "20px",
                width: "100px",
                marginLeft: "12vw",
                marginTop: "20px",
              }}
            />
          </Link>
        </div>
        <div>
          <Link href="/profile">
            <h1>
              {" "}
              <a>Profile</a>
            </h1>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Layout;
