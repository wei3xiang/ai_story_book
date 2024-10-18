const Header = ({ title }) => {
  return (
    <div
      style={{
        height: "30px",
        display: "flex",
        alignItems: "center",
        background: "linear-gradient(#444444, #333333)",
        color: " #bbbbbb",
      }}
    >
      <div style={{ marginLeft: "10px" }}>{title}</div>
    </div>
  );
};

export default Header;
