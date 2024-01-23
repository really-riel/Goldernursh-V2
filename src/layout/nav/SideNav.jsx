import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../components/Logo";
import { SlHome } from "react-icons/sl";
import { HiOutlineViewGrid } from "react-icons/hi";
import { MdOutlineConnectWithoutContact } from "react-icons/md";
import { FiChevronDown, FiChevronRight, FiShoppingCart } from "react-icons/fi";
import { BsPerson } from "react-icons/bs";
import {
  HiOutlineArrowLeftOnRectangle,
  HiOutlineArrowRightOnRectangle,
} from "react-icons/hi2";
import { FaBox, FaTimes, FaUserCog } from "react-icons/fa";
import { motion } from "framer-motion";
import {
  RequireAdminLink,
  ShowOnLogin,
  ShowOnLogout,
} from "../../components/RequireLinks";

import { toast } from "react-toastify";
/* import { useStoreActions, useStoreState } from "easy-peasy";
/* import ClickOutside from "../../components/OptionsPopUp"; */
/* import OptionsPopUp from "../../components/OptionsPopUp"; */

const SideNav = ({ setIsSideNavOpen }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLogoutOptOpen, setIsLogOutOptOpen] = useState(false);
  /*   const { deleteUser, setIsAdmin, setAdminRole } = useStoreActions(
    (actions) => actions.auth
  );
 */
  const handleLogout = async () => {};

  return (
    <>
      <motion.div
        initial={{ opacity: 0, x: -300 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 200 }}
        className="fixed top-0 left-0 bottom-0 w-full text-white grid grid-cols-[70%_30%] text-[clamp(1rem,_0.7rem_+_1vw,_1.3rem)] "
      >
        <section className="flex flex-col gap-6 py-4 overflow-auto bg-nursh_green">
          <div className="flex items-center justify-between px-2 ">
            <Logo />
            <FaTimes
              className="mr-[0.7rem] cursor-pointer"
              onClick={() => setIsSideNavOpen(false)}
            />
          </div>
          <nav>
            <ul className="flex flex-col">
              <NavLink to={"/"} onClick={() => setIsSideNavOpen(false)}>
                <li className="flex items-center gap-4 p-[0.7rem] ">
                  <SlHome /> Home
                </li>
              </NavLink>
              <RequireAdminLink>
                <NavLink
                  to={"/admin/dashboard"}
                  onClick={() => setIsSideNavOpen(false)}
                >
                  <li className="flex items-center gap-4 p-[0.7rem] ">
                    <FaUserCog /> Admin
                  </li>
                </NavLink>
              </RequireAdminLink>

              <li
                className="flex  items-center gap-4 p-[0.7rem] cursor-pointer  "
                onClick={() => setIsOpen(!isOpen)}
              >
                <HiOutlineViewGrid />
                Categories
                {isOpen ? (
                  <FiChevronDown className="mt-1" />
                ) : (
                  <FiChevronRight className="mt-1" />
                )}
              </li>
              {isOpen && (
                <ul className="pl-10 flex flex-col justify-center  text-[clamp(0.2rem,_0.6rem_+_1vw,_0.9rem)] categoryList ">
                  <a
                    href="#trendingOrders"
                    onClick={() => setIsSideNavOpen(false)}
                  >
                    <li className="flex items-center gap-4 p-[0.7rem] ">
                      Trending Orders
                    </li>
                  </a>
                  <a href="#yourChoice" onClick={() => setIsSideNavOpen(false)}>
                    <li className="flexitems-center gap-4 p-[0.7rem] ">
                      Order based on your choice
                    </li>
                  </a>
                </ul>
              )}

              {/*  <NavLink to={"/contact"} onClick={() => setIsSideNavOpen(false)}>
                <li className="flex items-center gap-4 p-[0.7rem] ">
                  <MdOutlineConnectWithoutContact /> Contact
                </li>
              </NavLink> */}
              <NavLink
                className="cart"
                to={"/cart"}
                onClick={() => setIsSideNavOpen(false)}
              >
                <li className="flex items-center gap-4 p-[0.7rem] ">
                  <FiShoppingCart /> Cart
                </li>
              </NavLink>
              <NavLink
                className="profile"
                to={"/profile"}
                onClick={() => setIsSideNavOpen(false)}
              >
                <li className="flex items-center gap-4 p-[0.7rem] ">
                  <BsPerson />
                  Profile
                </li>
              </NavLink>
              <NavLink
                className="orders"
                to={"/orders"}
                onClick={() => setIsSideNavOpen(false)}
              >
                <li className="flex items-center gap-4 p-[0.7rem] ">
                  <FaBox />
                  Orders
                </li>
              </NavLink>
              {/* login */}
              {/* <ShowOnLogout>
                <NavLink
                  to={"/auth/login"}
                  onClick={() => setIsSideNavOpen(false)}
                >
                  <li className="flex items-center gap-4 p-[0.7rem] ">
                    <HiOutlineArrowRightOnRectangle /> Login
                  </li>
                </NavLink>
              </ShowOnLogout> */}
              <NavLink
                to={"/auth/login"}
                onClick={() => setIsSideNavOpen(false)}
              >
                <li className="flex items-center gap-4 p-[0.7rem] ">
                  <HiOutlineArrowRightOnRectangle /> Login
                </li>
              </NavLink>

              {/* logout */}
              <ShowOnLogin>
                <li
                  className="flex items-center gap-4 p-[0.7rem] "
                  onClick={() => {
                    setIsLogOutOptOpen(true);
                  }}
                  style={{ cursor: "pointer" }}
                >
                  <HiOutlineArrowLeftOnRectangle /> Logout
                </li>
              </ShowOnLogin>
            </ul>
          </nav>
        </section>
        <section
          className="bg-black bg-opacity-50"
          onClick={() => setIsSideNavOpen(false)}
        ></section>
      </motion.div>

      {/*  {isLogoutOptOpen && (
        <OptionsPopUp
          handleLogout={handleLogout}
          setIsLogOutOptOpen={setIsLogOutOptOpen}
          type={"logout"}
        />
      )} */}
    </>
  );
};

export default SideNav;
