import axios from "axios";
import { useAppDispatch } from "../app/hooks";
import { checkUserStatus } from "../features/isUserAuthorizedSlice";

const useFetchProfile = () => {
  const dispatch = useAppDispatch();

  const fetchProfile = async (bearerToken: string) => {
    try {
      const response = await axios({
        method: "get",
        url: "http://tripper.dentatic.com/api/client/show-profile",
        headers: {
          Authorization: `Bearer ${bearerToken}`,
          Accept: "applecation/json",
        },
      });

      localStorage.removeItem("userInfo");
      localStorage.setItem("userInfo", JSON.stringify(response.data.data));
      dispatch(checkUserStatus());
    } catch (error) {}
  };
  return fetchProfile;
};

export default useFetchProfile;
