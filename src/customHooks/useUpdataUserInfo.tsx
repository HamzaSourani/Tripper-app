import React from "react";
import axios from "axios";
import statusType from "../sharedType/fetchDataStatusType";
import { editUserProfile } from "../sharedType/userType";
import useFetchProfile from "./useFetchProfile";
const useUpdataUserInfo = (
  userInfo: editUserProfile,
  setResponseMessage: (responseMessage: string) => void
) => {
  const [status, setStatus] = React.useState<statusType>("idle");
  const fetchProfile = useFetchProfile();
  const bearerToken = JSON.parse(localStorage.getItem("bearerToken")!);

  const url = `http://tripper.dentatic.com/api/client/update?first_name=${userInfo.first_name}&last_name=${userInfo.last_name}&gender=${userInfo.gender}&city_id=${userInfo.city_id}&name=${userInfo.name}`;
  const update = async () => {
    try {
      setStatus("loading");
      const response = await axios({
        method: "put",
        url: url,
        headers: {
          Authorization: ` Bearer ${bearerToken}`,
          Accept: "applecation/json",
        },
      });
      setStatus("succeeded");
      fetchProfile(bearerToken);
      setResponseMessage(response.data.message as string);
    } catch (error) {
      setStatus("failed");
    } finally {
      setStatus("idle");
    }
  };
  console.log(status);

  return [status, update] as const;
};

export default useUpdataUserInfo;
