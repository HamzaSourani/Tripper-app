import React from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { RootState } from "../app/store";
import { fetchPlaces } from "../features/placesSlice";

const useFetchPlaces = (filter?: string) => {
  const fetchPlacesStatus = useAppSelector(
    (state: RootState) => state.places.status
  );
  const places = useAppSelector((state: RootState) => state.places.places);
  const dispatch = useAppDispatch();
  // const fetchPlacesHandler = () => {
  //   dispatch(fetchPlaces(filter));
  // };
  React.useEffect(() => {
    dispatch(fetchPlaces(filter));
  }, [dispatch, filter]);
  return [fetchPlacesStatus, places] as const;
};

export default useFetchPlaces;
