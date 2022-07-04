import { userAuthState } from "../sharedType/userType";
const userDataHandler = () => {
  let userData: userAuthState;
  if (localStorage.getItem("userData") !== null) {
    if (localStorage.getItem("userData")?.length !== 0) {
      userData = JSON.parse(localStorage.getItem("userData")!);

      return userData;
    } else return false;
  } else return false;
};

export default userDataHandler;
