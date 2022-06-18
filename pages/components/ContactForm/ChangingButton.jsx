import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { Button } from "primereact/button";

import { CopyToClipboard } from "react-copy-to-clipboard";

const ChangingButton = () => {
  const [enlarge, setEnlarge] = useState(false);
  const [copied, setCopied] = useState(false);

  const text = !enlarge ? (
    "Begin your journey"
  ) : (
    <span>elvira.danci@hotmail.com</span>
  );

  const toggleEnlarge = () => setEnlarge((e) => !e);

  // should extract this logic into a hook
  const [show, setShow] = useState(false);
  useEffect(() => {
    setShow(true);
  }, []);

  if (!show) {
    return <div className="motionButton"></div>;
  }
  // some default
  if (typeof window === "undefined") {
    return <div className="motionButton"></div>;
  }

  return (
    <div>
      <AnimatePresence>
        {!enlarge ? (
          <motion.div
            className="motionButton"
            onClick={toggleEnlarge}
            layoutId="changingButton"
            style={{ cursor: "pointer" }}
          >
            <motion.h1 style={{ marginTop: "1rem", fontWeight: 500 }}>
              {text}
            </motion.h1>
          </motion.div>
        ) : (
          <motion.div
            className="motionButton"
            layoutId="changingButton"
            // style={divStyle}
          >
            <motion.h2 style={{ fontWeight: 500, marginTop: "0.7rem" }}>
              <motion.span>{text}</motion.span>
              <CopyToClipboard
                text={"elvira.danci@hotmail.com"}
                onCopy={() => setCopied(true)}
              >
                <Button
                  style={{ marginLeft: "0.5rem", marginRight: "0.5rem" }}
                  icon="pi pi-copy"
                  className="p-button-rounded p-button-secondary p-button-text"
                  aria-label="Copy"
                />
              </CopyToClipboard>
              <Button
                icon="pi pi-times"
                className="p-button-rounded p-button-danger p-button-text"
                aria-label="Notification"
                onClick={toggleEnlarge}
              />
            </motion.h2>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ChangingButton;
