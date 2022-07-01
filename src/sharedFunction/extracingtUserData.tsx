import userDataHandler from "./userDataHandler";

const extracingtUserData = () => {
  const userData = userDataHandler();
  const _firstName = userData ? userData.first_name : "";
  const _lastName = userData ? userData.last_name : "";
  const _userName = userData ? userData.name : "";
  const _userEmail = userData ? userData.email : "";
  const _gender = userData ? userData.gender : "";
  const _cityId = userData ? userData.city_id : "";
  const _userSCope = userData ? userData.user_scope : "";
  const _id = userData ? userData.id : "";
  const _bearerToken = userData ? userData.bearer_token : "";

  return {
    _firstName,
    _lastName,
    _userName,
    _userEmail,
    _gender,
    _cityId,
    _userSCope,
    _id,
    _bearerToken,
  } as const;
};
export default extracingtUserData;
