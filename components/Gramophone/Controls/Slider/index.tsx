"use client";

import React from "react";
import * as RadixSlider from "@radix-ui/react-slider";

const Slider = ({
  value = 1,
  handleChange,
}: {
  value?: number;
  handleChange: (num: number) => void;
}) => {
  const onChange = (val: number[]) => {
    handleChange(val[0]);
  };

  return (
    <RadixSlider.Root
      className="
      relative
      flex
      items-center
      select-none
      touch-none
      w-full
      h-110
    "
      defaultValue={[1]}
      value={[value]}
      onValueChange={onChange}
      max={1}
      step={0.1}
      aria-label="volume"
    >
      <RadixSlider.Track
        className="
        bg-neutral-600
        relative
        grow
        rounded-full
        h-[3px]
      "
      >
        <RadixSlider.Range
          className="
          absolute
          bg-white
          rounded-full
          h-full
        "
        />
      </RadixSlider.Track>
    </RadixSlider.Root>
  );
};

export default Slider;
