import React from "react";

const useToggleEle = () => {
  const [open, setOpen] = React.useState<boolean>(false);
  const handelOpen = () => {
    setOpen(true);
  };
  const handelClose = () => {
    setOpen(false);
  };
  return [open, handelOpen, handelClose] as const;
};

export default useToggleEle;
