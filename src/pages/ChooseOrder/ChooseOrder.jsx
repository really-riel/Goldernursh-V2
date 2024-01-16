import React from "react";
import { chooseOrder } from "../../utils/data";
import ChooseDishes from "../../components/ChooseDishes";
import ChooseDrinks from "../../components/ChooseDrinks";

const ChooseOrder = () => {
  return (
    <main className="ChooseOrder grid text-[clamp(0.5rem,_0.5rem_+_1vw,_1rem)] ">
      <section className="bg-nursh_cream flex flex-col items-center py-8  relative  ">
        <div className="chooseSectionWrapper w-[90%] flex flex-col gap-[clamp(0.5rem,_1rem_+_1vw,_1rem)] md:gap-[2rem] ">
          <h2 className="text-left">Choose your Order here</h2>
          <div className="chooseContainer bg-white p-[clamp(0.5rem,_1rem_+_1vw,_1rem)] rounded-card_border_radius shadow-card_shadow grid gap-4 lg:grid-cols-2">
            <ChooseDishes chooseDishes={chooseOrder.Dishes} />
            <ChooseDrinks />
          </div>
        </div>
      </section>
    </main>
  );
};

export default ChooseOrder;
