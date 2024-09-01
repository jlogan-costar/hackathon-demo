import { useState } from "react";
import { CountryFlag } from "./country-flag";

export const Neighborhood = ({ neighborhood, index, setModalContents }) => {
  const shade = index % 2 === 0 ? "#dcd9d9" : "#e6e1e1";
  const { name, countryCode, stateAbv } = neighborhood;
  const [hover, setHover] = useState(false);
  return (
    <div
      style={{
        justifyContent: "space-between",
        width: "full",
        display: "flex",
        paddingTop: "4px",
        paddingBottom: "4px",
        color: "#111111",
        backgroundColor: hover ? "#aecde7" : shade,
        fontWeight: "500",
        cursor: "pointer",
      }}
      onMouseOver={() => {
        setHover(true);
      }}
      onMouseOut={() => {
        setHover(false);
      }}
      onClick={() => {
        setModalContents(neighborhood);
      }}
    >
      <span style={{ width: "33.33%", margin: "auto" }}>{name}</span>
      <span style={{ width: "33.33%", margin: "auto" }}>
        <CountryFlag countryCode={countryCode} />
      </span>
      <span style={{ width: "33.33%", margin: "auto" }}>{stateAbv}</span>
    </div>
  );
};
