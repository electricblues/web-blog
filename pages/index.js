import MenuBar from "./components/Display/MenuBar";
import Intro from "./components/Display/Intro";
import PictureWrapper from "./components/Display/PictureWrapper";

export default function Home() {
  return (
    <div
      style={{
        padding: "3rem",
        paddingTop: "0px",
        backgroundColor: "#ADCBCB",
        minHeight: "100vh",
        height: "100%",
      }}
    >
      <div style={{ maxWidth: "100rem", margin: "auto" }}>
        <MenuBar />
        <br />
        <PictureWrapper image={"/images/boat.jpg"} left={false}>
          <Intro />
        </PictureWrapper>
        <br />
      </div>
    </div>
  );
}
