import React from 'react';
import '../styles/MovingText.css';

const MovingText = ({text}) => {
  return (
    <div className="moving-text-container">
      <p class="marquee">
        <span>{text} &nbsp;</span>
      </p>
      <p class="marquee marquee2">
        <span>{text} &nbsp;</span>
      </p>
    </div>
  );
};

export { MovingText };