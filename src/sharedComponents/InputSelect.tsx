import React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
type inputSelectProps = {
  label: string;
  items: { ui: string; server: string }[];
  value: string;
  setValue: (newValue: string) => void;
};
const InputSelect = ({ label, items, value, setValue }: inputSelectProps) => {
  const handleChange = (e: SelectChangeEvent) => {
    setValue(e.target.value as string);
  };
  return (
    <FormControl
      sx={{
        display: "block",
        width: "80%",
        "& .MuiOutlinedInput-root": {
          borderRadius: "1rem",
          boxShadow: 1,
          width: "100%",
        },
        "& .MuiSvgIcon-root": {
          color: "primary.main",
        },
      }}
    >
      <InputLabel id="select-label">{label}</InputLabel>
      <Select
        labelId="select-label"
        id="select"
        value={value}
        label={label}
        onChange={handleChange}
      >
        {items.map((i) => (
          <MenuItem value={i.server}>{i.ui}</MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default InputSelect;
