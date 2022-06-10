import React from "react";
import Button from "@mui/material/Button";
type interestedButoonProps = {
  selected: boolean;
  value: string;
  selectValueHandler: () => void;
};
const InterestedButoon = ({
  selected,
  value,
  selectValueHandler,
}: interestedButoonProps) => {
  return (
    <Button
      variant={selected ? "contained" : "outlined"}
      onClick={selectValueHandler}
    >
      {value}
    </Button>
  );
};

export default InterestedButoon;
