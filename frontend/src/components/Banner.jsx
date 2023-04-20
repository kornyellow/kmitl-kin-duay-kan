import React from "react";
import BannerImage from "../images/banner.png";

const Banner = () => {
  return (
    <div className="my-banner-container animate__animated animate__fadeIn animate__fast">
      <img className="my-banner" src={BannerImage} alt="Banner"/>
    </div>
  );
}

export default Banner;
