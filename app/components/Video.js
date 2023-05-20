import React from "react";
import styles from '../page.module.css';

const Video = () => {
  return (
    <div>
      <video autoPlay loop muted>
        <source src="videos/drone.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default Video;
