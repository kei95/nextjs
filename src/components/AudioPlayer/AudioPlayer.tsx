import React, { useState, useEffect } from "react";

const useAudio = () => {
  const [audio] = useState(new Audio("../../static/bgm/portfolioBGM.mp3"));
  const [playing, setPlaying] = useState(false);

  const toggle = () => setPlaying(!playing);

  useEffect(() => {
    playing ? audio.play() : audio.pause();
  }, [playing]);

  useEffect(() => {
    const onAudioEnd = () => {
      audio.currentTime = 0;
      audio.play();
    };
    audio.addEventListener("ended", onAudioEnd, false);
    return () => {
      audio.removeEventListener("ended", onAudioEnd, false);
    };
  }, []);

  return [playing, toggle];
};

export const AudioPlayer = () => {
  const [playing, toggle] = useAudio();

  //   useEffect(() => {
  //     toggle();
  //   }, [isPlaying]);

  return <button onClick={toggle}>{playing ? "Pause" : "Play"}</button>;
};
