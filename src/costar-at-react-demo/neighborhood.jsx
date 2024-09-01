import { useState } from "react";
import { CountryFlag } from "./country-flag";
import { getStatesListFakeAPI } from "./get-states-list";

export const Neighborhood = ({
  neighborhood,
  index,
  setModalContents,
  stateCollection,
  setStateCollection,
}) => {
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
        if (
          !stateCollection?.find((collection) => {
            return collection.countryCode === countryCode;
          })
        ) {
          const newStates = getStatesListFakeAPI(countryCode);
          const newCollection = { countryCode, statesList: newStates };
          setStateCollection(stateCollection.concat(newCollection));
        }
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
