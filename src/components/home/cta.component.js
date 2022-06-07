import React from "react";
import { ctaDevData } from "../../dev-data/home-data";

const CtaSingle = ({
  title,
  offPercentage,
  url,
  imgUrl,
  bgColor,
  btnBgcolor,
}) => (
  <div className="cta__single" style={{ backgroundColor: bgColor }}>
    <div>
      <span className="cta__single__off-percentage mb-small">{`${offPercentage}% off`}</span>
      <h3 className="heading-tersiary mb-small">{title}</h3>
      <a
        className="btn-secondery"
        style={{ backgroundColor: btnBgcolor }}
        href={url}
      >
        Shop Now
      </a>
    </div>
    <img className="cta__single__img" src={imgUrl} alt={title} />
  </div>
);

const Cta = () => {
  return (
    <div className="cta mb-exlarge">
      {ctaDevData.map((cur, i) => (
        <CtaSingle key={i} {...cur} />
      ))}
    </div>
  );
};

export default Cta;
