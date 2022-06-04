import React from "react";

const useToggleDrawer = () => {
  const [open, setOpen] = React.useState<boolean>(false);
  const toggleDrawer = () => {
    setOpen(true);
  };
  const closeDrawer = () => {
    setOpen(false);
  };
  return [open, toggleDrawer, closeDrawer] as const;
};

export default useToggleDrawer;
