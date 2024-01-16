import React from "react";
import logo from "../assets/logo.png";

const Logo = () => {
  return (
    <figure className="">
      <img
        className="w-24 md:w-[_clamp(8rem,_1rem_+_1vw,_9rem)] -mb-2  md:-mb-3"
        src={logo}
        alt="goldenurshLogo"
      />
    </figure>
  );
};

export default Logo;
