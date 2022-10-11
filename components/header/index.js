import React from "react";
import Link from "next/link";

function Header() {
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          backgroundColor: "gray",
        }}
      >
        <div>
          <Link href="/">
            <img
              src="/Vector.png"
              style={{
                height: "20px",
                width: "100px",
                marginLeft: "60px",
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

export default Header;
