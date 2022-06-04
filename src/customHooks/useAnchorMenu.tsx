import React from "react";

const useAnchorMenu = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const handleOpenMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCloseMenu = () => {
    setAnchorEl(null);
  };
  return [anchorEl, handleOpenMenu, handleCloseMenu] as const;
};

export default useAnchorMenu;
