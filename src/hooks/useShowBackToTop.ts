import { useLayoutEffect, useState } from "preact/hooks";

export const useShowBackToTop = () => {
  const [isVisableBackToTop, setIsVisableBackToTop] = useState(false);

  useLayoutEffect(() => {
    document.addEventListener("scroll", () => {
      if (window.scrollY > 250) {
        setIsVisableBackToTop(true);
      } else {
        setIsVisableBackToTop(false);
      }
    });
  }, []);

  return isVisableBackToTop;
};
