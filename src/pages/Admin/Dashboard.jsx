import React from "react";
import SummaryCard from "../../components/Admin/SummaryCard";
import { BiCalendar } from "react-icons/bi";
import { BsChevronDown } from "react-icons/bs";
import PieChart from "../../components/Admin/PieChart";
import { orderSummaryData, pieData, summaryCardData } from "../../utils/data";
import SalesTopCard from "../../components/Admin/SalesTopCard";
import LineChart from "../../components/Admin/LineChart";
import AreaChart from "../../components/Admin/AreaChart";
import OrderCard from "../../components/Admin/OrderCard";
import DrinksCard from "../../components/Admin/DrinksCard";

const Dashboard = () => {
  return (
    <main className="Dashboard text-[clamp(0.6rem,_0.6rem_+_1vw,_1rem)]">
      <div className="dashboardWrapper w-[95%] my-4 flex flex-col justify-center mx-auto gap-4">
        <h2>Dashboard</h2>
        <p>
          Welcome, Goldenursh Admin. <br /> Here's your restaurant <br />
          Overview
        </p>
        <section className="flex flex-col gap-4 summary">
          <h2>Summary</h2>
          <div className="grid grid-cols-2 gap-4 rounded-2xl summaryCardContainer md:grid-cols-4">
            {summaryCardData.map((data, index) => (
              <SummaryCard
                key={index}
                total={data.total}
                category={data.category}
              />
            ))}
          </div>
        </section>
        <section className="grid gap-4 mt-4 analytics">
          <h2>Analytics</h2>
          <div className="grid gap-8 analyticsDetails md:grid-cols-2">
            <div className="salesSummaryContainer">
              <SalesTopCard title={"Sales Summary"} />
              <div className="grid grid-cols-2 gap-2 py-4 px-2 salesMainContainer h-[300px] shadow-card_shadow rounded-2xl ">
                <div className="flex flex-col items-center justify-center w-full col-span-1 row-span-1 gap-1 pl-2 text-lg font-medium salesTotal text-nursh_green ">
                  <p className="number text-[clamp(2rem,_0.5rem_+_2vw,_2.5rem)]">
                    5000
                  </p>
                  <p className="details text-[clamp(0.8rem,_0.5rem_+_2vw,_2.5rem)]">
                    Total Sales
                  </p>
                </div>
                <div className="w-full pieContainer">
                  <PieChart />
                </div>
                <div className="grid grid-cols-3 col-span-2 gap-2 cardWrapper">
                  {pieData.map((data) => (
                    <DrinksCard
                      key={data.id}
                      total={data.quantity}
                      category={data.itemSold}
                    />
                  ))}
                </div>
              </div>
            </div>
            <div className="revenue">
              <SalesTopCard
                title={"Revenue"}
                label="Last 7 days VS prior week"
              />
              <div className="lineChartContainer h-[300px] rounded-card_border_radius shadow-card_shadow grid place-items-center p-2">
                <LineChart />
              </div>
            </div>
            <div className="userMap">
              <SalesTopCard title={"User Map"} />
              <div className="areaChartContainer grid place-items-center rounded-2xl pt-12 shadow-card_shadow  h-[300px]">
                <AreaChart />
              </div>
            </div>
            <div className="orderSummary">
              <SalesTopCard title={"Order Summary"} />
              <div className="orderDetailsWrapper rounded-card_border_radius shadow-card_shadow  h-[300px]">
                <div className="grid grid-cols-2 gap-4 p-4 orderSummaryDetails">
                  {orderSummaryData.map((data, index) => (
                    <OrderCard data={data} key={index} />
                  ))}
                </div>
                <button className="dashboardBtn w-full bg-nursh_dark_olive text-white py-4 text-[clamp(0.8rem,_0.8rem_+_1vw,_1.2rem)]">
                  500 Total Orders
                </button>
              </div>
            </div>
          </div>
        </section>
        <button className="dashboardBtn w-full bg-nursh_dark_olive text-white py-4 text-[clamp(0.8rem,_0.6rem_+_1vw,_1.2rem)]">
          Export each Category report in excel or CSV format
        </button>
      </div>
    </main>
  );
};

export default Dashboard;
