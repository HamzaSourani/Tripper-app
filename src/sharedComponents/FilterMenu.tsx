import React from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

type filterMenuProps = {
  anchorEl: null | HTMLElement;
  handleClose: () => void;
};
const FilterMenu = ({ anchorEl, handleClose }: filterMenuProps) => {
  return (
    <Menu anchorEl={anchorEl} onClose={handleClose} open={Boolean(anchorEl)}>
      <MenuItem>
        <input type={"date"} />
      </MenuItem>
    </Menu>
  );
};

export default FilterMenu;
