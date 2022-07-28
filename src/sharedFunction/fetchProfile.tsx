import axios from "axios";
const FetchProfile = () => {
  const bearerToken = JSON.parse(localStorage.getItem("bearerToken")!);
  (async () => {
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
    } catch (error) {}
  })();
};

export default FetchProfile;
