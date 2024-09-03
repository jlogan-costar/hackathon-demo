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
    <div className="DetailsModal">
      <button
        className="CloseButton"
        onClick={() => {
          setModalContents(undefined);
        }}
      >
        <CloseIcon />
      </button>
      <div className="ModalContents">
        <div className="ModalText">{neighborhood.stateAbv}</div>
        <ArrowCircleRightIcon
          style={{
            color: "black",
            marginLeft: "24px",
            marginRight: "24px",
            height: "48px",
            width: "38px",
          }}
        />
        <div className="ModalText">{fullStateName}</div>
      </div>
    </div>
  );
};
