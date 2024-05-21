"use client";
import AuthButtons from "@/components/AuthButtons";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Home, Search } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";

const ContentHeader = () => {
  const router = useRouter();

  return (
    <div className="w-full">
      <div className="hidden md:flex h-full items-center justify-between">
        <div className="flex h-full gap-x-2 items-center">
          <button
            type="button"
            className="
        h-[30px]
        w-[30px]
        rounded-full
      bg-black
        flex
        justify-center
        items-center
        hover:opacity-75
        transition
      "
            onClick={() => router.back()}
          >
            <ChevronLeft color="#b3b3b3" size={20} />
          </button>
          <button
            type="button"
            className="
        h-[30px]
        w-[30px]
        rounded-full
      bg-black
        flex
        justify-center
        items-center
        hover:opacity-75
        transition
      "
            onClick={() => router.forward()}
          >
            <ChevronRight color="#b3b3b3" size={20} />
          </button>
        </div>
        <AuthButtons />
      </div>
      <div className="md:hidden flex w-full h-full gap-x-4 items-center justify-between">
        <div className="flex h-full gap-x-2 items-center">
          <button
            type="button"
            className="
        h-[30px]
        w-[30px]
        rounded-full
      bg-white
        flex
        justify-center
        items-center
        hover:opacity-75
        transition
      "
          >
            <Home color="#121212" size={20} />
          </button>
          <button
            type="button"
            className="
        h-[30px]
        w-[30px]
        rounded-full
      bg-white
        flex
        justify-center
        items-center
        hover:opacity-75
        transition
      "
          >
            <Search color="#121212" size={20} />
          </button>
        </div>
        <AuthButtons />
      </div>
    </div>
  );
};

export default ContentHeader;
