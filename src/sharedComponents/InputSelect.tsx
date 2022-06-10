import React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
type inputSelectProps = {
  label: string;
  items: string[];
};
const InputSelect = ({ label, items }: inputSelectProps) => {
  const [item, setItem] = React.useState<string>("");
  const handleChange = (e: SelectChangeEvent) => {
    setItem(e.target.value as string);
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
        value={item}
        label={label}
        onChange={handleChange}
      >
        {items.map((i) => (
          <MenuItem value={i}>{i}</MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default InputSelect;
