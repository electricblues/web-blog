const Divider = ({ children, color }) => {
  const Line = () => (
    <div style={{ height: "50%", borderBottom: `1px solid ${color}` }}></div>
  );
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr auto 1fr",
        gridTemplateRows: "1fre",
        columnGap: children ? "10px" : "0px",
      }}
    >
      <Line />
      <div>{children}</div>
      <Line />
    </div>
  );
};

export default Divider;

export const Divide = ({ color = "white", line = false }) => (
  <Divider color={line ? color : "none"}>
    <h3 style={{ color: color ? color : "white" }}>* * *</h3>
  </Divider>
);
