"use client";

import {
  Pause,
  Play,
  StepBackIcon,
  StepForwardIcon,
  Volume2Icon,
  VolumeX,
} from "lucide-react";
import React, { useEffect, useState } from "react";
import Slider from "./Slider";
import useSound from "use-sound";
import { useLoadSong } from "@/hooks/useLoadSong";

const Controls = ({ songUrl }: { songUrl: string }) => {
  const songPath = useLoadSong(songUrl);
  const [volume, setVolume] = useState<number>(1);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);

  const [play, { pause, sound }] = useSound(songPath!, {
    volume: volume,

    onplay: () => setIsPlaying(true),
    onend: () => setIsPlaying(false),
    onpause: () => setIsPlaying(false),
    format: ["mp3"],
  });

  const handleControls = () => {
    if (!isPlaying) {
      play();
    } else {
      pause();
    }
  };

  const toggleMute = () => {
    if (volume === 0) {
      setVolume(1);
    } else {
      setVolume(0);
    }
  };

  const Icons = isPlaying ? (
    <Play color="#121212" onClick={handleControls} />
  ) : (
    <Pause color="#121212" onClick={handleControls} />
  );
  const VolumeIcon =
    volume === 0 ? (
      <VolumeX onClick={toggleMute} />
    ) : (
      <Volume2Icon onClick={toggleMute} />
    );

  useEffect(() => {
    sound?.play();
    return () => sound?.unload();
  }, [sound]);

  return (
    <>
      <div className="flex md:hidden col-auto w-full justify-end items-center">
        <div
          onClick={() => {}}
          className="
              h-10
              w-10
              flex
              justify-center
              items-center
              rounded-full
              bg-white
              p-1 
              cursor-pointer
            "
        >
          {Icons}
        </div>
      </div>

      <div
        className="
          hidden
          h-full
          md:flex
          justify-center
          items-center
          w-full
          max-w-[722px]
          gap-x-6
        "
      >
        <StepBackIcon className="transition" />
        <div
          className="
            flex
            items-center
            justify-center
            h-10
            w-10
            rounded-full
            bg-white
            p-1
            cursor-pointer
          "
        >
          {Icons}
        </div>

        <StepForwardIcon />
      </div>

      <div
        className="
          w-full
          hidden
          md:flex
          justify-end
          pr-2
        "
      >
        <div className="flex items-center gap-x-2 w-[120px] cursor-pointer">
          {VolumeIcon}
          <Slider value={volume} handleChange={(v: number) => setVolume(v)} />
        </div>
      </div>
    </>
  );
};

export default Controls;
