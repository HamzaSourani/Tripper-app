import React from "react";
import axios from "axios";
import { userSignup } from "../sharedType/userType";
import statusType from "../sharedType/fetchDataStatusType";
import useFetchProfile from "./useFetchProfile";
const useUserSignup = (userInfo: userSignup) => {
  const [authStatus, setAuthStatus] = React.useState<statusType>("idle");
  const [authError, setAuthError] = React.useState<string>("");
  const fetchProfile = useFetchProfile();
  const handleUserAuth = async () => {
    try {
      setAuthStatus("loading");
      setAuthError("");
      const response = await axios({
        method: "post",
        url: "http://tripper.dentatic.com/api/client/auth/register",
        data: userInfo,
        headers: {
          Accept: "application/json",
        },
      });
      if (response.data.data.bearer_token) {
        localStorage.removeItem("bearerToken");
        localStorage.setItem(
          "brearToken",
          JSON.stringify(response.data.data.bearer_token)
        );
        fetchProfile(response.data.data.bearer_token);
        setAuthStatus("succeeded");
      }
    } catch (error) {
      setAuthStatus("failed");
      console.log(error);
      const _error = error as {
        message: string;
      };
      setAuthError(_error.message);
    }
  };

  return [authError, authStatus, handleUserAuth] as const;
};

export default useUserSignup;
