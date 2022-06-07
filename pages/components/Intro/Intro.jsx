

const Intro = ({ text }) => (
  <div
    style={{
      backgroundImage: `url(/images/boat.jpg)`,
      height: "100%",
      minHeight: "60vh",
      width: "100%",
      position: "relative",
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
  >
    <div style={{ paddingTop: "20vh" }}>
      <div className="intro">
        <div style={{ fontWeight: 500 }}>
          <span className="intro-title">{text}</span>
        </div>
        <div className="intro-action"></div>
      </div>
    </div>
  </div>
);

export default Intro;
