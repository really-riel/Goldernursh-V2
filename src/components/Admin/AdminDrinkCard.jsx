import React from "react";
import { TbCurrencyNaira } from "react-icons/tb";

const AdminDrinkCard = ({
  item,
  setIsShowOptions,
  setItemObject,
  setItemType,
  setIsShowEditOption,
}) => {
  return (
    <div className="AdminDrinkCard shadow-card_shadow grid w-[300px] place-items-center rounded-card_border_radius">
      <div className="w-[90%] mainContainer grid gap-2 grid-cols-2  grid-rows-3 py-2 ">
        <figure className="row-span-3 h-[200px] w-full rounded-xl overflow-hidden">
          <img
            className="object-cover w-full h-full"
            src={item?.image}
            alt=""
          />
        </figure>

        <div className="row-span-2  flex flex-col justify-center text-[clamp(1rem,_0.2rem_+_1vw,_1.5rem)] font-semibold label">
          <p>{item.drink}</p>
          <p className="price flex items-center text-[clamp(1rem,_0.2rem_+_1vw,_1.5rem)]">
            <TbCurrencyNaira className=" text-[clamp(1.1rem,_0.2rem_+_1vw,_1.5rem)]" />{" "}
            {item.price}
          </p>
        </div>
        <div className="flex items-end justify-between btnWrapper">
          <button
            className="px-2 bg-transparent border-2 border-solid rounded deleteBtn border-nursh_dark_gold text-nursh_dark_gold"
            onClick={() => {
              setIsShowOptions(true);
              setItemObject(item);
              setItemType("drinks");
            }}
          >
            Delete
          </button>
          <button
            onClick={() => {
              setIsShowEditOption(true);
              setItemObject(item);
              setItemType("drinks");
            }}
          >
            Edit
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminDrinkCard;
