import React from "react";
import BannerImage from "../images/banner.png";

const Banner = () => {
    return (
        <div>
            <img className="my-banner" src={BannerImage} alt="Banner"/>
        </div>
    );
}

export default Banner;
