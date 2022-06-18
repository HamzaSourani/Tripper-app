import React, { useState } from "react";
import axios from "axios";
type responseStatusType = "idle" | "loading" | "succeeded" | "failed";
type governorateDetails = {
  id: number;
  name: string;
  img: null;
  description: null;
  code: null;
  longitude: null;
  latitude: null;
  created_at: string;
  updated_at: string;
  country_id: 212;
};
const useFetchGoveronrateDetails = (id: string) => {
  const [responseStatus, setResponseStatus] =
    React.useState<responseStatusType>("idle");
  const [governorateDetails, setGovernorateDetails] = useState<
    governorateDetails | undefined
  >(undefined);

  React.useEffect(() => {
    (async () => {
      try {
        setResponseStatus("loading");
        const res = await axios({
          method: "get",
          url: `http://tripper.dentatic.com/api/countries/212/cities/${id}`,
          headers: {
            Accept: "application/json",
          },
        });
        console.log(res.data);
        setGovernorateDetails(res.data.data);
        setResponseStatus("succeeded");
      } catch (error) {
        setResponseStatus("failed");
        console.log(error);
      }
    })();
  }, [id]);
  return [governorateDetails, responseStatus] as const;
};

export default useFetchGoveronrateDetails;
