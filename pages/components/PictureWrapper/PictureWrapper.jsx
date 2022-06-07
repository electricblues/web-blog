const PictureWrapper = ({ image, children, left = true }) => {
  const imageDiv = (
    <div className="picture-wrapper-item">
      <div
        className="picture-wrapper-image"
        style={{
          backgroundImage: `url(${image})`,
        }}
      ></div>
    </div>
  );

  const child = (
    <div className="picture-wrapper-item picture-wrapper-child">{children}</div>
  );

  return (
    <div className="picture-wrapper">
      {left ? (
        <>
          {imageDiv}
          {child}
        </>
      ) : (
        <>
          {child}
          {imageDiv}
        </>
      )}
    </div>
  );
};

export default PictureWrapper;
