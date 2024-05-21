import React from "react";
import Box from "../box";
import Navigation from "../navigation";
import Library from "../Musiclibrary";

const Sidebar = () => {
  return (
    <nav
      className="
      hidden
      md:flex
      flex-col
      gap-y-2
      h-full
      w-[300px]
      p-2 
      border-red-100  
    "
    >
      <Box>
        <Navigation />
      </Box>
      <Box>
        <Library />
      </Box>
    </nav>
  );
};

export default Sidebar;
