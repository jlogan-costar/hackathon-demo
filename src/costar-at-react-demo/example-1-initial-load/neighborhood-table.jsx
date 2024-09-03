import {
  CAN_LIST,
  GBR_LIST,
  MEX_LIST,
  NEIGHBORHOOD_LIST,
  USA_LIST,
} from "../constants";
import { delay } from "../delay";
import { DetailsModal } from "./details-modal";

import { Neighborhood } from "./neighborhood";
import { useEffect, useState } from "react";
import { Hourglass } from "react-loader-spinner";

export const NeighborhoodTable = () => {
  const stateCollection = [
    { countryCode: "USA", statesList: USA_LIST },
    { countryCode: "CAN", statesList: CAN_LIST },
    { countryCode: "MEX", statesList: MEX_LIST },
    { countryCode: "GBR", statesList: GBR_LIST },
  ];
  const [modalContents, setModalContents] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // simulates how long it would take to load 4 state lists
    delay(8000).then(() => {
      setIsLoading(false);
    });
  }, []);

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
            setIsLoading={setIsLoading}
          />
        );
      })}
    </div>
  );
};
