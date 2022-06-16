const Quote = ({ text, author, color }) => (
  <>
    {text ? (
      <div
        style={{
          width: "25rem",
          textAlign: "center",
          margin: "auto",
          fontSize: "1.2rem",
          color: color,
          backgroundColor: "rgba(255,255,255,0.3)",
          padding: "1rem",
          paddingLeft: "2rem",
          paddingRight: "2rem",
        }}
      >
        <p>
          <i>{`"${text}"`}</i>
        </p>
        {author ? <p style={{ textAlign: "right" }}>~ {author}</p> : <></>}
      </div>
    ) : (
      <></>
    )}
  </>
);

export default Quote;
