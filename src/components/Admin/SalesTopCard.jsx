import React from "react";
import { BiCalendar } from "react-icons/bi";
import { BsChevronDown } from "react-icons/bs";

const SalesTopCard = ({ title, label }) => {
  return (
    <div className="grid grid-cols-2 px-3 pt-8 pb-2 sales rounded-card_border_radius">
      <p>{title}</p>
      <div className="flex items-center justify-end salesCalendarContainer">
        {label ? (
          <p className="label text-[clamp(0.4rem,_0.5rem_+_1vw,_0.8rem)] ">
            {label}
          </p>
        ) : (
          <>
            <button className="px-3 bg-nursh_dark_gold">Monthly</button>
            <div className="flex items-center justify-center gap-1 *:text-[clamp(0.4rem,_1rem_+_1vw,_1rem)] salesCalendar">
              <BiCalendar />
              <BsChevronDown />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default SalesTopCard;
