import React, { useEffect } from "react";
import { useState } from "react";
import { TbPackages } from "react-icons/tb";
import { FcMoneyTransfer } from "react-icons/fc";
import { HiChartBar } from "react-icons/hi";
import { IoIosPeople } from "react-icons/io";

const SummaryCard = ({ total, category, type }) => {
  const [icon, setIcon] = useState("");
  const [iconBgColor, setIconBgColor] = useState("");

  useEffect(() => {
    switch (category.split(" ")[1]) {
      case "Sales":
        setIconBgColor("salesColor bg-[rgb(239,_228,_207)]");
        break;
      case "Revenue":
        setIconBgColor("revenueColor bg-[rgb(149,_245,_240)] ");
        break;
      case "Orders":
        setIconBgColor("ordersColor bg-[rgb(120,_231,_93)] ");
        break;
      case "Users":
        setIconBgColor("usersColor bg-[rgb(239,_90,_239)]");
        break;
      default:
        break;
    }
  }, [category]);

  return (
    <div
      className="summaryCard rounded-xl shadow-card_shadow grid gap-1 grid-cols-[35%_65%]
    p-3"
    >
      <div className="flex summaryIconContainer ">
        <div
          className={`summaryIcon  h-[48px] w-[48px] grid place-content-center rounded-[50%] ${iconBgColor}`}
        >
          {(() => {
            switch (category.split(" ")[1]) {
              case "Sales":
                return <HiChartBar className="text-[rgb(255,_166,_0)]" />;
              case "Revenue":
                return <FcMoneyTransfer />;
              case "Orders":
                return <TbPackages className="text-[darkgreen]" />;
              case "Users":
                return (
                  <IoIosPeople className="text-[clamp(1rem,_1rem_+_1vw,_2rem)]" />
                );

              default:
                return null;
            }
          })()}
        </div>
      </div>
      <div className="flex flex-col justify-center summaryDetails">
        <p className="font-semibold text-[clamp(0.8rem,_0.8rem_+_1vw,_1.5rem)] number">
          {total}
        </p>
        <p className="font-semibold text-[clamp(0.4rem,_0.4rem_+_1vw,_0.8rem)] title">
          {" "}
          {category}
        </p>
      </div>
    </div>
  );
};

export default SummaryCard;
