import React from "react";
type viewSizeProps = Partial<{
  _viewSize: boolean;
  _innerWidth: number;
}>;
const useViewSize = ({ _viewSize, _innerWidth }: viewSizeProps) => {
  const isLargeScreen = window.innerWidth < 600 ? false : true;
  const [viewSize, setViewSize] = React.useState<boolean>(
    _viewSize ? _viewSize : isLargeScreen
  );
  const inner = _innerWidth ? _innerWidth : 600;

  React.useEffect(() => {
    const isMideumOrlarger = () => {
      if (window.innerWidth >= inner) setViewSize(true);
      else if (window.innerWidth < inner) setViewSize(false);
    };
    window.addEventListener("resize", isMideumOrlarger);

    return () => {
      window.removeEventListener("resize", isMideumOrlarger);
    };
  }, [inner]);

  return viewSize;
};

export default useViewSize;
