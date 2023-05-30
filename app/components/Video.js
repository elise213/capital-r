import React from "react";
import styles from '../styles/video.css';

const Video = () => {
  return (
    <div className="video-container" style={{ width: "100%" }}>
      <video autoPlay loop muted className="video">
        <source src="videos/drone.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default Video;
