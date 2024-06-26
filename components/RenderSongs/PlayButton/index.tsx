"use client";

import { Play } from "lucide-react";
import React from "react";

const PlayButton = () => {
  return (
    <button
      type="button"
      className="
        transition
        opacity-0
        rounded-full
        flex
        items-center
        bg-green-500
        p-4
        drop-shadow-md
        translate
        translate-y-1/4
        group-hover:opacity-100
        group-hover:translate-y-0
        hover:scale-110
        
      "
    >
      <Play color="#121212" />
    </button>
  );
};

export default PlayButton;
