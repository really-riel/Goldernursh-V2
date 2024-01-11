import React, { useState } from "react";
import { FiChevronDown, FiChevronRight } from "react-icons/fi";
import TabletNav from "./Nav";
import { Link, NavLink } from "react-router-dom";
import { motion } from "framer-motion";

import { toast } from "react-toastify";
import { RequireAdminLink } from "../../components/RequireLinks";
import { FaUserCog } from "react-icons/fa";
import OptionsPopUp from "../../components/OptionsPopUp";

const DesktopNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  /*   const { setIsAdmin, deleteUser, setAdminRole } = useStoreActions(
    (actions) => actions.auth
  ); */

  const [isLogoutOptOpen, setIsLogOutOptOpen] = useState(false);

  const handleLogout = async () => {};
  return (
    <>
      <nav className="hidden pr-4 desktopNav lg:flex lg:items-center lg:justify-center">
        <ul className="flex items-center justify-center gap-[0.4rem] *:p-[0.5rem_1.2rem]">
          <NavLink to={"/"} onClick={() => setIsOpen(false)}>
            <motion.li whileTap={{ scale: 0.8 }}>Home</motion.li>
          </NavLink>

          <RequireAdminLink>
            <NavLink to={"/admin/dashboard"}>
              <li>Admin</li>
            </NavLink>
          </RequireAdminLink>

          <motion.li
            whileTap={{ scale: 0.8 }}
            className="relative flex items-center justify-center category"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span>Categories</span>
            {isOpen ? (
              <FiChevronDown className="mt-[0.2rem]" />
            ) : (
              <FiChevronRight className="mt-[0.2rem]" />
            )}
            {isOpen && (
              <div className="categoryList absolute top-12 text-[clamp(0.5rem,_0.1rem_+_1vw,_0.8rem)] p-[min(3vh,_0.4rem)_0] w-[8rem] bg-white rounded-card_border_radius text-black  ">
                <ul className="flex flex-col items-center *:p-[0.5rem_1.2rem]">
                  <Link to={"/#trendingOrders"}>
                    <li onClick={(e) => setIsOpen(false) && console.log("ok")}>
                      Trending List
                    </li>
                  </Link>
                  <Link to={"/#yourChoice"}>
                    <li onClick={() => setIsOpen(false)}>
                      Order based on your choice
                    </li>
                  </Link>
                </ul>
              </div>
            )}
          </motion.li>
          <NavLink to={"/contact"}>
            <motion.li whileTap={{ scale: 0.8 }}>Contact</motion.li>
          </NavLink>
          <NavLink to={"/orders"}>
            <motion.li whileTap={{ scale: 0.8 }}>Orders</motion.li>
          </NavLink>
          {/* {user ? (
            <Link onClick={() => setIsLogOutOptOpen(true)}>Logout</Link>
          ) : (
            <NavLink to={"auth/login"}>
              <motion.li
                whileTap={{ scale: 0.8 }}
                onClick={() => setIsOpen(false)}
              >
                Login
              </motion.li>
            </NavLink>
          )} */}

          <TabletNav />
        </ul>
      </nav>
      {/* {isLogoutOptOpen && (
        <OptionsPopUp
          handleLogout={handleLogout}
          setIsLogOutOptOpen={setIsLogOutOptOpen}
          type={"logout"}
        />
      )} */}
    </>
  );
};

export default DesktopNav;
