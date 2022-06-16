import Intro from "./components/Intro/Intro";
import Paragraph from "./components/Display/Paragraph";
import { Divide } from "./components/Display/Divider";
import IntroText from "./components/Intro/IntroText";
import Page from "./components/Display/Page";
import NormalImage from "./components/Display/NormalImage";
import Quote from "./components/Display/Quote";
import { Parallax } from "react-parallax";
import { useRef } from "react";
import Space from "./components/Display/Space";

export default function Home() {
  const myRef = useRef(null);

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
            <Paragraph
              title={"about me"}
              titleDirection={"left"}
              texts={[
                `Elvira believes that by taking care of your body, mind and
                spirit would help you to stay balanced and focus and help you to
                navigate through the different life situation without losing
                yourself during the stormy weathers.`,
                `When someone turns to Elvira for help she sees it as an honour
                to be chosen to walk side-by-side with a client who has chosen
                to make lasting, positive changes to their lives.`,
                `Love and compassion are the main elements when working with
                clients as they commit to changing their current beliefs and
                behaviours so that they may find fulfilment and excitement and a
                zest for life again.`,
                `She deeply admires every client who decided to make a change in
                one’s life as it takes tremendous courage to make the step.`,
              ]}
            />
            <br />

            <Quote
              text={
                "Maybe some lovely testimonial quote from someone, sprinkled in!"
              }
              author={"Steve"}
            ></Quote>

            <br />
            <Divide color="darkgray" line />
            <Paragraph
              title={"why coaching?"}
              titleDirection={"left"}
              texts={[
                `A coach is someone who provides guidance to a client on their
                goals and helps them reach their full potential.`,
                `Coaching is not
                a quick fix for all the existing problems in the client’s life
                it is rather learning the skill how to find the answers for any
                problems within oneself.`,
                `Why do I use the holistic approach in
                my programme? It is simple because she is practicing this
                approach in her life and sees the amazing results of
                self-improvement and how the life around is changing for better.`,
              ]}
            />

            <Divide color="darkgray" line />

            <br />
            <Paragraph
              title={"qualifications"}
              titleDirection={"left"}
              texts={[
                `  I have successfully completed a yearly course on Holistic
                Coaching and Working effectively with people which is accredited
                by EMCC.`,
                `Now I am in the process towards obtaining the EMCC Practitioner
                level accreditation.`,
                `Besides the coaching course to look deeper into the different
                dimensions of human being she have completed 200 hours of Yoga
                Teacher Training.`,
              ]}
            />
            <div style={{ display: "flex", width: "100%" }}>
              <div style={{ width: "30%" }}></div>
              <div style={{ display: "flex", width: "70%", margin: "auto" }}>
                <NormalImage src={"/images/emcc.png"} />
                <NormalImage src={"/images/icf.png"} />
                <NormalImage src={"/images/mamt.png"} />
              </div>
            </div>

            <br />
          </Page>
          <Space />
          <Page>
            <div ref={myRef}></div>{" "}
            <Paragraph
              title={"contact"}
              titleDirection={"left"}
              texts={[`You can contact me at mewo@meow.meow`]}
            />
          </Page>
        </Parallax>
      </div>
    </div>
  );
}
