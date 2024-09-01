import { CAN_LIST, GBR_LIST, MEX_LIST, USA_LIST } from "./constants";

export const getStatesListFakeAPI = (countryCode) => {
  if (countryCode === "USA") {
    return USA_LIST;
  } else if (countryCode === "MEX") {
    return MEX_LIST;
  } else if (countryCode === "CAN") {
    return CAN_LIST;
  } else if (countryCode === "GBR") {
    return GBR_LIST;
  }
  return [];
};
