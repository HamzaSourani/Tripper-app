import React from "react";
import { RootState } from "../app/store";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { fetchGovernorates } from "../features/governoratesSlice";

const useFetchGovernorate = () => {
  const fetchGovernoratesStatus = useAppSelector(
    (state: RootState) => state.governorates.status
  );
  const governorates = useAppSelector(
    (state: RootState) => state.governorates.governorates
  );
  const dispatch = useAppDispatch();
  React.useEffect(() => {
    if (fetchGovernoratesStatus === "idle") dispatch(fetchGovernorates());
  }, [dispatch, fetchGovernoratesStatus]);
  return [fetchGovernoratesStatus, governorates] as const;
};

export default useFetchGovernorate;
