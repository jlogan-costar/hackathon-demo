import CloseIcon from "@mui/icons-material/Close";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";

export const DetailsModal = ({ modalContents, setModalContents }) => {
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
        <div className="ModalText">{modalContents.stateAbv}</div>
        <ArrowCircleRightIcon
          style={{
            color: "black",
            marginLeft: "24px",
            marginRight: "24px",
            height: "48px",
            width: "38px",
          }}
        />
        <div className="ModalText">{modalContents.fullState}</div>
      </div>
    </div>
  );
};
