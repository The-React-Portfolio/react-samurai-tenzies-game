/* react imports */
import React, { useEffect, useState } from "react";

/* app imports */
import "./styles.scss";
import bgImage from "@appImages/main-bg.jpg";

export const BgContainer = () => {
  let [show, setShow] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShow(true);
    }, 3000);
  }, []);

  const bgStyles = {
    'background': '#000 url("' + bgImage + '") no-repeat center center',
    'backgroundSize': 'cover'
  };
  const divClass = show === true ? "bgContainer show" : "bgContainer";

  return (
    <div className={divClass} style={bgStyles}></div>
  );
};
