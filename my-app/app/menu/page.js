"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { item1, item2, item3, item4 } from "../data/menu2.js";
import VedioSection from "../components/vediosection.jsx";
import bgmenu from "../images/bgmenu.jpg";
import bgspoons from "../images/bgspoons.webp";
import { CardB } from "../components/card.jsx";
import Footer from "../components/footer.jsx";
import { HeroSection2 } from "../components/herosection.jsx";

export default function Menu() {
  const [menu, setmenu] = useState(item1);
  const router = useRouter();

  return (
    <>
      <HeroSection2 location="Restaurnt Best Food"  />

      <div className="relative bg-[#aba496] min-h-[400px] w-full flex flex-col justify-start items-center dark:bg-[#1f1f1f] dark:border-[#C6A664]">
        <div className="flex justify-center mt-10">
          <div className="h-16 w-130 border-2 border-black flex items-center mt-6 rounded-xl justify-center dark:border-[#C6A664] max-sm:w-[95%] max-sm:h-auto max-sm:py-2">
            <div className="flex flex-row max-sm:flex-wrap max-sm:gap-6  max-sm:justify-center">
              <button
                className={`text-black h-13 w-30 text-lg font-medium rounded-xl cursor-pointer ${menu == item1? "bg-[#826A45] text-white": "bg-[#aba496] text-black dark:bg-[#1f1f1f] dark:text-white"}`}
                onClick={() => {
                  setmenu(item1);
                }}
              >
                Main Dishes
              </button>

              <button
                className={`text-black h-13 w-30 text-lg font-medium rounded-xl cursor-pointer ${menu == item2 ? "bg-[#826A45] text-white": "bg-[#aba496] text-black dark:bg-[#1f1f1f] dark:text-white"
                }`}
                onClick={() => {setmenu(item2);}}
              >
                DESSERTS
              </button>

              <button className={`text-black h-13 w-30 text-lg font-medium rounded-xl cursor-pointer ${menu == item3? "bg-[#826A45] text-white": "bg-[#aba496] text-black dark:bg-[#1f1f1f] dark:text-white"
                }`}
                onClick={() => {setmenu(item3);}}
              >
                SEA FOODS
              </button>

              <button
                className={`text-black h-13 w-30 text-lg font-medium rounded-xl cursor-pointer ${menu == item4? "bg-[#826A45] text-white": "bg-[#aba496] text-black dark:bg-[#1f1f1f] dark:text-white"
                }`}
                onClick={() => {
                  setmenu(item4);
                }}
              >
                BEVERAGE
              </button>
            </div>
          </div>
        </div>

        <div className="absolute z-20 dark:bg-[#1f1f1f] bottom-[-140px] max-sm:static max-sm:mt-10 max-sm:w-full max-sm:flex max-sm:justify-center">
          <CardB mainImg={menu.mainImg} dishes={menu.dishes} />
        </div>
      </div>

      <div className="relative pt-50 dark:bg-[#1f1f1f] z-10 w-full max-sm:pt-20">
        <VedioSection />
      </div>

      <div className="relative flex-row dark:bg-[#1f1f1f]">
        <div className="relative flex-row mb-110 dark:bg-[#1b1b1b] pt-40 max-sm:pt-10 max-sm:pb-10 max-sm:mb-0">

          <Image
            src={bgspoons}
            alt="bgspoons"
            className="absolute top-[-110px] right-[10px] -translate-x-[0px] h-[300px] w-[500px] object-contain opacity-30 z-50 max-sm:hidden"
          />

          <Image
            src={bgmenu}
            alt="bg"
            className="h-[500px] brightness-40 absolute dark:bg-[#1f1f1f] max-sm:h-[250px] max-sm:w-full max-sm:object-cover"
          />

          <div className="flex w-[600px] flex-col left-[200px] absolute top-[190px] max-sm:static max-sm:w-full max-sm:px-5 max-sm:mt-10">
            <div className="text-white text-3xl relative my-5 max-sm:text-xl">
              Reservation ---------➤
            </div>

            <div className="text-white text-3xl relative font-serif font-extrabold my-5 max-sm:text-2xl">
              Reservation Your Favorite Private Table
            </div>

            <h6 className="text-white text-0.5xl font-light max-sm:text-sm max-sm:hidden">
              A relaxing and pleasant atmosphere, good jazz, dinner, and cocktails. The Patio Time Bar opens in the center of Florence. The only bar inspired by the 1960s, it will give you a experience that you’ll have a hard time forgetting.
            </h6>

            <div className="flex flex-row mt-5 max-sm:flex-col max-sm:gap-3 max-sm:hidden">
              <div className="flex flex-col">
                <div className="text-white text-2xl font-bold font-serif max-sm:text-xl">
                  Launch Menu
                </div>
                <div className="text-white text-1xl font-extralight max-sm:text-sm">
                  30+ items
                </div>
              </div>

              <div className="h-[50px] w-[0.1px] border border-white ml-6 max-sm:hidden"></div>

              <div className="flex flex-col ml-4 max-sm:ml-0">
                <div className="text-white text-2xl font-bold font-serif max-sm:text-xl">
                  Dinner Menu
                </div>
                <div className="text-white text-1xl font-extralight max-sm:text-sm">
                  50+ items
                </div>
              </div>
            </div>
          </div>

          <div className="h-[460px] w-[350px] bg-[#1b1b1b] rounded-2xl border border-2 absolute right-[150px] top-[300px] pt-1 pl-6 dark:bg-[#1f1f1f] dark:border-[#C6A664] max-sm:static max-sm:w-[90%] max-sm:mx-auto max-sm:mt-20 ">
            <div className="flex flex-col">
              <div className="text-white text-2xl font-sans font-bold mb-2 max-sm:text-xl">
                Phone
              </div>

              <input
                className="placeholder-white text-white border text-1xl border-white w-[200px] font-extralight p-1 dark:border-[#C6A664]/60 max-sm:w-[50%]"
                placeholder="+235686768"
              />

              <div className="text-white text-2xl font-sans font-bold mt-5 mb-2 max-sm:text-xl">
                Person
              </div>

              <select className="text-white bg-transparent border border-white w-[200px] font-extralight p-1 dark:border-[#C6A664]/60 max-sm:w-[50%]">
                <option className="bg-[#1b1b1b]">1 Person</option>
                <option className="bg-[#1b1b1b]">2 Persons</option>
                <option className="bg-[#1b1b1b]">3 Persons</option>
                <option className="bg-[#1b1b1b]">4 Persons</option>
              </select>

              <div className="text-white text-2xl font-sans font-bold mt-5 mb-2 max-sm:text-xl">
                Date
              </div>

              <input
                type="date"
                className="text-white border border-white w-[200px] bg-transparent p-1 dark:border-[#C6A664]/60 max-sm:w-[50%]"
              />

              <div className="text-white text-2xl font-sans font-bold mt-5 mb-2 max-sm:text-xl">
                Time
              </div>

              <select className="text-white bg-transparent border border-white w-[200px] font-extralight p-1 dark:border-[#C6A664]/60 max-sm:w-[50%]">
                <option className="bg-[#1b1b1b]">10:00 AM</option>
                <option className="bg-[#1b1b1b]">12:00 PM</option>
                <option className="bg-[#1b1b1b]">02:00 PM</option>
                <option className="bg-[#1b1b1b]">06:00 PM</option>
                <option className="bg-[#1b1b1b]">09:00 PM</option>
              </select>

              <button className="h-[50px] w-[130px] bg-[#826A45] hover:text-black hover:bg-white mt-10 rounded rounded-2xl text-white text-extrabold max-sm:w-[50%]">
                Book A Table
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="h-[600px] dark:bg-[#1f1f1f] pt-50 max-sm:pt-0">
        <Footer />
      </div>
    </>
  );
}
