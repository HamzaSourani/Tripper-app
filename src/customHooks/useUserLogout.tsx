import React from "react";
import axios from "axios";
import statusType from "../sharedType/fetchDataStatusType";
import { useAppDispatch } from "../app/hooks";
import { checkUserStatus } from "../features/isUserAuthorizedSlice";
const useUserLogout = () => {
  const dispatch = useAppDispatch();
  const [authStatus, setAuthStatus] = React.useState<statusType>("idle");
  const bearerToken = JSON.parse(localStorage.getItem("bearerToken")!);
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
      if (response.data.message === "Operation succeeded.") {
        localStorage.clear();
        dispatch(checkUserStatus());
        setAuthStatus("succeeded");
      }
    } catch (error) {
      setAuthStatus("failed");
    }
  };

  return [authStatus, handleUserLogout] as const;
};

export default useUserLogout;
