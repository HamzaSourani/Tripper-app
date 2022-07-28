import React from "react";
import axios from "axios";
import { userSignup } from "../sharedType/userType";
import statusType from "../sharedType/fetchDataStatusType";
import fetchProfile from "../sharedFunction/fetchProfile";
const useUserSignup = (userInfo: userSignup) => {
  const [authStatus, setAuthStatus] = React.useState<statusType>("idle");
  const [authError, setAuthError] = React.useState<string>("");
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
      localStorage.removeItem("bearerToken");
      localStorage.setItem(
        "brearToken",
        JSON.stringify(response.data.data.bearer_token)
      );
      fetchProfile();
      setAuthStatus("succeeded");
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
