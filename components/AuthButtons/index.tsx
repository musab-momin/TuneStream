"use client";

import React from "react";
import { Button } from "../ui/button";
import { useIsMobile } from "@/hooks/useIsMobile";

const AuthButtons = () => {
  const isMobile = useIsMobile();
  console.log("~@@ isMobile: ", isMobile);
  return (
    <div className="flex items-center">
      <Button variant={"ghost"}>
        <span className="font-bold text-[#b3b3b3]">Sign up</span>
      </Button>
      <Button
        variant={"default"}
        size={isMobile ? "default" : "lg"}
        className="bg-green-500 rounded-[100px]"
      >
        <span className="font-bold text-white">Log in</span>
      </Button>
    </div>
  );
};

export default AuthButtons;
