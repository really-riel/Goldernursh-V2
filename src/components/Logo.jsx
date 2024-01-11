import React from "react";
import logo from "../assets/logo.png";

const Logo = () => {
  return (
    <figure className="">
      <img
        className="w-24 md:w-[_clamp(8rem, 1rem + 1vw, 9rem)]"
        src={logo}
        alt="goldenurshLogo"
      />
    </figure>
  );
};

export default Logo;
