import React from "react";
import { useState } from "react";
import useWindowSize from "../../hooks/useWindowSize";
import { motion } from "framer-motion";
import { GiHamburgerMenu } from "react-icons/gi";
import Logo from "../../components/Logo";
import SideNav from "../nav/SideNav";
import { Link, NavLink } from "react-router-dom";
import AdminSideNav from "../nav/AdminSideNav";
import { RequireAdminLink } from "../../components/RequireLinks";
import { HiOutlineMail } from "react-icons/hi";
import { BiBell } from "react-icons/bi";
import { useEffect } from "react";
import Nav from "../nav/Nav";
import { user } from "../../utils/data";

const AdminHeader = () => {
  /*  const { user } = useStoreState((state) => state.auth); */
  const [isSideNavOpen, setIsSideNavOpen] = useState(false);
  const { width } = useWindowSize();

  /* const { docItems, isLoading } = useGetCollection("userChat"); */
  const [totalPendingMsgs, setTotalPendingMsgs] = useState(0);

  /* useEffect(() => {
    if (docItems) {
      const pendingMessages = docItems?.filter(
        (item) => item.status === "pending"
      );
      setTotalPendingMsgs(pendingMessages?.length);
    }
  }, [docItems]); */

  return (
    <RequireAdminLink>
      <header className="flex items-center justify-between px-2 adminHeader lg:bg-white lg:shadow-card_shadow bg-nursh_green">
        <motion.div
          className="text-white hamburgerMenu lg:hidden"
          whileTap={{ scale: 0.8 }}
        >
          <GiHamburgerMenu
            size={width >= 768 ? "2.5rem" : "1.5rem"}
            onClick={() => setIsSideNavOpen(!isSideNavOpen)}
          />
        </motion.div>
        <div className="flex logoContainer lg:hidden">
          <nav className="flex gap-3 mobileHeaderNav lg:hidden ">
            <ul className="flex items-center gap-2">
              <Link to={"/admin/messages"}>
                <li className="icon p-2 bg-nursh_light_gold rounded-[0.3rem] relative grid place-items-center">
                  <HiOutlineMail />
                  {totalPendingMsgs > 0 && (
                    <div className="absolute text-white bg-red-500 notify -top-1 -right-1 h-[20px] w-[20px] rounded-full text-center">
                      <p>{totalPendingMsgs}</p>
                    </div>
                  )}
                </li>
              </Link>
              {/*  <Link to={"admin/notification"}>
                <li className="icon">
                  <BiBell />
                </li>
              </Link> */}
            </ul>
            {width < 1024 && (
              <NavLink to={"/profile"}>
                {user ? (
                  <img
                    src={user.image ? user.image : avatar}
                    alt=""
                    className="object-cover w-10 h-10 rounded-lg "
                    referrerPolicy="no-referrer"
                  />
                ) : (
                  <motion.button
                    className="grid w-10 h-10 place-content-center "
                    whileTap={{ scale: 0.8 }}
                  >
                    <BsPerson className="text-clamp_3" />
                  </motion.button>
                )}
              </NavLink>
            )}
          </nav>

          <Link to={"/"}>
            <Logo />
          </Link>
        </div>
        <nav className="hidden ml-auto laptopHeaderNav text-nursh_green lg:flex">
          <ul className="flex items-center gap-2">
            <Link to={"/"}>
              <li>Home</li>
            </Link>
            <Link to={"/admin/messages"}>
              <li className="icon p-2 bg-nursh_light_gold rounded-[0.3rem] relative grid place-items-center *:text-nursh_green *:text-[clamp(0.5rem,_1rem_+_1vw,_1.5rem)]">
                <HiOutlineMail />
                {totalPendingMsgs > 0 && (
                  <div className="notify">
                    <p>{totalPendingMsgs}</p>
                  </div>
                )}
              </li>
            </Link>
            <Link to={"admin/notification"}>
              <li className="icon p-2 bg-nursh_light_gold rounded-[0.3rem] relative grid place-items-center *:text-nursh_green *:text-[clamp(0.5rem,_1rem_+_1vw,_1.5rem)]">
                <BiBell />
              </li>
            </Link>
            <li className="flex items-center gap-2 userDetails">
              <img
                className="w-[35px] h-[35px] object-cover rounded-full "
                src={user?.image}
                alt=""
              />
              <p>
                {user?.name} <br />
                <span className="text-[clamp(0.4rem,_1rem_+_1vw,_0.8rem)]">
                  Admin
                </span>
              </p>
            </li>
          </ul>
        </nav>

        {isSideNavOpen && <AdminSideNav setIsSideNavOpen={setIsSideNavOpen} />}
      </header>
    </RequireAdminLink>
  );
};

export default AdminHeader;
