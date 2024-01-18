import React from "react";
import authImg from "../assets/authImage.png";

const AuthSectionDesign = () => {
  return (
    <section className="items-start justify-center hidden authSectionDesign md:flex md:py-12">
      <div className="relative flex items-center justify-center cover lg:flex-col">
        <figure className="w-[clamp(7rem,_1rem_+_1vw,_9rem)]">
          <img className="w-full h-full" src={authImg} alt="loginImg" />
        </figure>
        <div className="mt-4 text-center heading">
          <h1 className="font-medium text-nursh_green">Goldenursh</h1>
          <p>
            Your one - stop <br /> restaurant <br /> {"(Online and On - site)"}
          </p>
        </div>
        <div className="absolute h-3 underline bg-nursh_dark_olive lg:hidden"></div>
      </div>
    </section>
  );
};

export default AuthSectionDesign;
