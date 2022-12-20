import React from "react";

const Agrisvg = () => {
  return (
    <svg
      width="100"
      height="100"
      viewBox="0 0 150 150"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_di_1_2122)">
        <circle cx="75" cy="75" r="45" fill="#579181" />
      </g>
      <path
        d="M50 52.9995C59.1242 59.7653 70.7678 74.0078 72.4955 97.9995C74.5133 82.659 75.8698 76.6245 81.4937 66.4995"
        stroke="white"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M91.3355 63.1988C93.7276 66.8546 94.9983 71.1304 94.991 75.4995C94.991 87.9263 84.9198 97.9995 72.4955 97.9995C60.0712 97.9995 50 87.9263 50 75.4995C50 63.0728 60.0712 52.9995 72.4955 52.9995C77.0014 52.9995 81.199 54.3248 84.7173 56.6063"
        stroke="white"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M83.9771 57.4995C81.723 60.366 81.3991 63.318 81.5026 66.4995C85.7767 66.2745 88.258 66.0473 91.1756 63.3495C94.3385 60.4245 94.7749 58.1745 94.9999 52.9995C88.9261 53.2245 86.8498 53.8433 83.9771 57.4995Z"
        stroke="white"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <defs>
        <filter
          id="filter0_di_1_2122"
          x="0"
          y="0"
          width="150"
          height="150"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset />
          <feGaussianBlur stdDeviation="15" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.341176 0 0 0 0 0.568627 0 0 0 0 0.505882 0 0 0 1 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_1_2122"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_1_2122"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"
          />
          <feBlend
            mode="normal"
            in2="shape"
            result="effect2_innerShadow_1_2122"
          />
        </filter>
      </defs>
    </svg>
  );
};

export default Agrisvg;
