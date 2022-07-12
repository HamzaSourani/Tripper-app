import statusType from "../sharedType/fetchDataStatusType";
const isLoading = (status: statusType): boolean => {
  return status === "loading";
};

export default isLoading;
