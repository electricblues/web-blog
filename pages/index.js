import Intro from "./components/Intro/Intro";
import Paragraph from "./components/Display/Paragraph";
import { Divide } from "./components/Display/Divider";
import IntroText from "./components/Intro/IntroText";
import Page from "./components/Display/Page";
import NormalImage from "./components/Display/NormalImage";
import { Parallax } from "react-parallax";
import { useRef } from "react";
import Space from "./components/Display/Space";
import { englishTexts } from "../data/texts";

export default function Home() {
  const myRef = useRef(null);

  const data = englishTexts;
  const executeScroll = () => {
    myRef.current.scrollIntoView();
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        height: "100%",
      }}
    >
      <div
        className="temp-body"
        style={{
          textAlign: "center",
          backgroundImage: "linear-gradient(lightgray, lightblue, #0066CC)",
        }}
      >
        <Parallax
          blur={0}
          bgImage={`/images/backgroundWaves.jpg`}
          bgImageAlt="boat"
          strength={400}
        >
          <div className="temp-top-buffer"></div>
          <Page>
            <Intro text={"Be The Captain of your life"} />
            <Divide color="darkgray" />
            <IntroText onButtonAction={executeScroll} />
          </Page>
          <Space />
          <Page>
            <Paragraph title={data.aboutMe.title} texts={data.aboutMe.texts} />
            <Paragraph
              title={data.coaching.title}
              texts={data.coaching.texts}
            />
          </Page>
          <Space />
          <Page>
            <Paragraph
              title={data.qualifications.title}
              texts={data.qualifications.texts}
            />
            <div style={{ display: "flex", width: "100%" }}>
              <div style={{ width: "30%" }}></div>
              <div style={{ display: "flex", width: "70%", margin: "auto" }}>
                <NormalImage src={"/images/emcc.png"} />
                <NormalImage src={"/images/icf.png"} />
                <NormalImage src={"/images/mamt.png"} />
              </div>
            </div>
          </Page>
          <Space height={"40rem"} />
        </Parallax>
      </div>
    </div>
  );
}
