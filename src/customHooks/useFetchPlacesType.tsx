import React from "react";

import axios from "axios";
type responseStatusType = "idle" | "loading" | "succeeded" | "failed";
type placesType = {
  id: string;
  name: string;
  icon: null;
  created_at: string;
  updated_at: string;
  deleted_at: null;
};
const useFetchPlacesType = () => {
  const [placesTypeStatus, setPlacesTypeStatus] =
    React.useState<responseStatusType>("idle");
  const [placesType, setPlacesType] = React.useState<string[]>([]);
  React.useEffect(() => {
    (async () => {
      try {
        setPlacesTypeStatus("loading");
        const res = await axios({
          method: "get",
          url: "http://tripper.dentatic.com/api/place-types",
          headers: {
            Accept: "application/json",
          },
        });

        setPlacesType(res.data.data.map((type: placesType) => type.name));
        setPlacesTypeStatus("succeeded");
      } catch (error) {
        setPlacesTypeStatus("failed");
      }
    })();
  }, []);

  return [placesType, placesTypeStatus] as const;
};

export default useFetchPlacesType;
