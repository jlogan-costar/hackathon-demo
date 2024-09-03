import { CAN_LIST, GBR_LIST, MEX_LIST, USA_LIST } from "./constants";
import { delay } from "./delay";

export const getStatesListFakeAPI = async (countryCode) => {
  // adds a 2 second delay to simulate a fake API call
  await delay(2000);
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
