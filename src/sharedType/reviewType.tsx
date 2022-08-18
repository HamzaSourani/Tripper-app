type review = {
  id: string;
  user_id: string;
  reviewable_type: string;
  reviewable_id: string;
  review: number;
  comment: string;
  created_at: null | string;
  updated_at: null | string;
  deleted_at: null | string;
  user: {
    id: string;
    name: string;
    username: string;
    first_name: string;
    last_name: string;
    img: "";
    gender: null | string;
    birthday: string;
    user_scope: "admin" | "user";
    email: string;
    email_verified_at: string;
    created_at: string;
    updated_at: string;
    deleted_at: null;
    city_id: number;
  };
};

export default review;
