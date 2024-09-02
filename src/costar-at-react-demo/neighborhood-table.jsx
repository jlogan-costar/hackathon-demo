import { NEIGHBORHOOD_LIST } from "./constants";
import { DetailsModal } from "./details-modal";
import { Neighborhood } from "./neighborhood";
import { useState } from "react";
import { Hourglass } from "react-loader-spinner";

export const NeighborhoodTable = () => {
  const [modalContents, setModalContents] = useState();
  const [stateCollection, setStateCollection] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

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
      {isLoading && (
        <Hourglass
          visible={true}
          height="200"
          width="200"
          wrapperStyle={{
            position: "absolute",
            marginTop: "335px",
            marginLeft: "-100px",
          }}
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
