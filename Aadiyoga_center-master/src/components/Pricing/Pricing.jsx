import React, { useState } from "react";

import { pricing } from "./Pricing";

import { BsCheck, BsChevronRight } from "react-icons/bs";

const Pricing = () => {
  const [index, setIndex] = useState(0);
  return (
    <section className="section-sm lg:section-lg bg-section">
      <div className="container mx-auto">
        <div className="text-center mb-7 lg:mb-[70px]">
          <h2
            className="h2 mb-3 lg:mb-[18px]"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            Pick a Pricing Plan
          </h2>
          <p
            className="max-w-[398px] mx-auto"
            data-aos="fade-up"
            data-aos-delay="700"
          >
            Pick a pricing plan and get started your journey with us for
            building your body and mind
          </p>
        </div>
        <div className="flex flex-col mx-auto items-center gap-y-5 lg:flex-row lg:gap-x-[33px]">
          {pricing.map((card, currentIndex) => {
            const { title, price, subtitle, list, buttonText, delay } = card;
            return (
              <div
                onClick={() => setIndex(currentIndex)}
                className="bg-white w-full max-w-[368px] min-h-[668px] h-full cursor-pointer relative"
                key={currentIndex}
                data-aos="fade-up"
                data-aos-delay={delay}
              >
                <div
                  className={`${
                    index === currentIndex
                      ? "bg-orange text-white"
                      : "bg-white text-heading"
                  } text-center pt-[70px] pb-[34px] border-b border-stroke-3 transition`}
                >
                  <div className="text-[24px] font-medium mb-[10px]">
                    {title}
                  </div>
                  <div className="text-[34px] font-semibold">{price}</div>
                </div>
                <div className="px-[30px] pt-[18px] pb-[30px]">
                  <p className="text-center mb-6 text-sm">{subtitle}</p>
                  <ul className="flex flex-col gap-3 mb-10">
                    {list.map((item, index) => {
                      const { icon, name } = item;
                      return (
                        <li
                          className="border border-stroke-3 p-4 rounded-md flex items-center gap-4"
                          key={index}
                        >
                          <div className="flex justify-center bg-green-100 w-7 h-7 items-center text-2xl text-green-300 rounded-full">
                            <BsCheck />
                          </div>
                          {name}
                        </li>
                      );
                    })}
                  </ul>
                  <div className="absolute bottom-[30px] w-full left-0 right-0 px-[30px]">
                    <button
                      className={`${
                        index === currentIndex
                          ? "bg-orange text-white"
                          : "border-orange"
                      } w-full h-[50px] rounded border flex items-center justify-center text-orange font-medium transition relative`}
                    >
                      {buttonText}
                      <div
                        className={`${
                          index === currentIndex ? "bg-orange-200" : "bg-orange"
                        } w-[48px] h-[48px] flex justify-center items-center absolute right-0 rounded text-white`}
                      >
                        <BsChevronRight />
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
