import Image from "next/image";
import dynamic from "next/dynamic";
import styles from "../styles/Home.module.css";
import { useEffect, useState } from "react";
import { Card } from "primereact/card";
import { Button } from "primereact/button";

const PictureWrapper = ({ image, children }) => {
  return (
    <div className="picture-wrapper">
      <div className="picture-wrapper-item">
        <div
          style={{
            height: "100%",
            minHeight: "40rem",
            width: "100%",
            position: "relative",
            backgroundSize: "cover",
            backgroundImage: `url(${image})`,
          }}
        >
          {/**
         * 
        <Image layout="fill" objectFit="contain" src={image} alt={"boat"} />  */}
        </div>
      </div>
      <div className="picture-wrapper-item picture-wrapper-child">
        {children}
      </div>
    </div>
  );
};

const Intro = () => (
  <div style={{ padding: "5rem", textAlign: "center" }}>
    <p>Start To Improve Your Life</p>
    <div style={{ paddingBottom: "2rem" }}>
      <span style={{ fontSize: "4rem", fontWeight: "100" }}>
        Find Purpose & Create The Life That You Want
      </span>
    </div>
    <Button label="Proceed" className="p-button-raised p-button-rounded" />
  </div>
);

export default function Home() {
  return (
    <div
      style={{
        padding: "3rem",
        backgroundColor: "#5BC4F7",
        minHeight: "100vh",
        height: "100%",
      }}
    >
      <div style={{ maxWidth: "100rem", margin: "auto" }}>
        <PictureWrapper image={"/images/boat.jpg"}>
          <Intro />
        </PictureWrapper>
      </div>
    </div>
  );
}
