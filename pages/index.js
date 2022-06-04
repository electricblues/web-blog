import MenuBar from "./components/Display/MenuBar";
import Intro from "./components/Display/Intro";
import Paragraph from "./components/Display/Paragraph";
import PictureWrapper from "./components/Display/PictureWrapper";
import { Button } from "primereact/button";
import Divider from "./components/Display/Divider";

export default function Home() {
  return (
    <div
      style={{
        paddingTop: "0px",
        minHeight: "100vh",
        height: "100%",
      }}
    >
      {/** new intro */}
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
          <Intro />
        </div>
      </div>

      <div
        className="temp-body"
        style={{
          padding: "2rem",
          marginTop: "2rem",
          width: "100%",
          margin: "auto",
          textAlign: "center",

          fontFamily: `"Cormorant Garamond", serif`,
        }}
      >
        <>
          <br />
          <br />
          <div style={{ fontSize: "2rem", maxWidth: "40rem", margin: "auto" }}>
            Like a sailboat you already have all the necessary equipment for
            your life journey.
          </div>
          <br />
          <div
            style={{ fontSize: "1.6rem", maxWidth: "40rem", margin: "auto" }}
          >
            Define your destiny. Learn how to navigate your boat towards the
            life of{" "}
            <b>
              <i>your choice</i>
            </b>
            .
          </div>
          <br />
          <br />
          <Button>Say hello</Button>
          <br />
        </>

        <>
          <div
            style={{
              textAlign: "left",
              margin: "auto",
              maxWidth: "80rem",
              marginTop: "5rem",
            }}
          >
            <Divider> * * * </Divider>
            <Paragraph
              title={"about"}
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
            <Paragraph
              title={"qualifications"}
              titleDirection={"right"}
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

            <Paragraph
              title={"why coaching?"}
              titleDirection={"center"}
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
          </div>
        </>
      </div>
    </div>
  );
}
