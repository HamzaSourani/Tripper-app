import React from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { RootState } from "../app/store";
import { fetchTrips } from "../features/tripsSlice";
const useFetchTrips = (filter?: string) => {
  const dispatch = useAppDispatch();
  const status = useAppSelector((state: RootState) => state.trips.status);
  const trips = useAppSelector((state: RootState) => state.trips.trips);
  React.useEffect(() => {
    if (status === "idle") dispatch(fetchTrips(filter));
  }, [dispatch, filter, status]);
  return [status, trips] as const;
};

export default useFetchTrips;
