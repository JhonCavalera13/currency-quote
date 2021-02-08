export const Spinner = () => {
  return (
    <center
      className="spinner-border text-warning"
      role="status"
      styles={{ position: "absolute", fontSize: 30 }}
    >
      <span className="visually-hidden">Loading...</span>
    </center>
  );
};
