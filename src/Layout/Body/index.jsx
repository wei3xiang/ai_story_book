const Body = (props) => {
  const { children } = props;
  return (
    <div style={{ display: "flex", height: "calc( 100vh - 30px)" }}>
      {props.children}
    </div>
  );
};

export default Body;
