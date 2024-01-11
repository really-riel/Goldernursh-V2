import React, { useEffect, useState } from "react";
import { BsPerson } from "react-icons/bs";
import { FiShoppingCart } from "react-icons/fi";
import { Link, NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import avatar from "../../assets/userProfile.png";

const Nav = () => {
  const [qty, setqty] = useState(null || 0);

  /*  useEffect(() => {
    const total = cartItems.reduce((acc, item) => {
      return acc + item.quantity;
    }, 0);
    setqty(total);
  }, [cartItems]); */

  return (
    <div className="Nav flex gap-clamp_2 text-clamp_2">
      <Link to={"/cart"}>
        <motion.div
          whileTap={{ scale: 0.8 }}
          className="cart relative h-full grid place-content-center px-[0.4rem ]"
        >
          <FiShoppingCart className="text-white" />
          {qty > 0 && (
            <p className="count absolute top-[-0.03rem] right-[-0.05rem] text-[0.9rem] font-semibold bg-nursh_light_gold ">
              {qty}
            </p>
          )}
        </motion.div>
      </Link>
      <NavLink to={"/profile"}>
        {/* {user ? (
          <img
            src={user.image ? user.image : avatar}
            alt=""
            className="w-10 h-10 object-cover rounded-lg md:w-12 md:h-12 "
            referrerPolicy="no-referrer"
          />
        ) : (
          <motion.button
            className="w-10 h-10 grid place-content-center md:w-12 md:h-12"
            whileTap={{ scale: 0.8 }}
          >
            <BsPerson className="text-clamp_3" />
          </motion.button>
        )} */}
      </NavLink>
    </div>
  );
};

export default Nav;
