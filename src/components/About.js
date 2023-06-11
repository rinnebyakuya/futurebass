import React from 'react';
import "../styles/About.css";
import producerImg from '../img/producerImg.jpg'; // import the image

const AboutProducer = () => {
  return (
    <div className="about-producer">
      <h2 className="title">Meet Zhakypov "ren9" Askar - a music producer from Almaty, Kazakhstan</h2>
      <div className="info">
        <img src={producerImg} alt="Music Producer" className="producer-img" />
        <div className="text">
          <p className="description">
            Born and raised in Almaty, Kazakhstan, our music producer has been passionate about music since he was a child.
            He started playing the piano at the age of 11 and has been producing electronic music for over a decade now.
          </p>
          <p className="description">
            His unique blend of electronic, hip-hop, and traditional Kazakh music has gained him a reputation as one of
            the most innovative music producers among some people.
          </p>
          <p className="description">
            He has collaborated with many well-known artists and has produced music for TV and film. His music has been
            featured in international music compilations and has received critical acclaim from well known artists.
          </p>
          {/* <p className="description">
            Askar is a passionate advocate for music education. He has been teaching music production
            online for several years and has helped many young musicians pursue their dreams.
          </p> */}
        </div>
      </div>
    </div>
  )
}

export default AboutProducer; 