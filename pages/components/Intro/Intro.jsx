const Intro = ({ text }) => (
  <div
    className="intro-picture"
    style={{
      backgroundImage: `url(/images/boat.jpg)`,
    }}
  >
    <div className="intro-text-block">
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
