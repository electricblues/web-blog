import { Button } from "primereact/button";
import { Parallax } from "react-parallax";
const Intro = ({ text }) => {
  //const isDesktop = useMediaQuery("(min-width: 960px)");
  return (
    <>
      {/* <div
      className="intro-picture"
      style={{
        backgroundImage: `url(/images/boat.jpg)`,
      }}
    >
      
    </div>{" "} */}
      <Parallax
        blur={0}
        bgImage={`/images/boat.jpg`}
        bgImageAlt="boat"
        strength={200}
      >
        <div className="intro-block">
          <div className="intro-text-block">
            <div className="intro">
              <div style={{ fontWeight: 500 }}>
                <span className="intro-title">{text}</span>
              </div>
              <div className="intro-action"></div>
            </div>
          </div>
        </div>
      </Parallax>
    </>
  );
};

export default Intro;
