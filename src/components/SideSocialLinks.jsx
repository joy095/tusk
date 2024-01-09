import React from "react";
import FacebookIcon from "../assets/icons/facebook.svg";

const SideSocialLinks = () => {
  return (
    <div className="social-box-container fixed right-0 top-[30%] w-[30px] h-[120px] bg-white rounded-tl-[4px] rounded-bl-[4px]">
      <div className="social-box">
        <img src={FacebookIcon} alt="" />
      </div>
      <div className="social-box">
        <img src={FacebookIcon} alt="" />
      </div>
      <div className="social-box">
        <img src={FacebookIcon} alt="" />
      </div>
      <div className="social-box">
        <img src={FacebookIcon} alt="" />
      </div>
    </div>
  );
};

export default SideSocialLinks;
