const Quote = ({ text, author }) => (
  <>
    {text ? (
      <div
        style={{
          width: "25rem",
          textAlign: "center",
          margin: "auto",
          fontSize: "1.2rem",
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
