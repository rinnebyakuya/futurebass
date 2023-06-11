import React, { useEffect, useState } from "react";
import "../styles/MainContainer.css";
import { FaUsers } from "react-icons/fa";
import { AudioList } from "./AudioList";
import { Banner } from "./Banner";
import AboutProducer, { About } from "./About";

function MainContainer() {
  useEffect(() => {
    const allLi = document.querySelector(".menuList").querySelectorAll("li");

    function changePopularActive() {
      allLi.forEach((n) => n.classList.remove("active"));
      this.classList.add("active");
    }

    allLi.forEach((n) => n.addEventListener("click", changePopularActive));
  }, []);

  const [isSongs, setIsSongs] = useState(true);
  const [isAbout, setIsAbout] = useState(false);

  function Songs() {
    setIsSongs((isSongs) => true);
    setIsAbout((isAbout) => false);
  }

  function About() {
    setIsAbout((isAbout) => true);
    setIsSongs((isSongs) => false);
  }

  return (
    <div className="mainContainer">
      <Banner />

      <div className="menuList">
        <ul>
          <li>
            <a href="#" onClick={Songs}>Songs</a>
          </li>
          <li>
            <a href="#" onClick={About}>About</a>
          </li>
        </ul>

        <p>
          <i>
            <FaUsers />
          </i>
          ~115 <span>Followers</span>
        </p>
      </div>


      {isSongs && <AudioList />}
      {isAbout && <AboutProducer />}
        
    </div>
  );
}

export { MainContainer };
