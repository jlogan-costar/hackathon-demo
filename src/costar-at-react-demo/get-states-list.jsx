import { CAN_LIST, GBR_LIST, MEX_LIST, USA_LIST } from "./constants";

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export const getStatesListFakeAPI = async (countryCode) => {
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
