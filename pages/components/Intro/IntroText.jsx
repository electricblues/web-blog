import React, { useState } from "react";
import { Button } from "primereact/button";
import Sticker from "../Display/Sticker";
import ChangingButton from "../ContactForm/ChangingButton";

const stickyElement = "stick";

const IntroText = ({ onButtonAction }) => {
  const introButton = (
    <div style={{ fontSize: "2rem", maxWidth: "40rem", margin: "auto" }}>
      <Button
        className="p-button-info p-button-rounded"
        style={{
          height: "4rem",
          fontSize: "1.3rem",
        }}
        onClick={onButtonAction}
      >
        Begin your journey
      </Button>
    </div>
  );

  const introButton2 = (
    <div style={{ fontSize: "2rem", maxWidth: "40rem", margin: "auto" }}>
      <ChangingButton />
    </div>
  );
  return (
    <>
      <div style={{ fontSize: "2rem", maxWidth: "40rem", margin: "auto" }}>
        Like a sailboat you already have all the necessary equipment for your
        life journey
      </div>
      <br />
      <div style={{ fontSize: "1.6rem", maxWidth: "40rem", margin: "auto" }}>
        Define your destiny
      </div>{" "}
      <div style={{ fontSize: "1.6rem", maxWidth: "40rem", margin: "auto" }}>
        Learn how to navigate your boat towards the life of{" "}
        <b style={{ color: "#0288D1" }}>your choice</b>
      </div>
      <br />
      <br />
      <Sticker id="something" child={introButton2} />
    </>
  );
};

export default IntroText;
