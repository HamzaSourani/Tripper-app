import React from "react";
import { useAppDispatch } from "../app/hooks";
import axios from "axios";
import { userLogin } from "../sharedType/userType";
import statusType from "../sharedType/fetchDataStatusType";
import useFetchProfile from "./useFetchProfile";
import { fetchUserFavorites } from "../features/userFavoritesSlice";

const useUserLogin = (userInfo: userLogin) => {
  const [authStatus, setAuthStatus] = React.useState<statusType>("idle");
  const [authError, setAuthError] = React.useState<string>("");
  const fetchProfile = useFetchProfile();
  const handleUserAuth = async () => {
    try {
      setAuthStatus("loading");
      setAuthError("");
      const response = await axios({
        method: "post",
        url: "http://www.tripper.dentatic.com/api/client/auth/login",
        data: userInfo,
        headers: {
          Accept: "application/json",
        },
      });
      if (response.data.data.bearer_token) {
        localStorage.clear();
        localStorage.setItem(
          "bearerToken",
          JSON.stringify(response.data.data.bearer_token)
        );
        localStorage.setItem("userInfo", JSON.stringify(response.data.data));

        // fetchUserFavorites({});
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

export default useUserLogin;
