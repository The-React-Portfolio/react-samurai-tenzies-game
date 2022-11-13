/* react imports */
import React from "react";

export const AppImage = (props) => {
  const { src, alt, title } = props;
  return (<img src={src} className="img-fluid mx-auto" alt={alt} title={title}/>);
};
