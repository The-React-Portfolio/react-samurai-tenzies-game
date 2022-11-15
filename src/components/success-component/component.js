/* react imports */
import React, { useState, useEffect } from "react"

/* app imports */
import "./styles.scss";
import successBgImage from "@appImages/success-bg.jpg";
import mp4VideoSrc from "@appVideos/success-video.mp4";
import webmVideoSrc from "@appVideos/success-video.webm";

export const AppSuccess = () => {
  let [videoSrc, setVideoSrc] = useState({});
  const styles = {
    background: `url(${successBgImage}) no-repeat center center`,
    backgroundSize: "cover"
  };

  useEffect(() => {
    setVideoSrc({
      mp4: mp4VideoSrc,
      webm: webmVideoSrc
    });
  }, []);

  const reloadApp = () => {
    window.location.reload(true);
  };

  return (
    <div className="appSuccess" style={styles}>
      {
        Object.keys(videoSrc).length > 0 &&
        <video autoPlay loop muted playsInline>
          <source src={videoSrc["mp4"]} type="video/mp4"/>
          <source src={videoSrc["webm"]} type="video/webm"/>
        </video>
      }
      <div className="posContainer">
        <span className="title">
          Congratulations
        </span>
        <button className="btn btn-dark"
        onClick={reloadApp}>Try Again?</button>
      </div>
    </div>
  );
};
