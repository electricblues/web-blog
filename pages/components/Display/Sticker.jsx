import React, { useState, useEffect } from "react";

import _ from "lodash";

import { v4 } from "uuid";

const stickyClass = "sticky";

const Sticker = ({ child, id, children }) => {
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

  // const newChild = (stck) =>
  //   child
  //     ? {
  //         ...child,
  //         props: {
  //           ...child.props,
  //           style: stck ? { width: stickyDimensions.width } : {},
  //           className: stck ? stickyClass : "",
  //         },
  //       }
  //     : {};

  const childrenWithProps = (stck) =>
    React.Children.map(children, (child) => {
      // Checking isValidElement is the safe way and avoids a typescript
      // error too.
      if (React.isValidElement(child)) {
        return React.cloneElement(child, {
          style: stck ? { width: stickyDimensions.width } : {},
          className: stck ? stickyClass : "",
        });
      }
      return child;
    });

  return (
    <>
      <div
        style={isStick ? { height: `${stickyDimensions.height}px` } : {}}
      ></div>
      <div id={id}>{childrenWithProps(isStick)}</div>
    </>
  );
};

export default Sticker;
