import { useEffect } from "react";

/* app imports */
import clickSound from "@appSounds/click-sound.mp3";

export default function useButtonOnLoaded(buttonRef, setIsDisabled) {
  /* create the necessary click event handler */
  useEffect(() => {
    const clickAudio = new Audio(clickSound);
    const buttonElement = buttonRef.current;
    const playSound = () => {
      clickAudio.play();
    };

    setIsDisabled((prevState) => !prevState);
    clickAudio.addEventListener("loadeddata", () => {
      setIsDisabled((prevState) => !prevState);
      buttonElement.addEventListener("click", playSound);
    });

    return () => {
      buttonElement.removeEventListener("click", playSound);
    };
  }, [buttonRef, setIsDisabled]);
}
