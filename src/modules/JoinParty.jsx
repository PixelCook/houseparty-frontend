import React from "react";
import "../CSS/home.css";
import Join from "../DesignImages/3.svg";

export default function JoinParty() {
  return (
    <div
      className="background"
      style={{
        backgroundImage: `url(${Join})`,
        backgroundRepeat: "no-repeat",
        height: "100vh",
        backgroundSize: "100% 100%",
      }}
    ></div>
  );
}