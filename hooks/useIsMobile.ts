import { useLayoutEffect, useState } from "react";
import debounce from "lodash/debounce";

export const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(true);

  useLayoutEffect(() => {
    const updateSize = (): void => {
      setIsMobile(window.innerWidth < 720);
    };
    window.addEventListener("resize", debounce(updateSize, 250));
    updateSize();
    return (): void => window.removeEventListener("resize", updateSize);
  }, []);

  return isMobile;
};
