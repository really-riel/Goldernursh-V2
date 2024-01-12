import React from "react";
import DishOptions from "./DishOptions";
import { chooseOrder, chooseOrderHeading } from "../utils/data";
import { useState } from "react";

const ChooseDrinks = ({ chooseDrinks }) => {
  /*   const {
    drink,
    drinkPrice,
    drinkQty,
    fruitJuice,
    fruitJuicePrice,
    fruitJuiceQty,
  } = useStoreState((state) => state.chooseOrder);

  const {
    setDrink,
    setDrinkPrice,
    setDrinkQty,
    setFruitJuice,
    setFruitJuicePrice,
    setFruitJuiceQty,
  } = useStoreActions((actions) => actions.chooseOrder); */
  const [drink, setDrink] = useState("");
  const [drinkPrice, setDrinkPrice] = useState("");
  const [drinkQty, setDrinkQty] = useState("");
  const [fruitJuice, setFruitJuice] = useState("");
  const [fruitJuicePrice, setFruitJuicePrice] = useState(null);
  const [fruitJuiceQty, setFruitJuiceQty] = useState(0);

  return (
    <div className="chooseDrinks">
      <h2>Drinks</h2>
      <div className="drink">
        <DishOptions
          heading={chooseOrderHeading.drinks.drink}
          dishOptions={chooseOrder.Drinks.Drink}
          dish={drink}
          setDish={setDrink}
          dishPrice={drinkPrice}
          setDishPrice={setDrinkPrice}
          dishQty={drinkQty}
          setDishQty={setDrinkQty}
        />
      </div>
      <div className="fruitJuice">
        <DishOptions
          heading={chooseOrderHeading.drinks.FruitJuice}
          dishOptions={chooseOrder.Drinks.FruitJuice}
          dish={fruitJuice}
          setDish={setFruitJuice}
          dishPrice={fruitJuicePrice}
          setDishPrice={setFruitJuicePrice}
          dishQty={fruitJuiceQty}
          setDishQty={setFruitJuiceQty}
        />
      </div>
    </div>
  );
};

export default ChooseDrinks;
