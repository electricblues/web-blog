import PropTypes from "prop-types";

const Paragraph = ({ title, titleDirection, texts }) => (
  <>
    <div
      className="paragraph-title"
      style={{
        fontSize: "3.3rem",
        textAlign: `${titleDirection || "left"}`,
        marginBottom: "1rem",
      }}
    >
      {title}
    </div>
    <div
      style={{
        fontSize: "1.3rem",
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        marginBottom: "5rem",
        textAlign: "left",
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
