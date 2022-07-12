import React from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { RootState } from "../app/store";
import { fetchPlaces } from "../features/placesSlice";

const useFetchPlaces = () => {
  const fetchPlacesStatus = useAppSelector(
    (state: RootState) => state.places.status
  );
  const places = useAppSelector((state) => state.places.places);
  const dispatch = useAppDispatch();
  React.useEffect(() => {
    if (fetchPlacesStatus === "idle") dispatch(fetchPlaces());
  }, [dispatch, fetchPlacesStatus]);
  return [fetchPlacesStatus, places] as const;
};

export default useFetchPlaces;
