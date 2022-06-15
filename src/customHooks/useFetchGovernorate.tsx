import React from "react";
import { useAppDispatch } from "../app/hooks";
import { fetchGovernorate } from "../features/governorateSlice";

type responseStatusType = "idle" | "loading" | "succeeded" | "failed";
const useFetchGovernorate = () => {
  const [responseStatus, setResponseStatus] =
    React.useState<responseStatusType>("idle");
  const dispatch = useAppDispatch();
  React.useEffect(() => {
    (async () => {
      try {
        setResponseStatus("loading");
        await dispatch(fetchGovernorate()).unwrap();
        setResponseStatus("succeeded");
      } catch (error) {
        setResponseStatus("failed");
      }
    })();
  }, [dispatch]);
  return [responseStatus] as const;
};

export default useFetchGovernorate;
