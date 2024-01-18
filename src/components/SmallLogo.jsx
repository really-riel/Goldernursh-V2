import React from "react";
import logoSmall from "../assets/logo_small.png";

const SmallLogo = () => {
  return (
    <figure className="flex items-center justify-center smallLogo">
      <img
        className="w-[clamp(3rem,_1rem_+_1vw,_5rem)]"
        src={logoSmall}
        alt="goldenursh"
      />
    </figure>
  );
};

export default SmallLogo;
