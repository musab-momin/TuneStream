"use client";

import { cn } from "@/lib/utils";
import { Home, Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useMemo, memo } from "react";

const Navigation = memo(() => {
  const pathname = usePathname();
  const navigation = useMemo(() => {
    return [
      {
        icon: (
          <Home
            color={pathname !== "/search" ? "#ffffff" : "#707070"}
            size={20}
          />
        ),
        title: "Home",
        url: "/",
        isActive: pathname !== "/search",
      },
      {
        icon: (
          <Search
            color={pathname === "/search" ? "#ffffff" : "#707070"}
            size={20}
          />
        ),
        title: "Search",
        url: "/search",
        isActive: pathname === "/search",
      },
    ];
  }, [pathname]);
  return (
    <ul className="flex flex-col gap-y-4">
      <li className="flex gap-x-2 items-center  my-2">
        <Image src={"/logo.png"} alt="logo" width={24} height={24} />
        <h5>TuneStream</h5>
      </li>
      {navigation?.map((nav, indx) => (
        <Link key={`${nav.title}-${indx}`} href={nav.url}>
          <li className="flex gap-x-2 items-center">
            {nav.icon}
            <span
              className={cn(
                "text-[#b3b3b3] font-semibold hover:text-white transition",
                {
                  "text-white": nav.isActive,
                }
              )}
            >
              {nav.title}
            </span>
          </li>
        </Link>
      ))}
    </ul>
  );
});

Navigation.displayName = "Navigation";
export default Navigation;
