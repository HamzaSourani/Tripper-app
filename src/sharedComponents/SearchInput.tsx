import React from "react";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
const SearchInput = () => {
  return (
    <>
      <TextField
        placeholder="البحث عن ..."
        type="text"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon color="primary" />
            </InputAdornment>
          ),
        }}
        sx={{
          display: "block",
          "& .MuiOutlinedInput-root": {
            width: "100%",
            borderRadius: "1rem",
            boxShadow: 1,
          },
          width: "80%",
        }}
      />
    </>
  );
};

export default SearchInput;
