import React from "react";
import { FaAd, FaMinus, FaPlus } from "react-icons/fa";
import { TbCurrencyNaira } from "react-icons/tb";
import Select from "react-select";

const DishOptions = ({
  heading,
  dishOptions,
  setDish,
  setDishPrice,
  dishPrice,
  dishQty,
  setDishQty,
}) => {
  const options = dishOptions.map((data) => ({
    value: data.foodType,
    label: data.foodType,
    price: data.price,
  }));

  console.log(dishPrice);
  console.log(dishOptions);
  return (
    <>
      <div className="grid grid-cols-3 py-2 mb-2 heading bg-nursh_cream">
        {heading.map((data, index) => (
          <p className="text-center" key={index}>
            {data}
          </p>
        ))}
      </div>
      <div className="grid grid-cols-3 selectContainer">
        <div className="grid selectWrapper place-items-center">
          <Select
            styles={{
              control: (baseStyles, state) => ({
                ...baseStyles,
                border: "none",
                boxShadow: " 0.1rem 0.2rem 0.6rem rgba(0, 0, 0, 0.363)",
                fontSize: "1rem",
                borderRadius: "1rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }),
              option: (base, state) => ({
                ...base,
                backgroundColor: state.isSelected
                  ? "#6a5c05"
                  : base.backgroundColor,

                "&:hover": {
                  backgroundColor: state.isSelected ? "#c4a838" : "#c4a838",
                },
                "&:focus": {
                  backgroundColor: state.isSelected ? "#c4a838" : "#c4a838",
                },
              }),
              indicatorSeparator: (base) => ({
                ...base,
                display: "none",
              }),
              container: (base) => ({
                ...base,
                width: "80%",
              }),
            }}
            classNamePrefix={"react-select"}
            options={options}
            onChange={(option) =>
              setDish(option.value) & setDishPrice(option.price)
            }
          />
        </div>
        <div className="grid qtySelectorWrapper place-items-center ">
          <div className="qtySelector grid grid-cols-[30%_40%_30%] w-[80%] rounded-[0.5rem] shadow-card_shadow overflow-hidden ">
            <button
              className="minusQty disabled:opacity-30 flex items-center justify-center h-full  text-[#333] "
              onClick={() => setDishQty(dishQty - 1)}
              disabled={dishQty < 1 ? true : false}
              role="button"
            >
              <FaMinus className="text-[clamp(0.5rem,_0.2rem_+_1vw,_0.8rem)]" />
            </button>
            <p className="py-[0.3rem] text-center bg-nursh_light_gold">
              {dishQty}
            </p>
            <button
              className="plusQty flex items-center justify-center h-full  text-[#333] "
              onClick={() => setDishQty(dishQty + 1)}
            >
              <FaPlus className="text-[clamp(0.5rem,_0.2rem_+_1vw,_0.8rem)]" />
            </button>
          </div>
        </div>
        <div className="flex items-center justify-center w-full price">
          <p className="w-[80%] flex py-[0.3rem] items-center justify-center rounded-[0.5rem] shadow-card_shadow">
            <TbCurrencyNaira
              className="text-[1rem]"
              display={dishPrice ? "inline" : "none"}
            />
            {dishPrice * dishQty}
          </p>
        </div>
      </div>
    </>
  );
};

export default DishOptions;

{
  /* <select
            onChange={(e) =>
              setDish(e.target.value) &
              setDishPrice(e.target.selectedOptions[0].dataset.price)
            }
          >
            <option value="">select</option>
            {dishOptions.map((options, index) => (
              <option
                key={index}
                value={options.foodType}
                data-price={options.foodPrice}
              >
                {options.foodType}
              </option>
            ))}
          </select> */
}

{
  /* <Select
            styles={{
              control: (baseStyles, state) => ({
                ...baseStyles,
                border: "none",
                boxShadow: " 0.1rem 0.2rem 0.6rem rgba(0, 0, 0, 0.363)",
                fontSize: "1rem",
                borderRadius: "1rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }),
              option: (base, state) => ({
                ...base,
                backgroundColor: state.isSelected
                  ? "#6a5c05"
                  : base.backgroundColor,

                "&:hover": {
                  backgroundColor: state.isSelected ? "#c4a838" : "#c4a838",
                },
                "&:focus": {
                  backgroundColor: state.isSelected ? "#c4a838" : "#c4a838",
                },
              }),
              indicatorSeparator: (base) => ({
                ...base,
                display: "none",
              }),
              container: (base) => ({
                ...base,
                width: "80%",
              }),
            }}
            classNamePrefix={"react-select"}
            options={options}
            onChange={(option) =>
              setDish(option.value) & setDishPrice(option.price)
            }
          /> */
}
