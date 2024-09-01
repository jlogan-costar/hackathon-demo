import CloseIcon from "@mui/icons-material/Close";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";

export const DetailsModal = ({
  neighborhood,
  setModalContents,
  stateCollection,
}) => {
  const fullStateName = stateCollection
    ?.find((collection) => {
      return collection.countryCode === neighborhood.countryCode;
    })
    .statesList?.find((state) => {
      return state.stateCode === neighborhood.stateAbv;
    })?.stateName;
  return (
    <div
      style={{
        position: "absolute",
        height: "200px",
        width: "700px",
        marginTop: "50px",
        marginRight: "100px",
        marginLeft: "100px",
        backgroundColor: "#f7f4f3",
        borderRadius: "2%",
        borderWidth: "1.2px",
        borderColor: "#989898",
        borderStyle: "solid",
      }}
    >
      <button
        style={{
          color: "black",
          marginRight: "12px",
          marginTop: "12px",
          marginLeft: "auto",
          width: "full",
          cursor: "pointer",
          display: "flex",
          borderWidth: "1.2px",
          borderColor: "#989898",
          borderStyle: "solid",
          borderRadius: "20%",
        }}
        onClick={() => {
          setModalContents(undefined);
        }}
      >
        <CloseIcon />
      </button>
      <div
        style={{
          display: "flex",
          widows: "full",
          justifyContent: "center",
          position: "relative",
        }}
      >
        <div
          style={{
            color: "black",
            fontWeight: "500",
          }}
        >
          {neighborhood.stateAbv}
        </div>
        <ArrowCircleRightIcon
          style={{
            color: "black",
            marginLeft: "24px",
            marginRight: "24px",
            height: "48px",
            width: "38px",
          }}
        />
        <div
          style={{
            color: "black",
            fontWeight: "500",
          }}
        >
          {fullStateName}
        </div>
      </div>
    </div>
  );
};
