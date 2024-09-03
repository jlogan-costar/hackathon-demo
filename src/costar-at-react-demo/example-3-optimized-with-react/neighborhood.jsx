import { useState } from "react";
import { CountryFlag } from "../country-flag";
import { getStatesListFakeAPI } from "../get-states-list";
import "../neighborhood.css";

export const Neighborhood = ({
  neighborhood,
  index,
  setModalContents,
  stateCollection,
  setStateCollection,
  setIsLoading,
}) => {
  const shade = index % 2 === 0 ? "#dcd9d9" : "#e6e1e1";
  const { name, countryCode, stateAbv } = neighborhood;
  const [hover, setHover] = useState(false);
  return (
    <div
      style={{
        backgroundColor: hover ? "#aecde7" : shade,
      }}
      className="Neighborhood"
      onMouseOver={() => {
        setHover(true);
      }}
      onMouseOut={() => {
        setHover(false);
      }}
      onClick={async () => {
        setIsLoading(true);
        // check if the specific countryCode's state list has already been fetched
        if (
          !stateCollection?.find((collection) => {
            return collection.countryCode === countryCode;
          })
        ) {
          // if it hasn't, fetch it
          const newStates = await getStatesListFakeAPI(countryCode);
          const newCollection = { countryCode, statesList: newStates }; //data shaping
          // then add it to our state collection so it won't be fetched again
          setStateCollection(stateCollection.concat(newCollection));
        }
        setModalContents(neighborhood);
        setIsLoading(false);
      }}
    >
      <span className="NeighborhoodItem">{name}</span>
      <span className="NeighborhoodItem">
        <CountryFlag countryCode={countryCode} />
      </span>
      <span className="NeighborhoodItem">{stateAbv}</span>
    </div>
  );
};
