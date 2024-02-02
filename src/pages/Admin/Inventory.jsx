import React, { useEffect, useState } from "react";
import {
  BiEdit,
  BiEditAlt,
  BiMessageSquareAdd,
  BiSearch,
} from "react-icons/bi";
import { MdDelete, MdEdit } from "react-icons/md";

const Inventory = () => {
  const data = [
    { quantity: 10, type: "Main" },
    { quantity: 5, type: "Garnishng" },
    { quantity: 9, type: "Drinks" },
  ];
  const [dishSearchInput, setDishSearchInput] = useState("");
  const [drinkSearchInput, setDrinkSearchInput] = useState("");
  const [dishSearchResult, setDishSearchResult] = useState([]);
  const [drinkSearchResult, setDrinkSearchResult] = useState([]);

  const header = ["Category", "Quantity left", "Notification", "Action"];

  const main = [
    {
      food: "Rice",
      category: "Main",
      qtyLeft: "5 Sacks",
      notification: "Restock",
    },
    {
      food: "Meat",
      category: "Garnishing",
      qtyLeft: "25 Pieces",
      notification: "Okay",
    },
    {
      food: "Spagetti",
      category: "Main",
      qtyLeft: "5 Cartons",
      notification: "Average",
    },
  ];
  const drinksMain = [
    {
      drink: "Coca-cola",
      category: "Soft Drink",
      qtyLeft: "5 packs",
      notification: "Restock",
    },
    {
      drink: "Five Alive",
      category: "Fruit juice",
      qtyLeft: "25 Pieces",
      notification: "Okay",
    },
    {
      drink: "Smoothie",
      category: "Fruit Juice",
      qtyLeft: "5 Cartons",
      notification: "Average",
    },
  ];

  useEffect(() => {
    const filteredDishResult = main.filter(
      (data) =>
        data.category.toLowerCase().includes(dishSearchInput.toLowerCase()) ||
        data.food.toLowerCase().includes(dishSearchInput.toLowerCase()) ||
        data.notification
          .toLowerCase()
          .includes(dishSearchInput.toLowerCase()) ||
        data.qtyLeft.toLowerCase().includes(dishSearchInput.toLowerCase())
    );
    const filteredDrinkResult = drinksMain.filter(
      (data) =>
        data.category.toLowerCase().includes(drinkSearchInput.toLowerCase()) ||
        data.drink.toLowerCase().includes(drinkSearchInput.toLowerCase()) ||
        data.notification
          .toLowerCase()
          .includes(drinkSearchInput.toLowerCase()) ||
        data.qtyLeft.toLowerCase().includes(drinkSearchInput.toLowerCase())
    );

    setDrinkSearchResult(filteredDrinkResult);
    setDishSearchResult(filteredDishResult);
  }, [dishSearchInput, drinkSearchInput]);

  return (
    <main className="flex items-center justify-center py-4 Inventory ">
      <div className="mainWrapper w-[95%]  flex flex-col gap-3">
        <h2>Inventory</h2>
        <p>
          View and update your stock <br /> status
        </p>
        <section className="flex items-center justify-between gap-2 cards">
          {data.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-center gap-3 p-2 shadow-lg card grow rounded-card_border_radius"
            >
              <p className="qty text-[clamp(1rem,_1.5rem_+_1vw,_2rem)] font-semibold">
                {item.quantity}
              </p>
              <p className="info text-[clamp(0.5rem,_0.4rem_+_1vw,_1rem)] font-medium">
                {item.type} restock <br /> needed{" "}
              </p>
            </div>
          ))}
        </section>
        <section className="my-4 forDishes">
          <div className="grid grid-cols-2 forHeader ">
            <h2>For Dishes</h2>

            <form
              action=""
              className="flex items-center justify-center px-3 py-2 rounded-xl searchForm shadow-card_shadow"
            >
              <input
                className="grid w-full grow place-items-center"
                type="text"
                placeholder="search"
                role="searchbox"
                onChange={(e) => setDishSearchInput(e.target.value)}
              />
              <BiSearch />
            </form>
          </div>
          <div className="grid px-2 py-3 overflow-auto tableContainer place-items-center">
            <div className="flex flex-col overflow-hidden w-[650px] shadow-card_shadow rounded-s-sm md:w-full rounded-t-xl ">
              {dishSearchResult.length === 0 ? (
                <p className="p-4 font-bold text-center">no result</p>
              ) : (
                <>
                  <div className="grid grid-cols-5 p-2 font-medium place-items-center header bg-nursh_light_gold">
                    <p>Food stuff</p>
                    {header.map((item, index) => (
                      <p key={index}>{item}</p>
                    ))}
                  </div>
                  <div className="body">
                    {dishSearchResult.map((item, index) => (
                      <div
                        key={index}
                        className="grid grid-cols-5 p-2 place-items-center details"
                      >
                        <p> {item.food} </p>
                        <p> {item.category} </p>
                        <p> {item.qtyLeft} </p>

                        <p
                          className={`notify
                      w-[80%] mx-auto grid place-content-center rounded-lg  px-2
                      ${
                        item.notification.toLowerCase() === "restock"
                          ? "restock bg-[rgb(241,_161,_161)]"
                          : item.notification.toLowerCase() === "okay"
                          ? "okay bg-[rgb(177,_232,_101)]"
                          : "average bg-[rgb(231,_225,_140)]"
                      }`}
                        >
                          {" "}
                          {item.notification}{" "}
                        </p>

                        <div className="flex items-center justify-center gap-3 actionBtns">
                          <button className="actionBtn bg-nursh_light_gold p-[0.2rem] rounded-md ">
                            <BiEditAlt />
                          </button>
                          <button className="actionBtn bg-nursh_light_gold p-[0.2rem] rounded-md ">
                            <MdDelete />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>
          <div className="flex items-center justify-end gap-5 controlBtns">
            <button className="px-3 bg-transparent border-2 border-solid viewAll border-nursh_dark_gold">
              View All
            </button>
            <button className="flex items-center justify-center gap-1 px-2 text-white addNewBtn bg-nursh_dark_olive">
              Add new <BiMessageSquareAdd />
            </button>
          </div>
        </section>
        <section className="forDrinks">
          <div className="grid grid-cols-2 forHeader">
            <h2>For Drinks</h2>
            <form
              action=""
              className="flex items-center justify-center px-3 py-2 searchForm rounded-xl shadow-card_shadow"
            >
              <input
                className="grid w-full grow place-items-center"
                type="text"
                placeholder="search"
                role="searchbox"
                onChange={(e) => setDrinkSearchInput(e.target.value)}
              />
              <BiSearch />
            </form>
          </div>
          <div className="grid px-2 py-3 overflow-auto tableContainer place-items-center">
            <div className="flex flex-col overflow-hidden shadow-card_shadow md:w-full rounded-t-xl w-[650px]">
              {drinkSearchResult.length === 0 ? (
                <p className="p-4 font-bold text-center">no result</p>
              ) : (
                <>
                  <div className="grid grid-cols-5 p-2 font-medium place-items-center headergrid header bg-nursh_light_gold ">
                    <p>Drinks</p>
                    {header.map((item, index) => (
                      <p key={index}>{item}</p>
                    ))}
                  </div>
                  <div className="body">
                    {drinkSearchResult.map((item, index) => (
                      <div
                        key={index}
                        className="grid grid-cols-5 p-2 place-items-center detailsgrid details "
                      >
                        <p> {item.drink} </p>
                        <p> {item.category} </p>
                        <p> {item.qtyLeft} </p>

                        <p
                          className={`notify  w-[80%] mx-auto grid place-content-center rounded-lg  px-2
                      ${
                        item.notification.toLowerCase() === "restock"
                          ? "restock bg-[rgb(241,_161,_161)]"
                          : item.notification.toLowerCase() === "okay"
                          ? "okay bg-[rgb(177,_232,_101)]"
                          : "average bg-[rgb(231,_225,_140)]"
                      }`}
                        >
                          {" "}
                          {item.notification}{" "}
                        </p>

                        <div className="flex items-center justify-center gap-2 actionBtns">
                          <button className="actionBtn  bg-nursh_light_gold p-[0.2rem] rounded-md ">
                            <BiEditAlt />
                          </button>
                          <button className="actionBtn  bg-nursh_light_gold p-[0.2rem] rounded-md ">
                            <MdDelete />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>
          <div className="flex items-center justify-end gap-5 controlBtns">
            <button className="px-3 bg-transparent border-2 border-solid viewAll border-nursh_dark_gold">
              View All
            </button>
            <button className="flex items-center justify-center gap-1 px-2 text-white addNewBtn bg-nursh_dark_olive">
              Add new <BiMessageSquareAdd />
            </button>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Inventory;
