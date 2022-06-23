import React from "react";
import { useAppSelector } from "../app/hooks";
const useThereIsUser = () => {
  const userData = useAppSelector((state) => state.userAuth);
  console.log(userData);
  const thereIsUser = Object.keys(userData).length !== 0;
  return thereIsUser as boolean;
};

export default useThereIsUser;
