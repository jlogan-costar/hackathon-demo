import { NEIGHBORHOOD_LIST } from "../constants";
import { DetailsModal } from "./details-modal";
import { Neighborhood } from "./neighborhood";
import { useState } from "react";
import { Hourglass } from "react-loader-spinner";

export const NeighborhoodTable = () => {
  const [stateCollection, setStateCollection] = useState([]);
  const [modalContents, setModalContents] = useState();
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className="NeighborhoodTable">
      {isLoading && (
        <Hourglass
          visible={true}
          height="200"
          width="200"
          wrapperClass="Hourglass"
          colors={["#17315c", "#96afd6"]}
        />
      )}
      {!!modalContents && (
        <DetailsModal
          neighborhood={modalContents}
          setModalContents={setModalContents}
          stateCollection={stateCollection}
        />
      )}
      {NEIGHBORHOOD_LIST.map((neighborhood, i) => {
        return (
          <Neighborhood
            neighborhood={neighborhood}
            key={i}
            index={i}
            setModalContents={setModalContents}
            setStateCollection={setStateCollection}
            stateCollection={stateCollection}
            setIsLoading={setIsLoading}
          />
        );
      })}
    </div>
  );
};
