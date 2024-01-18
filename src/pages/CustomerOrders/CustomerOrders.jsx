import React, { useState } from "react";
import Loader from "../../components/Loader";
import noOrder from "../../assets/no-order.svg";
import { Link } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { motion } from "framer-motion";
import { allOrdersData } from "../../utils/data";
import { TbCurrencyNaira } from "react-icons/tb";

const CustomerOrders = () => {
  const [isLoading, setIsLoading] = useState(false);
  /*   const { user } = useStoreState((state) => state.auth);
  const { document, isLoading, error } = useGetDocuments("orders", user.id); */
  const variant = {
    initial: {
      opacity: 0,
      x: -200,
    },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.5,
        duration: 1,
      },
    },
  };

  return (
    <main className="flex flex-col items-center gap-4 py-8 CustomerOrders bg-nursh_cream">
      {isLoading && <Loader />}

      {!isLoading && !document && (
        <motion.section
          variants={variant}
          initial="initial"
          animate="animate"
          className="noOrder w-full max-w-[500px]  flex justify-center flex-col text-center"
        >
          <img className="w-[80%]" src={noOrder} alt="" />
          <h2 className="text-[clamp(0.7rem,_0.6rem_+_1vw,_1.2rem)]">
            Ooops, You Haven't placed an Order yet 🙇‍♂️ <br />
            <Link to={"/"}>
              <span className="items-center justify-center pt-2 bg-green-300">
                Start Shopping now <AiOutlineShoppingCart />
              </span>
            </Link>
          </h2>
        </motion.section>
      )}

      {!isLoading && allOrdersData && (
        <>
          <h2>Orders</h2>
          <motion.section
            variants={variant}
            initial="initial"
            animate="animate"
            className="flex flex-col items-center justify-center w-full tableContainer "
          >
            <div className="text-[clamp(0.5rem,_0.5rem_+_1vw,_1rem)]   bg-white shadow-card_shadow rounded-2xl p-4 overflow-auto  w-[95%] max-w-[1000px] min-w-[400px] ">
              <div className="grid divide-y ">
                {allOrdersData.map((orders) =>
                  orders.orderItems.map((item) => (
                    <div
                      className="grid w-full grid-cols-6 place-items-center"
                      key={item.id}
                    >
                      <p>
                        {item.mainMeal} <br /> {item.extra}
                      </p>
                      <p>x{item.quantity}</p>
                      <p className="flex items-center justify-center">
                        {" "}
                        <TbCurrencyNaira /> {item.price * item.quantity}
                      </p>
                      <p>{item?.address ? item.address : ""}</p>
                      <p>
                        {
                          new Date(
                            orders.timeStamp.seconds * 1000 +
                              orders.timeStamp.nanoseconds / 1000000
                          )
                            .toLocaleString()
                            .split(",")[0]
                        }
                        <br />
                        {
                          new Date(
                            orders.timeStamp.seconds * 1000 +
                              orders.timeStamp.nanoseconds / 1000000
                          )
                            .toLocaleString()
                            .split(",")[1]
                        }
                      </p>
                      <p>
                        <div
                          className={` 
                            ${
                              orders.orderStatus === "pending"
                                ? "bg-nursh_light_gold"
                                : orders.orderStatus === "delivered"
                                ? "bg-green-300"
                                : orders.orderStatus === "canceled"
                                ? "bg-red-500"
                                : ""
                            } 
                            px-2 py-1 rounded-xl
                          `}
                        >
                          {orders.orderStatus}
                        </div>
                      </p>
                    </div>
                  ))
                )}
              </div>
            </div>

            <div className="mt-3 ml-auto ">
              <button className="px-3 py-1 text-white bg-nursh_dark_olive ">
                View all
              </button>
            </div>
          </motion.section>
        </>
      )}
    </main>
  );
};

export default CustomerOrders;
