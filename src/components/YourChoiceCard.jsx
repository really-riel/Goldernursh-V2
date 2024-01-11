import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const YourChoiceCard = ({ item }) => {
  return (
    <div className="yourChoiceCard text-[clamp(0.5rem,_0.7rem_+_1vw,_1.2rem)] bg-white shadow-card_shadow rounded-card_border_radius p-2 grid gap-2 grid-cols-2 grite h-[clamp(16.5rem,_1rem_+_5vw,_40rem)]">
      <figure className="h-full overflow-hidden rounded-card_border_radius">
        <motion.img
          className="object-cover w-full h-full"
          whileHover={{ scale: 1.2 }}
          src={item?.image}
          alt="foodImg"
        />
      </figure>
      <div className="grid ">
        <p className="px-2 category">{item?.Category}</p>
        <div className=" info">
          <p className="font-extrabold title text-[clamp(0.7rem,_0.6rem_+_1vw,_1rem)]">
            {item?.title}:
          </p>
          <p className="foodItems">{item?.foodItems}</p>
        </div>{" "}
        <Link
          className="grid  bg-nursh_dark_olive place-items-center text-[clamp(0.5rem,_0.325rem_+_1vw,_1.1rem)] rounded-card_border_radius text-nursh_light_gold h-fit py-2 mt-auto"
          to={"/choose-order"}
        >
          View and Make your Order{" "}
        </Link>{" "}
      </div>
    </div>
  );
};

export default YourChoiceCard;
