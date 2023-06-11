import React from "react";
import "../styles/LeftMenu.css";
import { FaSpotify, FaEllipsisH } from "react-icons/fa";
import { MovingText } from "./MovingText"
import { MovingLines } from "./MovingLines"

function LeftMenu() {
  return (
    <div className="leftMenu">
      <div className="logoContainer">
        <div className="logo">
          <i>
            <FaSpotify />
          </i>
        </div>
        <h2>Welcome to</h2>
        <i>
          <FaEllipsisH/>
        </i>
      </div>

        <MovingText text='ren9'/>
        <MovingText text='music'/>
        <MovingText text='listen'/>
        <MovingText text='feel'/>

        <MovingLines text='ren9'/>
        <MovingLines text='music'/>
        <MovingLines text='listen'/>
        <MovingLines text='feel'/>
    </div>
  );
}

export { LeftMenu };
