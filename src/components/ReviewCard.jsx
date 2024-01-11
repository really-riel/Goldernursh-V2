import React from "react";

const ReviewCard = ({ data }) => {
  return (
    <div className="reviewCard w-full h-full bg-white grid grid-rows-[35%_65%] overflow-hidden text-[clamp(0.4rem,_0.3rem_+_1vw,_0.9rem)] rounded-card_border_radius shadow-card_shadow text-center ">
      <figure className="relative flex items-center justify-center bg-nursh_green">
        <img
          className="object-cover w-20 h-20 mt-16 rounded-[0.8rem]"
          src={data?.image}
          alt={data?.name}
        />
      </figure>
      <div className="py-4 text-[clamp(0.3rem,_0.4rem_+_1vw,_1rem)] flex flex-col items-center justify-end gap-[0.7rem] w-[70%] m-auto p-[1.5rem]">
        <p className="comment ">{data?.comment}</p>
        <p className="font-bold name">{data.name}</p>
      </div>
    </div>
  );
};

export default ReviewCard;
