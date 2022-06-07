const Page = ({ children, couunt }) => {
  return (
    <div
      className="page-body"
      style={{
        padding: "5rem",
        backgroundColor: "white",
        maxWidth: "60rem",
        boxShadow: "5px 10px 5px rgba(0,0,0,0.1)",
        margin: "auto",
        marginBottom: "2rem",
      }}
    >
      {children}
    </div>
  );
};

export default Page;
