import React from "react";
import { twMerge } from "tailwind-merge";

const Header = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <header
      className={twMerge(
        "h-[74px] bg-gradient-to-b from-emerald-800 p-4 md:p-6 flex items-center",
        className
      )}
    >
      {children}
    </header>
  );
};

export default Header;
