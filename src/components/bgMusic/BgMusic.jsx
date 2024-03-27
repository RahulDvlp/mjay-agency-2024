import React, { useState, useRef, useEffect } from "react";
import "./bgMusic.css";
import bgMusic from "../../assets/bg-music.mp3";
import { BsFillVolumeMuteFill, BsFillVolumeUpFill } from "react-icons/bs";
import { motion } from "framer-motion";

const BgMusic = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.7; // Set volume to 50% when component mounts
    }
  }, []);

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="bgMusic mjay_bg_music">
      <motion.button
        className="mjay_bg_music"
        onClick={togglePlay}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        {isPlaying ? <BsFillVolumeUpFill /> : <BsFillVolumeMuteFill />}
      </motion.button>
      <audio ref={audioRef} volume="0.2">
        <source src={bgMusic} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
};

export default BgMusic;
