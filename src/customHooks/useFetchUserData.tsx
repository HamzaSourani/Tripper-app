import React from "react";
import { userLogin, userSignup, userAuthState } from "../sharedType/userType";
import statusType from "../sharedType/fetchDataStatusType";
import { useAppDispatch } from "../app/hooks";
import { login, signup } from "../features/UserAuthSlice";
type userInfoType = userLogin | userSignup;
type methodType = "login" | "signup";

const useFetchUserData = (userInfo: userInfoType, method: methodType) => {
  const [authStatus, setAuthStatus] = React.useState<statusType>("idle");
  const [authError, setAuthError] = React.useState<string>("");
  const dispatch = useAppDispatch();

  const handleUserAuth = async () => {
    try {
      setAuthStatus("loading");
      setAuthError("");
      if (method === "login")
        await dispatch(login(userInfo as userLogin)).unwrap();
      else if (method === "signup")
        await dispatch(signup(userInfo as userSignup)).unwrap();
      setAuthStatus("succeeded");
    } catch (error) {
      setAuthStatus("failed");
      console.log(error);
      //   const _error = error as {
      //     response: {
      //       data: {
      //         message: string;
      //       };
      //     };
      //   };
      //   setAuthError(_error!.response.data.message);
      const _error = error as {
        message: string;
      };
      setAuthError(_error.message);
    }
  };

  return [authError, authStatus, handleUserAuth] as const;
};
export default useFetchUserData;
