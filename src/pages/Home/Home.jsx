import React, { useState } from "react";
import MealSlider from "../../components/MealSlider";
import { BsCartFill, BsFillSendFill } from "react-icons/bs";
import { IoMdFlash } from "react-icons/io";
import { IoCheckboxOutline } from "react-icons/io5";
import {
  customerReview,
  trendingOrders,
  yourChoiceMeals,
} from "../../utils/data";
import TMealCard from "../../components/TMealCard";
import YourChoiceCard from "../../components/YourChoiceCard";
import ReviewSlide from "../../components/ReviewSlide";
import img1 from "../../assets/connectImg1.png";
import img2 from "../../assets/connectImg2.png";

const Home = () => {
  const [isViewAll, setIsViewAll] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <main className="Home bg-nursh_cream">
      {/* Meal slider */}
      <section className="relative md:pb-16 mealSliderContainer">
        <div className="relative bg-transparent mealSlider shapedividers_com-9855 shapedividers_com-9343">
          <MealSlider />
          <div className="absolute about top-0 h-full w-full bg-[rgba(0,_0,_0,_0.559)] text-white flex flex-col items-center justify-center gap-5 lg:items-start lg:pl-[5rem]">
            <div className="w-full">
              <p className="mx-auto w-full  text-[clamp(0.9rem,_0.7rem_+_1vw,_1.5rem)] font-bold text-center leading-6 md:text-[clamp(1.5rem,_1rem_+_1vw,_3rem)] lg:text-left lg:leading-9 ">
                Scrumptious meal Ordering <br /> and Delivery made easy <br />
                with new Goldenursh <br />
                Order site.
              </p>
            </div>
            <a href="#trendingOrders">
              <button className="text-[clamp(0.9rem,_1rem_+_1vw,_2rem)] px-[1.2rem] bg-nursh_dark_gold text-nursh_green">
                Order now
              </button>
            </a>
          </div>
        </div>
        {/* features */}
        <div className="featuresContainer w-[80%] z-10 absolute left-[50%] right-[50%] -translate-x-[50%] translate-y-[-50%]  -bottom-8 text-black grid grid-cols-3 md:-bottom-12 text-center gap-1">
          <div className="feature left rounded-[1.5rem_0_0_1.5rem] bg-white text-[clamp(0.3rem,_0.25rem_+_0.9vw,_0.8rem)] h-[clamp(5.4rem,_0.5rem_+_1rem,_6rem)] font-semibold flex flex-col items-center justify-center gap-[0.3rem] shadow-card_shadow md:h-auto md:p-6">
            <div className="iconOne bg-green-300 p-[clamp(0.4rem,_1rem_+_1vw,_0.7rem)] rounded-[50%] ">
              <BsFillSendFill />
            </div>
            <p className="">
              Pick an Order easily <br /> based on Trends
            </p>
          </div>
          <div className="text-center feature shadow-card_shadow bg-white text-[clamp(0.3rem,_0.25rem_+_1vw,_0.8rem)] h-[clamp(5.4rem,_0.5rem_+_1rem,_6rem)] font-semibold flex flex-col items-center justify-center gap-[0.3rem] md:h-auto md:p-6">
            <div className="iconTwo bg-nursh_light_gold p-[clamp(0.4rem,_1rem_+_1vw,_0.7rem)] rounded-[50%] ">
              <BsCartFill />
            </div>

            <p>
              Pick an Order based <br /> your preference
            </p>
          </div>
          <div className="feature right shadow-card_shadow bg-white rounded-[0_1.5rem_1.5rem_0] text-[clamp(0.3rem,_0.25rem_+_1vw,_0.8rem)] h-[clamp(5.4rem,_0.5rem_+_1rem,_6rem)] font-semibold flex flex-col items-center justify-center gap-[0.3rem]  md:h-auto md:p-6">
            <div className="iconThree bg-green-300 p-[clamp(0.4rem,_1rem_+_1vw,_0.7rem)] rounded-[50%]">
              <IoMdFlash />
            </div>

            <p>
              Have your order <br /> delivered in a jiffy
            </p>
          </div>
        </div>
      </section>

      {/* trending Orders */}
      <section
        id="trendingOrders"
        className="relative flex flex-col items-center w-full gap-8 pt-8 pb-20 jusc' md:pb-[11rem] lg:pb-[clamp(6rem,_1rem_+_2vw,_11rem)]  trendingOrders scroll-mt-14"
      >
        <h2>TRENDING ORDER</h2>
        {isLoading ? (
          <div className="loadingContainer ">
            <Loading />
          </div>
        ) : (
          <div className="trendingOrdersList w-[95%] flex flex-wrap gap-3 justify-center items-center">
            {trendingOrders
              ?.slice(0, !isViewAll ? 6 : trendingOrders?.length)
              .map((item, index) => (
                <TMealCard key={index} item={item} />
              ))}
          </div>
        )}
        {trendingOrders?.length > 6 && (
          <motion.span
            whileTap={{ scale: 0.8 }}
            className="viewAll flex items-center text-[clamp(0.8rem,_0.5rem_+_1vw,_2rem)] -mt-4 ml-[70%] text-right border-b-[0.1rem_solid_black] cursor-pointer"
            onClick={() => setIsViewAll(!isViewAll)}
          >
            {isViewAll ? (
              <>
                Hide
                <RiArrowUpFill />
              </>
            ) : (
              <>
                {" "}
                View all <RiArrowDownFill />
              </>
            )}
          </motion.span>
        )}
      </section>

      {/* your choice */}
      <section
        id="yourChoice"
        className="flex flex-col items-center justify-center gap-8 pb-12 yourChoice grow scroll-mt-14"
      >
        <h2>ORDER BASED ON YOUR CHOICE</h2>
        <div className="yourChoiceList w-[80%] grid gap-4 lg:grid-cols-2">
          {yourChoiceMeals?.map((item, index) => (
            <YourChoiceCard key={index} item={item} />
          ))}
        </div>
      </section>
      {/* review */}
      {customerReview && (
        <section className="flex flex-col items-center justify-center gap-8 py-8 review bg-nursh_cream">
          <h2>CUSTOMER REVIEW</h2>
          <ReviewSlide customerReview={customerReview} />
        </section>
      )}

      {/* connect */}
      <section className="flex flex-col items-center justify-center gap-4 py-8 connect ">
        <h2>CONNECT WITH US</h2>
        <div className="connectSections w-[90%] grid grid-cols-2 overflow-hidden max-sm:grid-cols-1 md:w-[85%]">
          <div className="flex items-start justify-center section1Container">
            <figure className="section1 text-[clamp(0.5rem,_0.4rem_+_1vw,_1rem)] font-semibold flex flex-col justify-end items-center text-left overflow-hidden gap-2 -mt-2  lg:-mt-[0.725rem]">
              <img
                className="w-40 h-48 md:w-[20rem] md:h-[20rem] object-cover"
                src={img1}
                alt="connectImg"
              />
              <ul className="flex flex-col items-center justify-center gap-2 *:w-full *:flex *:items-start *:justify-start *:gap-2">
                <li>
                  <IoCheckboxOutline className="text-2xl" />
                  <span> Connect with us via our social media handles</span>
                </li>
                <li>
                  <IoCheckboxOutline className="text-2xl" />
                  <span>Chat and Make enquires about your Order</span>
                </li>
                <li>
                  <IoCheckboxOutline className="text-2xl" />
                  <span>Fast reply from our social media handler</span>
                </li>
              </ul>
            </figure>
          </div>
          <div className="flex items-center justify-center section2Container">
            <figure className="section2 bg-white text-center shadow-card_shadow rounded-card_border_radius border-[0.3rem] border-solid border-nursh_dark_gold w-[min(40%,_7rem)] h-[85%] ml-4 max-sm:w-[min(45%,_8rem)] md:w-[min(50%,_10rem)] text-[clamp(0.3rem,_0.2rem_+_0.7vw,_1rem)] grid grid-rows-[10%,_90%]  font-semibold gap-2 overflow-hidden">
              <p className="mt-2">
                Welcome <br /> This is Goldenursh <br /> support line.
              </p>

              <img
                className="w-[10rem] h-[16rem] md:h-[20rem] object-cover -mb-4 md:-mb-8 "
                src={img2}
                alt="connectImg"
              />
            </figure>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
