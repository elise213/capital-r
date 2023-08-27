import React, { useRef, useEffect } from "react";
import styles from '../styles/video.css';

const Video = () => {
  const videoRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const adjustHeight = () => {
      if (videoRef.current && containerRef.current) {
        // Adjust height only; don't touch the width.
        containerRef.current.style.height = `${videoRef.current.videoHeight}px`;
      }
    }
    if (videoRef.current) {
      videoRef.current.addEventListener('loadedmetadata', adjustHeight);
    }
    return () => {
      if (videoRef.current) {
        videoRef.current.removeEventListener('loadedmetadata', adjustHeight);
      }
    }
  }, []);

  return (
    <div className="video-container" style={{ width: "100%" }} ref={containerRef}>
      <video autoPlay loop muted className="video" ref={videoRef}>
        <source src="videos/drone.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default Video;


// import React, { useRef, useEffect } from "react";
// import styles from '../styles/video.css';

// const Video = () => {
//   const videoRef = useRef(null);
//   const containerRef = useRef(null);


//   useEffect(() => {
//     const adjustHeight = () => {
//       if (videoRef.current && containerRef.current) {
//         containerRef.current.style.height = `${videoRef.current.videoHeight}px`;
//       }
//     }
//     if (videoRef.current) {
//       videoRef.current.addEventListener('loadedmetadata', adjustHeight);
//     }
//     return () => {
//       if (videoRef.current) {
//         videoRef.current.removeEventListener('loadedmetadata', adjustHeight);
//       }
//     }
//   }, []);

//   return (
//     <div className="video-container" style={{ width: "100%" }} ref={containerRef}>
//       <video autoPlay loop muted className="video" ref={videoRef}>
//         <source src="videos/drone.mp4" type="video/mp4" />
//         Your browser does not support the video tag.
//       </video>
//     </div>
//   );
// };

// export default Video;
