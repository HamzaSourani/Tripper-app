import React from "react";

const useToggleTab = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return [value, handleChange] as const;
};

export default useToggleTab;
