import React from "react";
import axios from "axios";
import statusType from "../sharedType/fetchDataStatusType";
type propsType = {
  reviewableId: string;
  reviewableType: "place" | "journey";
  comment?: string;
  review?: number;
};
type reviewType = {
  id: string;
  user_id: string;
  reviewable_type: string;
  reviewable_id: string;
  review: number;
  comment: string;
  created_at: string;
  updated_at: string;
  deleted_at: null | string;
};
const useAddComment = ({
  reviewableId,
  reviewableType,
  comment,
  review,
}: propsType) => {
  const [userReview, setUserReview] = React.useState<reviewType>();
  const [status, setStatus] = React.useState<statusType>("idle");
  const addComment = async () => {
    try {
      const res = await axios({
        method: "post",
        url: "http://tripper.dentatic.com/api/client/reviews/add",
        data: {
          review,
          comment,
          reviewable_id: reviewableId,
          reviewable_type: reviewableType,
        },
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${JSON.parse(
            localStorage.getItem("bearerToken")!
          )}`,
        },
      });
      console.log("ok");
      setUserReview(res.data.data);
      setStatus("succeeded");
    } catch (error) {
      setStatus("failed");
    }
  };
  return [status, userReview, addComment] as const;
};

export default useAddComment;
