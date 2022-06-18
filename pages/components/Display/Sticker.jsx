import { useState, useEffect } from "react";

import _ from "lodash";

import { v4 } from "uuid";

const stickyClass = "sticky";

const Sticker = ({ child, id }) => {
  const [stickyDimensions, setStickyDimensions] = useState({
    width: undefined,
    top: undefined,
    height: undefined,
  });

  const [isStick, setIsStick] = useState(undefined);

  useEffect(() => {
    const { width, top, height } = document
      .querySelector(`#${id}`)
      .getBoundingClientRect();

    setStickyDimensions({ width, top: top + window.scrollY, height });
  }, [id]);

  useEffect(() => {
    const isSticky = (_e) => {
      const scrollTop = window.scrollY;

      if (scrollTop >= stickyDimensions.top - 10) {
        setIsStick(true);
      } else {
        setIsStick(false);
      }
    };

    window.addEventListener("scroll", isSticky);
    return () => {
      window.removeEventListener("scroll", isSticky);
    };

    //return;
  }, [stickyDimensions]);

  const newChild = (stck) => ({
    ...child,
    props: {
      ...child.props,
      style: stck ? { width: stickyDimensions.width } : {},
      className: stck ? stickyClass : "",
    },
  });

  return (
    <>
      <div
        style={isStick ? { height: `${stickyDimensions.height}px` } : {}}
      ></div>
      <div id={id}>{newChild(isStick)}</div>
    </>
  );
};

export default Sticker;
