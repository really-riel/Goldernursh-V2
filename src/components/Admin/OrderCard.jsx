import React, { useEffect, useState } from "react";
import { HiOutlineClipboardList } from "react-icons/hi";
import { FcCancel } from "react-icons/fc";
import { FaSyncAlt } from "react-icons/fa";
import { RiHandCoinLine } from "react-icons/ri";

const OrderCard = ({ data }) => {
  const [bgColor, setBgColor] = useState("");
  const [icon, setIcon] = useState("");

  useEffect(() => {
    switch (data.label) {
      case "Ordered":
        return setBgColor("skyblue");
      case "Cancelled":
        return setBgColor("pink");
      case "Processed":
        return setBgColor("yellow");
      case "Delivered":
        return setBgColor("lightGreen");

      default:
        return null;
    }
  }, [data]);

  return (
    <div className="flex items-center justify-around py-4 orderCard shadow-card_shadow rounded-card_border_radius">
      <div
        className="iconWrapper w-[30px] h-[30px] md:w-[48px] md:h-[48px] grid place-items-center rounded-[50%] *:text-[clamp(0.7rem,_0.5rem_+_1vw,_2rem)]"
        style={{ backgroundColor: bgColor }}
      >
        {(() => {
          switch (data.label) {
            case "Ordered":
              return <HiOutlineClipboardList />;
            case "Cancelled":
              return <FcCancel />;
            case "Processed":
              return <FaSyncAlt />;
            case "Delivered":
              return <RiHandCoinLine />;

            default:
              return null;
          }
        })()}
      </div>
      <div className="font-medium detailsContainer">
        <p>{data.quantity}</p>
        <p>{data.label}</p>
      </div>
    </div>
  );
};

export default OrderCard;
