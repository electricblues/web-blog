import PropTypes from "prop-types";

const Paragraph = ({ title, titleDirection, texts }) => (
  <>
    <div
      style={{
        fontSize: "4rem",
        textAlign: `${titleDirection}`,
        marginBottom: "1rem",
        paddingLeft: "4rem",
        paddingRight: "4rem",
      }}
    >
      {title}
    </div>
    <div
      style={{
        fontSize: "1.5rem",
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        marginBottom: "5rem",
      }}
    >
      {texts.map((txt, index) => (
        <span
          key={
            `${title || "?"}${index || "?"}${txt.substring(0, 3)} || ` || "?"
          }
        >
          {txt}
        </span>
      ))}
    </div>
  </>
);

Paragraph.propTypes = {
  title: PropTypes.string,
  titleDirection: PropTypes.string,
  texts: PropTypes.arrayOf(PropTypes.string),
};

export default Paragraph;
