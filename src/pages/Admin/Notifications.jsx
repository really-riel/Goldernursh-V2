import React, { useEffect, useState } from "react";
import { BiSearch } from "react-icons/bi";
import { Link, Navigate } from "react-router-dom";

const Notification = () => {
  const [totalPendingMsgs, setTotalPendingMsgs] = useState(0);

  const data = {
    isLoading: false,
    docItems: [
      { status: "pending" },
      { status: "pending" },
      { status: "pending" },
    ],
  };
  const isLoading = data.isLoading;
  const docItems = data.docItems;

  useEffect(() => {
    if (docItems) {
      const pendingMessages = docItems?.filter(
        (item) => item.status === "pending"
      );
      setTotalPendingMsgs(pendingMessages?.length);
    }
  }, [docItems]);

  return (
    <main className="flex justify-center Notification">
      <div className="mainWrapper w-[95%] my-4 flex flex-col gap-5">
        <section className="flex flex-col gap-6">
          <h1>Notification</h1>

          <form
            action=""
            className="flex items-center justify-center px-2 py-1 ml-auto searchForm shadow-card_shadow rounded-card_border_radius max-w-[250px]"
          >
            <input
              className="grid w-full bg-transparent place-items-center"
              type="text"
              placeholder="search"
              role="searchbox"
            />
            <BiSearch />
          </form>
        </section>
        <section className="flex flex-col gap-6 shadow-card_shadow rounded-card_border_radius p-2 min-h-[50vh] ">
          <div>
            <h2 className="all bg-nursh_light_gold w-fit p-2 rounded-[0.7rem_0.9rem]">
              All Notifications
            </h2>
          </div>
          <Link to={"/admin/messages"}>
            {totalPendingMsgs > 0 && (
              <p>You have {totalPendingMsgs} pending messages </p>
            )}
          </Link>
          <Link to={"/admin/orders"}>
            <p className="">Sola placed an order</p>
          </Link>
          <div className="flex items-center justify-end mt-auto text-white btnContainer ">
            <button className="px-5 py-2 clearBtn bg-nursh_dark_olive">
              Clear All
            </button>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Notification;
