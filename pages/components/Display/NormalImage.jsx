import Image from "next/image";

const NormalImage = ({ src, alt, height }) => (
  <div
    style={{ position: "relative", height: height || "4rem", width: "100%" }}
  >
    <Image src={src} layout="fill" alt={alt || "image"} objectFit="contain" />
  </div>
);

export default NormalImage;
