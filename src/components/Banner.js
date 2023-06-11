import React from "react";
import "../styles/Banner.css";
import artist from "../img/artist.jpg";
import check from "../img/check.png";
import { FaEllipsisH, FaHeadphones, FaCheck } from "react-icons/fa";


function Banner() {

  return (
    <div className="Banner">
      <img src={artist} alt="" className="bannerImg" />

      <div className="content">
        <div className="breadCrump">
          <p>
            
          </p>
          <i>
            <FaEllipsisH />
          </i>
        </div>

        <div className="artist">
          <div className="left">
            <div className="name">
                <h2>ren9</h2 >
              {/* <img src={check} alt="" /> */}
            </div>

            <p className="listeners">
              <i>
                <FaHeadphones />
              </i>
              13 <span>Monthly Listeners</span>
            </p>
          </div>

          <div className="right">
            {/* <a href="#"> Play</a> */}
            <a href="https://soundcloud.com/rennine" target="_blank" rel="noreferrer">
              <i>
                <FaCheck />
              </i>
              Follow on social media!
            </a>
          </div>
        </div>
      </div>

      <div className="bottom"></div>
    </div>
  );
}

export { Banner };
