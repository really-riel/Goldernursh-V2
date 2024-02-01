import React from "react";

import { TbCurrencyNaira } from "react-icons/tb";

const AdminDishesCard = ({
  item,
  setIsShowOptions,
  setItemObject,
  setItemType,
  setIsShowEditOption,
}) => {
  return (
    <div className="grid py-3 AdminDishesCard place-items-center shadow-card_shadow rounded-card_border_radius w-[300px]">
      <div className="flex mainCard flex-col items-center w-[90%] gap-1">
        <figure className="w-full h-[200px] rounded-2xl overflow-hidden">
          <img
            className="object-cover w-full h-full"
            src={item?.image}
            alt={item?.name}
          />
        </figure>

        <div className="dishSection flex items-center justify-between w-full text-[clamp(0.8rem,_0.2rem_+_1vw,_1rem)] font-semibold">
          <p>
            {item?.mainMeal} <br /> {item?.extra}
          </p>
          <p className="price font-semibold flex items-center text-[clamp(1rem,_0.4rem_+_1vw,_2rem)]">
            <TbCurrencyNaira className="text-[clamp(1.3rem,_0.3rem_+_1vw,_2rem)]" />
            {item?.price}
          </p>
        </div>
        <div className="dishSection flex items-center justify-between w-full text-[clamp(0.8rem,_0.2rem_+_1vw,_1rem)] font-semibold mt-2">
          <button
            className="px-2 bg-transparent border-2 border-solid editBtn text-nursh_dark_olive border-nursh_dark_olive"
            onClick={() => {
              setIsShowEditOption(true);
              setItemObject(item);
              setItemType("dishes");
            }}
          >
            Edit
          </button>
          <div className="">
            <button
              className="px-2 bg-transparent border-2 border-solid deleteBtn border-nursh_dark_gold text-nursh_dark_gold"
              onClick={() => {
                setIsShowOptions(true);
                setItemObject(item);
                setItemType("dishes");
              }}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDishesCard;
