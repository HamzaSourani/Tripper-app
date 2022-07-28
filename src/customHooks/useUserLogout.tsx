import React from "react";
import axios from "axios";
import statusType from "../sharedType/fetchDataStatusType";
const useUserLogout = () => {
  const [authStatus, setAuthStatus] = React.useState<statusType>("idle");
  const bearerToken = JSON.parse(localStorage.getItem("bearerToken")!);
  console.log(bearerToken);
  const handleUserLogout = async () => {
    try {
      setAuthStatus("loading");
      const response = await axios({
        method: "get",
        url: "http://www.tripper.dentatic.com/api/client/auth/logout",
        headers: {
          Authorization: `Bearer ${bearerToken}`,
          Accept: "application/json",
        },
      });
      localStorage.clear();
      setAuthStatus("succeeded");
    } catch (error) {
      setAuthStatus("failed");
    }
  };

  return [authStatus, handleUserLogout] as const;
};

export default useUserLogout;
