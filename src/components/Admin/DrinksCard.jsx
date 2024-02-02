import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { BiDish } from "react-icons/bi";
import { TbBabyBottle, TbBottle } from "react-icons/tb";

const DrinksCard = ({ total, category }) => {
  const [iconBgColor, setIconBgColor] = useState("");
  useEffect(() => {
    switch (category.split(" ")[1]) {
      case "Bottles":
        return setIconBgColor("bg bg-nursh_dark_gold");
      case "Drinks":
        return setIconBgColor("softDrinks bg-nursh_cream");
      case "Juice":
        return setIconBgColor("softDrinks ");

      default:
        return setIconBgColor("dishes bg-nursh_light_gold ");
    }
  }, [category]);

  return (
    <div className="flex items-center p-2 bg-white drinksCard shadow-card_shadow justify-evenly rounded-xl">
      <div
        className={`iconWrapper w-[30px] h-[30px] md:w-[48px] md:h-[48px] grid place-content-center justify-around  rounded-[50%]  ${iconBgColor}`}
      >
        {(() => {
          switch (category.split(" ")[1]) {
            case "Bottles":
              return <TbBabyBottle />;
            case "Drinks":
              return <TbBottle />;

            default:
              return <BiDish />;
          }
        })()}
      </div>
      <div className="font-semibold detailsContainer">
        <p>{total}</p>
        <p className="category text-[clamp(0.3rem,_0.2rem_+_1vw,_0.7rem)]">
          {category}
        </p>
      </div>
    </div>
  );
};

export default DrinksCard;
