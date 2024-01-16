import React, { useEffect, useState } from "react";
import { BsInstagram, BsTwitter, BsWhatsapp } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { IoIosArrowDropup } from "react-icons/io";
import useWindowSize from "../../hooks/useWindowSize";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [isShowButton, setIsShowButton] = useState(false);

  const { height } = useWindowSize();

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || document.documentElement.scrollTop;

      setIsShowButton(scrollY > window.innerHeight);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const year = new Date().getFullYear();
  const socialIcons = [
    <BsInstagram />,
    <BsTwitter />,
    <FaFacebookF />,
    <BsWhatsapp />,
  ];
  const handleGoToTop = () => {
    window.scrollTo({
      top: 0,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="bg-nursh_green p-[1.5rem_0_0] text-white flex flex-col items-center justify-center gap-4 ">
      <div className="footerSections w-[80%] mx-auto grid gap-4 md:grid-cols-[30%_40%_30%] md:gap-0 md:w-[90%]">
        <section className="flex flex-col justify-center gap-[0.4rem] items-start">
          <p>Socials</p>
          <div className="flex items-center justify-around gap-2 socials ">
            {socialIcons.map((icon, index) => (
              <button
                className="p-[clamp(0.4rem,_0.3rem_+_1vw,_0.7rem)] rounded-card_border_radius bg-nursh_dark_gold text-white flex items-center justify-center *:text-[clamp(0.5rem,_0.5rem_+_1vw,_1rem)] "
                key={index}
              >
                {icon}
              </button>
            ))}
          </div>
        </section>
        <section className="flex flex-col items-center justify-center md:items-end  gap-[0.4rem] formSection">
          <p>Subscribe to our newsletter for frequent trends update</p>
          <form
            className="w-full bg-white flex justify-center items-center p-[0.2rem] rounded-tr-card_border_radius rounded-br-card_border_radius"
            onSubmit={handleSubmit}
          >
            <label className="offscreen" htmlFor="email">
              Enter your email:
            </label>
            <input
              className="w-full bg-transparent outline-none grow"
              type="email"
              id="email"
              placeholder="email"
            />
            <button className="text-white bg-nursh_dark_olive text-inherit p-[0.4rem_0.6rem]">
              Subscribe
            </button>
          </form>
        </section>
        {isShowButton && (
          <section>
            <a
              role="button"
              className="text-right flex items-center justify-center gap-[0.2rem] bg-nursh_cream text-black py-2 md:w-auto md:bg-transparent md:font-semibold md:text-white w-full  "
              onClick={handleGoToTop}
            >
              Back to Top{" "}
              <IoIosArrowDropup className="text-[clamp(1rem,_1rem_+_1vw,_1.3rem)]" />
            </a>
          </section>
        )}
      </div>
      <p className="footing py-[0.4rem] text-center border-t-[0.05rem] border-solid border-nursh_cream w-[95%]">
        Copyright {year} &copy; All rights Reserved.{" "}
      </p>
    </div>
  );
};

export default Footer;
