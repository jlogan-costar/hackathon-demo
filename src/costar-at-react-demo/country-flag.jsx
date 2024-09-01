import { US } from "country-flag-icons/react/3x2";
import { MX } from "country-flag-icons/react/3x2";
import { GB } from "country-flag-icons/react/3x2";
import { CA } from "country-flag-icons/react/3x2";

export const CountryFlag = ({ countryCode }) => {
  if (countryCode === "USA") {
    return <US style={{ height: "30px" }} />;
  } else if (countryCode === "MEX") {
    return <MX style={{ height: "30px" }} />;
  } else if (countryCode === "GBR") {
    return <GB style={{ height: "30px" }} />;
  } else if (countryCode === "CAN") {
    return <CA style={{ height: "30px" }} />;
  } else {
    return <div>{countryCode}</div>;
  }
};
