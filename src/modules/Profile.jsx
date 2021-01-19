import React from "react";
import "../CSS/home.css";
import profile from "../DesignImages/4.svg";

export default function Profile() {
  return (
    <div
      className="background"
      style={{
        backgroundImage: `url(${profile})`,
        backgroundRepeat: "no-repeat",
        height: "100vh",
        backgroundSize: "100% 100%",
      }}
    ></div>
  );
}
