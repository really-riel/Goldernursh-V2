import React from "react";
/* import StarsRating from "react-star-rate"; */
import { TbCurrencyNaira } from "react-icons/tb";
import { motion } from "framer-motion";
import useWindowSize from "../hooks/useWindowSize";
import { toast } from "react-toastify";

const TMealCard = ({ item }) => {
  const { width } = useWindowSize();

  const variants = {
    hover: {
      scale: 1.2,
    },
  };

  return (
    <div className="  w-[178px] md:w-[250px] lg:w-[300px] bg-white tMealCardContainer  ">
      <div className="tMealCard rounded-card_border_radius p-2 w-full h-full text-[clamp(0.6rem,_0.4rem_+_0.6vw,_1rem)] shadow-card_shadow flex flex-col">
        <figure className="w-full h-full overflow-hidden rounded-card_border_radius">
          <motion.img
            className="object-cover w-full h-40 md:h-[13rem]"
            variants={width >= 1024 ? variants : null}
            whileHover="hover"
            src={item?.image}
            alt={item?.name}
          />
        </figure>
        <div className="flex flex-col justify-around pt-2 tMealBottom">
          <div className="flex items-center justify-between top">
            <ul className="flex flex-col mealTitle">
              <li className="font-semibold name text-[clamp(0.2rem,_0.4rem_+_1vw,_1rem)]">
                {item?.mainMeal}
              </li>
              <li className="extra">{item?.extra}</li>
            </ul>
            <div className="flex flex-col items-end justify-center rating">
              {/* <StarsRating classNamePrefix="star" value={item?.rating} /> */}
            </div>
          </div>
          <div className="flex items-center justify-between bottom">
            <p className="price text-[clamp(0.6rem,_0.3rem_+_1vw,_1rem)] flex grow-[1.5] items-center font-semibold">
              <TbCurrencyNaira className="text-[clamp(0.8rem,_0.5rem_+_1vw,_1.3rem)]" />
              {item?.price}
            </p>

            <button
              className="grow text-[clamp(0.3rem,_0.3rem_+_1vw,_1rem)] bg-nursh_dark_olive text-nursh_light_gold p-[0.2rem]"
              onClick={() =>
                setCartItems(item) & toast.success("order added to cart")
              }
            >
              Order now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TMealCard;
