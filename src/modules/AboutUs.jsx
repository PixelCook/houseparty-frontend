import React from "react";
import AboutUs from "../DesignImages/5.svg";

export default function AboutUsFunction() {
  return (
    <div
      className="background"
      style={{
        backgroundImage: `url(${AboutUs})`,
        backgroundRepeat: "no-repeat",
        height: "100vh",
        backgroundSize: "100% 100%",
      }}
    ></div>
  );
}
