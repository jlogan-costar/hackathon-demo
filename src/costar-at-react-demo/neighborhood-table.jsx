import { NEIGHBORHOOD_LIST } from "./constants";
import { DetailsModal } from "./details-modal";
import { Neighborhood } from "./neighborhood";
import { useState } from "react";

export const NeighborhoodTable = () => {
  const [modalContents, setModalContents] = useState();
  const [stateCollection, setStateCollection] = useState([]);

  return (
    <div
      style={{
        position: "relative",
        height: "870px",
        width: "900px",
        backgroundColor: "#f7f4f3",
        borderRadius: "2%",
        padding: "24px",
      }}
    >
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
          />
        );
      })}
    </div>
  );
};
