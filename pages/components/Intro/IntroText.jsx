import { Button } from "primereact/button";

const IntroText = () => (
  <>
    <br />
    <br />
    <div style={{ fontSize: "2rem", maxWidth: "40rem", margin: "auto" }}>
      Like a sailboat you already have all the necessary equipment for your life
      journey.
    </div>
    <br />
    <div style={{ fontSize: "1.6rem", maxWidth: "40rem", margin: "auto" }}>
      Define your destiny. Learn how to navigate your boat towards the life of{" "}
      <b>
        <i>your choice</i>
      </b>
      .
    </div>
    <br />
    <br />
    <Button
      className="p-button-info p-button-rounded"
      style={{ height: "4rem", fontSize: "1.3rem", padding: "1.4rem" }}
    >
      Begin your journey
    </Button>
    <br />
  </>
);

export default IntroText;
