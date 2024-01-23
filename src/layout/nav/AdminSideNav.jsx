import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../components/Logo";
import { SlHome } from "react-icons/sl";
import { BiBell, BiDish } from "react-icons/bi";
import { RiShoppingBag3Line } from "react-icons/ri";
import { BsGrid1X2Fill } from "react-icons/bs";
import { MdOutlineInventory2 } from "react-icons/md";
import { FiShoppingBag } from "react-icons/fi";
import {
  HiOutlineArrowLeftOnRectangle,
  HiOutlineArrowRightOnRectangle,
} from "react-icons/hi2";
import { FaTimes, FaUsers } from "react-icons/fa";

import { HiOutlineMail } from "react-icons/hi";
import { motion } from "framer-motion";
import {
  HideForNoneAdminRole,
  ShowOnLogin,
  ShowOnLogout,
} from "../../components/RequireLinks";
import useWindowSize from "../../hooks/useWindowSize";
import OptionsPopUp from "../../components/OptionsPopUp";

const AdminSideNav = ({ setIsSideNavOpen }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLogoutOptOpen, setIsLogOutOptOpen] = useState(false);

  const { width } = useWindowSize();

  const handleLogout = async () => {
    /* try {
      await signOut(auth);
      if (width < 1200) setIsSideNavOpen(false);
      setAdminRole("");
      deleteUser();
      setIsAdmin(false);
      toast.success("logout Successful");
    } catch (error) {
      console.error(error);
      error.code === "auth/internal-error"
        ? toast.error("check your Network")
        : toast.error(error.code.split("/")[1]);
    } */
  };

  const handleClick = () => {
    if (width >= 1200) return;
    setIsSideNavOpen(false);
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, x: -300 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 200 }}
        className="sideNav adminSideNav h-full fixed lg:static top-0 left-0 bottom-0 w-full text-white grid grid-cols-[70%_30%] text-[clamp(1rem,_0.7rem_+_1vw,_1.3rem)] lg:grid-cols-1  "
      >
        <section className="flex flex-col gap-6 py-4 overflow-auto bg-nursh_green">
          <div className="flex items-center justify-between px-2 ">
            <Logo />
            <FaTimes className="cancelButton lg:hidden" onClick={handleClick} />
          </div>
          <nav>
            <h2 className="text-[clamp(0.7rem,_0.6rem_+_1vw,_1.2rem)] p-[0.7rem] ">
              MENU
            </h2>
            <ul className="flex flex-col">
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "bg-nursh_dark_olive border-r-[0.2rem] border-nursh_light_gold"
                    : undefined
                }
                to={"/admin/dashboard"}
                onClick={handleClick}
              >
                <li className="flex items-center gap-4 p-[0.7rem] ">
                  <BsGrid1X2Fill /> Dashboard
                </li>
              </NavLink>

              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "bg-nursh_dark_olive border-r-[0.2rem] border-nursh_light_gold"
                    : undefined
                }
                to={"/admin/staffs"}
                onClick={handleClick}
              >
                <li className="flex items-center gap-4 p-[0.7rem] ">
                  <FaUsers /> Staffs
                </li>
              </NavLink>

              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "bg-nursh_dark_olive border-r-[0.2rem] border-nursh_light_gold"
                    : undefined
                }
                to={"/admin/orders"}
                onClick={handleClick}
              >
                <li className="flex items-center gap-4 p-[0.7rem] ">
                  <FiShoppingBag /> Orders
                </li>
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "bg-nursh_dark_olive border-r-[0.2rem] border-nursh_light_gold"
                    : undefined
                }
                to={"/admin/dishes"}
                onClick={handleClick}
              >
                <li className="flex items-center gap-4 p-[0.7rem] ">
                  <BiDish />
                  Dishes
                </li>
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "bg-nursh_dark_olive orders border-r-[0.2rem] border-nursh_light_gold"
                    : undefined
                }
                to={"/admin/inventory"}
                onClick={handleClick}
              >
                <li className="flex items-center gap-4 p-[0.7rem] ">
                  <MdOutlineInventory2 /> Inventory
                </li>
              </NavLink>
              <HideForNoneAdminRole>
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "bg-nursh_dark_olive border-r-[0.2rem] border-nursh_light_gold"
                      : undefined
                  }
                  to={"/admin/messages"}
                  onClick={handleClick}
                >
                  <li className="flex items-center gap-4 p-[0.7rem] ">
                    <HiOutlineMail /> Messages
                  </li>
                </NavLink>
              </HideForNoneAdminRole>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "bg-nursh_dark_olive border-r-[0.2rem] border-nursh_light_gold"
                    : undefined
                }
                to={"/admin/notification"}
                onClick={handleClick}
              >
                <li className="flex items-center gap-4 p-[0.7rem] ">
                  <BiBell />
                  Notification
                </li>
              </NavLink>

              {/* login */}
              <ShowOnLogout>
                <NavLink to={"/auth/login"} onClick={handleClick}>
                  <li className="flex items-center gap-4 p-[0.7rem] ">
                    <HiOutlineArrowRightOnRectangle /> Login
                  </li>
                </NavLink>
              </ShowOnLogout>

              {/* logout */}
              <ShowOnLogin>
                <li
                  className="flex items-center gap-4 p-[0.7rem] "
                  onClick={() => setIsLogOutOptOpen(true)}
                  style={{ cursor: "pointer" }}
                >
                  <HiOutlineArrowLeftOnRectangle /> Logout
                </li>
              </ShowOnLogin>
            </ul>
          </nav>
        </section>
        <section
          className="bg-black bg-opacity-50 lg:hidden"
          onClick={handleClick}
        ></section>
      </motion.div>

      {isLogoutOptOpen && (
        <OptionsPopUp
          handleLogout={handleLogout}
          setIsLogOutOptOpen={setIsLogOutOptOpen}
          type={"logout"}
        />
      )}
    </>
  );
};

export default AdminSideNav;
