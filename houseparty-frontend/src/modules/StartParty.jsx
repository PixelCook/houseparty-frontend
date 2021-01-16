import React from "react";
import "../CSS/startparty.css";
import startparty from "../DesignImages/2.svg";


export default function StartParty() {
    return (
        <div
          className="background"
          style={{
            backgroundImage: `url(${startparty})`,
            backgroundRepeat: "no-repeat",
            height: "100vh",
            backgroundSize: "100% 100%",
          }}
        >
            <h1 className="startaparty" style={{ color: "#F90040" }}>Throw A Party</h1>
            <p>A party always starts when you're here, take the lead</p>
        </div>
    )
}