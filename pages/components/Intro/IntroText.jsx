import React, { useState } from "react";
import { Button } from "primereact/button";
import Sticker from "../Display/Sticker";

const stickyElement = "stick";

// class StickyElement {
//   constructor(el) {
//     this.name = el;
//   }
//   get() {
//     return this.el;
//   }
//   getAsClass() {
//     return `.${this.el}`;
//   }
//   getAsId() {
//     return `#${this.el}`;
//   }
// }

const IntroText = ({ onButtonAction }) => {
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
      <Sticker
        id="something"
        child={
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
        }
      />
    </>
  );
};

export default IntroText;
