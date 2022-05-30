import { Button } from "primereact/button";

const Intro = () => (
  <div className="intro">
    <div>
      <span className="intro-title">
        find <span className="intro-title-strong">Purpose</span> & create the{" "}
        <span className="intro-title-strong">Life</span> that
        <span className="intro-title-strong" style={{ color: "#B22222" }}>
          {" "}
          You
        </span>{" "}
        want
      </span>
    </div>
    <div className="intro-action">
      <Button
        label="Find out more"
        className="p-button-raised p-button-rounded"
      />
    </div>
  </div>
);

export default Intro;
