import React from "react";
import { RootState } from "../app/store";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { fetchPlace } from "../features/placeSilce";
const useFetchPlace = (id: string) => {
  const fetchPlaceStatus = useAppSelector(
    (state: RootState) => state.place.status
  );
  const place = useAppSelector((state: RootState) => state.place.place);
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    // if (typeof place === "undefined") dispatch(fetchPlace(id));
    // else if (id !== place.id) {
    //   dispatch(fetchPlace(id));
    // }
    dispatch(fetchPlace(id));
  }, [dispatch, id]);
  return [fetchPlaceStatus, place] as const;
};

export default useFetchPlace;
