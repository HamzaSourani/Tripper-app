import React from "react";

type interestedButoonProps = {
  selected: boolean;
  value: string;
  addValueHandeler: () => void;
};
const InterestedButoon = ({
  selected,
  value,
  addValueHandeler,
}: interestedButoonProps) => {
  return <div>InterestedButoon</div>;
};

export default InterestedButoon;
