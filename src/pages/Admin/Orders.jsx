import React, { useState } from "react";
import { TbCurrencyNaira } from "react-icons/tb";
import useWindowSize from "../../hooks/useWindowSize";
import { BiCalendar, BiSearch, BiSearchAlt } from "react-icons/bi";
import { BsChevronDown } from "react-icons/bs";
import { useEffect } from "react";
import Loading from "../../components/Loading";
import { MdPending } from "react-icons/md";
import { adminOrdersData } from "../../utils/data";

const Orders = () => {
  const { width } = useWindowSize();
  const [selectedOption, setSelectedOption] = useState("all orders");
  const [data, setData] = useState([]);
  const [totalAmt, setTotalAmt] = useState("");
  const [totalQty, setTotalQty] = useState("");
  const [totalpending, setTotalPending] = useState("");
  const [totalDelivered, setTotalDelivered] = useState("");
  const [searchInput, setSearchInput] = useState("");

  const handleSelect = (e) => {
    setSelectedOption(e.target.innerText.toLowerCase());
  };
  const docItems = adminOrdersData.docItems;
  const isLoading = adminOrdersData.isLoading;
  console.log(docItems);
  console.log(searchInput);

  useEffect(() => {
    selectedOption === "pending"
      ? setData(docItems?.filter((item) => item.orderStatus === "pending"))
      : selectedOption === "cancelled"
      ? setData(docItems?.filter((item) => item.orderStatus === "cancelled"))
      : selectedOption === "delivered"
      ? setData(docItems?.filter((item) => item.orderStatus === "delivered"))
      : setData(docItems);

    if (searchInput !== "") {
      const filteredSearch = docItems.filter((order) => {
        return order.orderItems.some((item) =>
          item.mainMeal.toLowerCase().includes(searchInput.toLowerCase())
        );
      });
      setData(filteredSearch);
    }
  }, [docItems, selectedOption, searchInput]);

  useEffect(() => {
    const sum = docItems?.reduce((acc, item) => {
      return acc + item.total;
    }, 0);

    const qtyArry = docItems?.map((item) => {
      return item.orderItems.reduce((acc, currentitem) => {
        return acc + currentitem.quantity;
      }, 0);
    });

    const qty = qtyArry?.reduce((acc, item) => {
      return acc + item;
    }, 0);

    function countAndMultiply(array, targetValue) {
      return array?.reduce((accumulator, currentObj) => {
        const occurrenceCount = currentObj.orderStatus === targetValue ? 1 : 0;

        if (Array.isArray(currentObj.orderItems)) {
          return accumulator + occurrenceCount * currentObj.orderItems.length;
        }

        return accumulator + occurrenceCount;
      }, 0);
    }

    setTotalQty(qty);

    setTotalAmt(sum);
    setTotalPending(countAndMultiply(docItems, "pending"));
    setTotalDelivered(countAndMultiply(docItems, "delivered"));
  }, [docItems]);

  return (
    <main className="grid place-items-center text-[clamp(0.6rem,_0.6rem_+_1vw,_1rem)] py-4 ">
      <div className="OrderWrapper w-[95%] grid gap-3">
        <h2>Orders</h2>
        <p>
          Check recent, existing, and <br /> pending order requests
        </p>
        <div className="grid grid-cols-2 my-4 divide-x-2 divide-y-2 rounded-lg md:divide-x-2 orderSummary shadow-card_shadow md:grid-cols-4">
          <div
            className={`sect  p-4 flex flex-col gap-[5px] items-center borderRgt   `}
          >
            <p>Total Amount</p>
            <p className="flex items-center justify-center font-semibold bold">
              <TbCurrencyNaira />
              {totalAmt}
            </p>
          </div>
          <div className={`sect p-4 flex flex-col gap-[5px] items-center  `}>
            <p>Total Quantity</p>
            <p className="font-semibold bold">{totalQty}</p>
          </div>
          <div className="sect  p-4 flex flex-col gap-[5px] items-center borderRgt ">
            <p>Total Delivered</p>
            <p className="font-semibold bold">{totalDelivered}</p>
          </div>
          <div className="sect  p-4 flex flex-col gap-[5px] items-center noBorderBtm ">
            <p>Pending Orders</p>
            <p className="font-semibold bold">{totalpending}</p>
          </div>
        </div>

        <section className="flex flex-col gap-4 my-4 RecentOrders">
          <h2>Recent Order Requests</h2>
          <div className="grid gap-3 filterOptionsContainer md:grid-cols-2">
            <div className="flex items-center gap-2 containerOne ">
              <div
                className={`filterOption px-2 py-1 cursor-pointer ${
                  selectedOption === "all orders"
                    ? "selected bg-nursh_light_gold rounded-xl"
                    : null
                }`}
                onClick={(e) => handleSelect(e)}
              >
                All Orders
              </div>
              <div
                className={`filterOption px-2 py-1 cursor-pointer ${
                  selectedOption === "pending"
                    ? "selected  bg-nursh_light_gold rounded-xl"
                    : ""
                }`}
                onClick={(e) => handleSelect(e)}
              >
                Pending
              </div>
              <div
                className={`filterOption cursor-pointer px-2 py-1 ${
                  selectedOption === "cancelled"
                    ? "selected  bg-nursh_light_gold rounded-xl"
                    : ""
                }`}
                onClick={(e) => handleSelect(e)}
              >
                Cancelled
              </div>
              <div
                className={`filterOption px-2 py-1 cursor-pointer ${
                  selectedOption === "delivered"
                    ? "selected  bg-nursh_light_gold rounded-xl"
                    : ""
                }`}
                onClick={(e) => handleSelect(e)}
              >
                Delivered
              </div>
            </div>
            <div className="flex items-center gap-2 containerTwo">
              <form
                onSubmit={(e) => e.preventDefault()}
                action=""
                className="searchForm shadow-card_shadow rounded-3xl px-2 py-1 flex items-center justify-between w-full max-w-[400px]"
              >
                <input
                  value={searchInput}
                  onChange={(e) => setSearchInput(e.target.value)}
                  className=""
                  type="text"
                  placeholder="Search"
                />
                <BiSearch />
              </form>
              <div className="flex items-center gap-1 calenderWrapper md:flex-row ">
                <button className="monthlyBtn">Monthly</button>
                <div className="flex items-center justify-center orderCalender">
                  <BiCalendar />
                  <BsChevronDown />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="orderListSect">
          <div className="flex flex-col gap-1 p-2 orderList flex-nowrap min-w-fit">
            {data?.length === 0 && !isLoading && (
              <p>No {selectedOption} orders</p>
            )}
            {isLoading && (
              <div className="loadingContainer">
                <Loading />
              </div>
            )}

            {data?.map((items, index) =>
              items.orderItems.map((item, indx) => (
                <div
                  className="flex items-center justify-between gap-4 p-1 border-b-2 border-gray-400 border-solid orderListItem"
                  key={`${index}-${indx}`}
                >
                  <img
                    className="w-[70px] h-[70px] object-cover rounded-lg"
                    src={item.image}
                    alt=""
                  />
                  <div className="">
                    <p>
                      {item.mainMeal} <br /> {item.extra}
                    </p>
                  </div>
                  <p>X{item.quantity}</p>
                  <p>{item.price}</p>
                  <p>{items.address}</p>
                  <div>
                    <p
                      className={`p-2 rounded-xl ${
                        items.orderStatus.toLowerCase() === "pending"
                          ? "bg-nursh_light_gold "
                          : items.orderStatus.toLowerCase() === "delivered"
                          ? "bg-green-200 "
                          : "bg-red-500"
                      }`}
                    >
                      {items.orderStatus}
                    </p>
                  </div>
                </div>
              ))
            )}
          </div>
        </section>
        <section className="Order Breakdown">
          {/*  <h2>Order Breakdown</h2> */}
        </section>
      </div>
    </main>
  );
};

export default Orders;
