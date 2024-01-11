import React, { useState } from "react";
import useWindowSize from "../../hooks/useWindowSize";
import { GiHamburgerMenu } from "react-icons/gi";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import TabletNav from "../nav/Nav";
import SideNav from "../nav/SideNav";
import Logo from "../../components/Logo";
import DesktopNav from "../nav/DesktopNav";
import { FiShoppingCart } from "react-icons/fi";
import Nav from "../nav/Nav";

const Header = () => {
  const [isSideNavOpen, setIsSideNavOpen] = useState(false);
  const { width } = useWindowSize();
  return (
    <header className="flex justify-between bg-nursh_green  text-white items-center p-[0.5rem_0.5rem_0.2rem_0.7rem] md:pt-2 md:pb-2 lg:flex-row top-0 sticky z-50">
      <motion.div className=" lg:hidden" whileTap={{ scale: 0.8 }}>
        <GiHamburgerMenu
          className="cursor-pointer md:text-clamp_1"
          size={width >= 768 ? "2.5rem" : "1.5rem"}
          onClick={() => setIsSideNavOpen(!isSideNavOpen)}
        />
      </motion.div>
      <div className="flex gap-clamp_1">
        {width < 1200 && <Nav />}

        <Link to={"/"}>
          <Logo />
        </Link>
      </div>

      {isSideNavOpen && <SideNav setIsSideNavOpen={setIsSideNavOpen} />}
      {<DesktopNav />}
    </header>
  );
};

export default Header;
