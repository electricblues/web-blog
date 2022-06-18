import { useState } from "react";
import { motion } from "framer-motion";

const ChangingButton = () => {
  const [enlarge, setEnlarge] = useState(false);

  const text = !enlarge
    ? "ChangingButton"
    : "enlargeenlargeenlargeenlargeenlarge";
  return (
    <motion.div
      whileHover={{
        width: 300,
        transition: { duration: 0.5 },
      }}
      onClick={() => setEnlarge((e) => !e)}
      style={{
        backgroundColor: "lightblue",
      }}
    >
      {text}
    </motion.div>
  );
};

export default ChangingButton;
