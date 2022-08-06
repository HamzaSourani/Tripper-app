import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import statusType from "../sharedType/fetchDataStatusType";
import { useAppDispatch } from "../app/hooks";
import { checkUserStatus } from "../features/isUserAuthorizedSlice";
const useUserLogout = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
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
        window.location.href = "/home";
      }
    } catch (error) {
      setAuthStatus("failed");
    }
  };

  return [authStatus, handleUserLogout] as const;
};

export default useUserLogout;
