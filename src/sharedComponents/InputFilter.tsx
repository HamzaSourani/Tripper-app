import React from "react";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import FilterIcon from "../svgIcon/FilterIcon";
const InputFilter = () => {
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
