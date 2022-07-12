import React from "react";
import { RootState } from "../app/store";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { fetchGovernorateDetails } from "../features/governorateDetailsSlice";
const useFetchGoveronrateDetails = (id: number) => {
  const fetchGovernorateDetailsStatus = useAppSelector(
    (state: RootState) => state.governorates.status
  );
  const governorateDetails = useAppSelector(
    (state: RootState) => state.governorateDetails.governorateDetails
  );
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    if (typeof governorateDetails === "undefined")
      dispatch(fetchGovernorateDetails(id));
    else if (id !== governorateDetails.id) {
      console.log(typeof id + typeof governorateDetails?.id);
      dispatch(fetchGovernorateDetails(id));
    }
  }, [dispatch, id, governorateDetails]);
  return [fetchGovernorateDetailsStatus, governorateDetails] as const;
};

export default useFetchGoveronrateDetails;
