import React from "react";
import { useAppDispatch } from "../app/hooks";
import { fetchPlaces } from "../features/placesSlice";

type responseStatusType = "idle" | "loading" | "succeeded" | "failed";

const useFetchPlaces = () => {
  const [placesStatus, setPlacesStatus] =
    React.useState<responseStatusType>("idle");
  const dispatch = useAppDispatch();
  React.useEffect(() => {
    (async () => {
      try {
        setPlacesStatus("loading");
        await dispatch(fetchPlaces()).unwrap;
        setPlacesStatus("succeeded");
      } catch (error) {
        setPlacesStatus("failed");
      }
    })();
  }, [dispatch]);

  return [placesStatus] as const;
};

export default useFetchPlaces;
