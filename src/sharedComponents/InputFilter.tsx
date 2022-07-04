import React from "react";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import FilterIcon from "../svgIcon/FilterIcon";
type inputFilterProps = {
  onClick: (e: React.MouseEvent<HTMLElement>) => void;
};
const InputFilter = ({ onClick }: inputFilterProps) => {
  return (
    <>
      <TextField
        placeholder="البحث عن ..."
        type="text"
        fullWidth
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon color="primary" />
            </InputAdornment>
          ),
          endAdornment: (
            <InputAdornment
              position="end"
              sx={{
                ":hover": {
                  cursor: "pointer",
                },
              }}
              onClick={onClick}
            >
              <FilterIcon color="primary" />
            </InputAdornment>
          ),
        }}
        sx={{
          display: "block",
          "& .MuiOutlinedInput-root": {
            borderRadius: "1rem",
            boxShadow: 1,
          },
        }}
      />
    </>
  );
};

export default InputFilter;
