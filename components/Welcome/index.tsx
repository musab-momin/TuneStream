"use client";

import { Play } from "lucide-react";
import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import { usePathname } from "next/navigation";

const Welcome = () => {
  const pathname = usePathname();

  if (pathname !== "/") {
    return <></>;
  }

  return (
    <>
      <h2 className="my-4 text-2xl">Welcome back</h2>
      <div
        className="
          w-[250px] 
          h-[60px]
          flex items-center gap-x-4 
          
          bg-neutral-100/10 
          hover:bg-neutral-100/20 
          transition
          rounded-lg
          "
      >
        <Image
          src={"/liked-star.jpg"}
          alt="#"
          width={60}
          height={60}
          className="rounded-l-lg"
        />
        <p>Liked Songs</p>
        <Button variant={"ghost"}>
          <Play strokeWidth={3} />
        </Button>
      </div>
    </>
  );
};

export default Welcome;
