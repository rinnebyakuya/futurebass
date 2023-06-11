import React, { useState } from "react";
import "../styles/LeftMenu.css";
import Track from "../img/track.png";
import { BsFillVolumeUpFill, BsMusicNoteList } from "react-icons/bs";
import { FaDesktop } from "react-icons/fa";

function TrackList({ trackName, artistName }) {
  const [sliderValue, setSliderValue] = useState(50);

  const handleSliderChange = (event) => { setSliderValue(event.target.value); };
  return ( <div></div>
  );
}

export default TrackList;
