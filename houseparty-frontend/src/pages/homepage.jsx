import React from "react";
import "../CSS/home.css";
import startparty from "../DesignImages/2.svg";
import profile from "../DesignImages/3.svg";
import background from "../DesignImages/1.svg";

export default function homeRender() {
  return (
    <>
      <div className="main">
        <div
          className="background"
          style={{
            backgroundImage: `url(${background})`,
            backgroundRepeat: "no-repeat",
            height: "100vh",
            backgroundSize: "100% 100%",
          }}
        ></div>
        <div
          className="background"
          style={{
            backgroundImage: `url(${startparty})`,
            backgroundRepeat: "no-repeat",
            height: "100vh",
            backgroundSize: "100% 100%",
          }}
        ></div>
        <div
          className="background"
          style={{
            backgroundImage: `url(${profile})`,
            backgroundRepeat: "no-repeat",
            height: "100vh",
            backgroundSize: "100% 100%",
          }}
        ></div>
      </div>
    </>
  );
}
