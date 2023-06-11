import React from 'react';
import '../styles/MovingLines.css';

const MovingLines = ({text}) => {
  return (
    <div className="moving-lines-container">
      <p class="marqueeLine">
        <span>{text} &nbsp;</span>
      </p>
      <p class="marqueeLine marquee2Line">
        <span>{text} &nbsp;</span>
      </p>
    </div>
  );
};

export { MovingLines };