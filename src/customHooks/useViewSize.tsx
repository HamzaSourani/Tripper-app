import React from "react";

const useViewSize = () => {
  const [viewSize, setViewSize] = React.useState<boolean>(true);
  React.useEffect(() => {
    const isMideumOrlarger = () => {
      if (window.innerWidth >= 600) setViewSize(true);
      else if (window.innerWidth < 600) setViewSize(false);
    };
    window.addEventListener("resize", isMideumOrlarger);

    return () => {
      window.removeEventListener("resize", isMideumOrlarger);
    };
  }, []);

  return viewSize;
};

export default useViewSize;
