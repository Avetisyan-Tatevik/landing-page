import React from "react";

const ProgressBarSvg = ({ width = 312, height = 6, className }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 312 6"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}>
      <rect width="312" height="6" fill="url(#paint0_linear_106_2282)" />
      <defs>
        <linearGradient
          id="paint0_linear_106_2282"
          x1="0"
          y1="3"
          x2="312"
          y2="3"
          gradientUnits="userSpaceOnUse">
          <stop stopColor="#CAFF00" stopOpacity="0" />
          <stop offset="0.426926" stopColor="#CAFF00" />
          <stop offset="0.547551" stopColor="#CAFF00" />
          <stop offset="1" stopColor="#799900" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default ProgressBarSvg;
