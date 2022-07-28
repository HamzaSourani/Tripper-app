export type userAuthState = {
  first_name: string;
  last_name: string;
  name: string;
  username: string;
  id: string;
  email: string;
  gender: string;
  user_scope: "user" | "admin";
  city_id: string;
  bearer_token: string;
};
export type userLogin = {
  email: string;
  password: string;
};
export type userSignup = {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  password_confirmation: string;
  gender: string;
  city_id: string;
};
export type editUserProfile = {
  id: string;
  userName: string;
  img: null;
  userScop: "admin" | "user";
  first_name: string;
  last_name: string;
  name: string;
  email: string;
  gender: string;
  city_id: string;
};
export type editPassword = {
  password: string;
  password_confirmation: string;
};
