import React from "react";
import { twMerge } from "tailwind-merge";

const Box = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={twMerge(
        "bg-neutral-900 rounded-[8px] overflow-hidden p-4",
        className
      )}
    >
      {children}
    </div>
  );
};

export default Box;
