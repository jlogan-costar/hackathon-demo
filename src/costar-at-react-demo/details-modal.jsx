import CloseIcon from "@mui/icons-material/Close";

export const DetailsModal = ({ neighborhood, setModalContents }) => {
  return (
    <div
      style={{
        position: "absolute",
        height: "300px",
        width: "800px",
        marginTop: "50px",
        marginRight: "50px",
        marginLeft: "50px",
        backgroundColor: "#f7f4f3",
        borderRadius: "2%",
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
        }}
        onClick={() => {
          setModalContents(undefined);
        }}
      >
        <CloseIcon />
      </button>
      <div style={{ color: "black" }}>{neighborhood.stateAbv}</div>
    </div>
  );
};
