"use client";

import { useState } from "react";
import {HeroSection1} from "../components/herosection.jsx";
import { CardA } from "../components/card.jsx";

import Footer from "../components/footer.jsx";
import { main, seafood, dess, beverage } from "../data/menu.js";
import NavBar from "../components/navbar.jsx";
import BookTable from "../components/booktable.jsx";
import { category } from "../data/categories.js";
import PopularCaterory from "../components/categories.jsx";
import {service} from "../data/service.js"
import Service from "../components/service.jsx";
import Todayspl from "../components/todayspl.jsx";
import OnlineOrder from "../components/onlineorder.jsx";
import VedioSection from "../components/vediosection.jsx";
import MasterChef from "../components/materchef.jsx";
import { chefs } from "../data/chefs.js";
import {blogs} from "../data/blogs.js";
import Blog from "../components/blogs.jsx";
import Image from "next/image";
import bgspoons from "../images/bgspoons.webp"




export default function MenuCard() {
  const [menu, setmenu] = useState("main");


  const choose = {
    main: main,
    dess: dess,
    seafood: seafood,
    beverage: beverage
  };

  const itemDisplay = choose[menu];

  return (
    <>
    <NavBar/>
    <div className="relative pb-[450px] dark:dark:bg-[#1b1b1b] dark:text-white">
        <HeroSection1/>
        <div className=" absolute top-[680px] left-[100px] flex flex-row">
            <BookTable/>
            
            <div className="flex flex-col font-serif font-bold justify-center ">
             <h1 className="text-4xl text-black dark:text-white dark:dark:bg-[#1b1b1b] my-4 ml-[100px] mt-[150px]">🔥 Our Popular category</h1>
             <div className="flex gap-2 ml-[100px]">
                {category.map((c)=>(
                    <PopularCaterory
                    key={c.id}
                    image={c.image}
                    type={c.type}
                    name={c.name}
                    />
                ))}
             </div>
            </div>
        </div>
    </div>

        <div className="flex flex-row justify-center dark:dark:bg-[#1b1b1b] dark:text-white">
            {service.map((s)=>(
                <Service
                key={s.id}
                image={s.image}
                about={s.about}
                more={s.more}
                />
            ))}
        </div>
            <div className="dark:dark:bg-[#1b1b1b]">
            <Todayspl/></div>

                <div className="text-2xl flex flex-col  items-center dark:bg-[#1b1b1b] dark:text-white">
                    <h1 className="text-[#826A45] font-light text-3xl pt-10">-----FOOD MENU-----</h1>
                    <h1 className="text-black dark:text-white text-3xl font-extrabold font-serif">OUR SPECIAL MENU</h1>
                </div>
      <div className="flex justify-center dark:bg-[#1b1b1b] dark:text-white">
            <div className="h-27 w-190 border-2 border-black  dark:border-[#C6A664]/40  flex justify-center items-center mt-10 rounded-2xl">
                <div className="flex flex-row">
                    <button className={`text-black h-20 w-40 text-2xl font-medium rounded-2xl mx-2 cursor-pointer ${menu=="main"? "bg-[#826A45] text-white": "bg-white text-black dark:bg-[#1b1b1b] dark:text-white "}`}  onClick={()=>setmenu("main")}>Main Dishes</button>
                    <button className={`text-black h-20 w-40 text-2xl font-medium rounded-2xl mx-2 cursor-pointer  ${menu=="dess"? "bg-[#826A45] text-white": "bg-white text-black dark:bg-[#1b1b1b] dark:text-white"}`}  onClick={()=>setmenu("dess")}>DESSERTS</button>
                    <button className= {`text-black h-20 w-40 text-2xl font-medium rounded-2xl mx-2  cursor-pointer ${menu=="seafood"? "bg-[#826A45] text-white": "bg-white text-black dark:bg-[#1b1b1b] dark:text-white"}`} onClick={()=>setmenu("seafood")}>SEA FOODS</button>
                    <button className={`text-black h-20 w-40 text-2xl font-medium rounded-2xl mx-2  cursor-pointer ${menu=="beverage"? "bg-[#826A45] text-white": "bg-white text-black dark:bg-[#1b1b1b] dark:text-white"}` } onClick={()=>setmenu("beverage")}>BEVERAGE</button>
              </div>
            </div>
        </div>
      <div className="grid grid-cols-3 gap-0 pt-10  dark:bg-[#1b1b1b] dark:text-white">
        {itemDisplay.map((dish) => (
          <CardA
            key={dish.id}
            image={dish.image}
            rate={dish.rate}
            price={dish.price}
            food={dish.product}
            info={dish.more}
          />
        ))}
      </div>

      <OnlineOrder/>
      <div className="dark:bg-[#1f1f1f]">
        <VedioSection/>
      </div>


<div className="relative bg-white dark:bg-[#1b1b1b] overflow-visible">
  
  <Image
    src={bgspoons}
    alt="bgspoons"
    className="absolute top-[-150px] right-[0px] -translate-x-[10px] h-[300px] w-[700px] object-contain opacity-30 z-0"
  />

  
  <div className="relative h-[550px] bg-[#EBE9EC] dark:bg-[#1b1b1b] w-full pt-2 flex flex-col justify-center items-center z-10 overflow-visible">
    <div className="z-10 flex flex-col items-center text-center">
      <h1 className="text-[#8B7E74] tracking-widest text-sm mb-2">
        ----- Master Chefs -----
      </h1>
      <h1 className="text-black dark:text-white text-3xl font-bold font-serif">
        Meet Our Special Chefs
      </h1>

      <div className="grid grid-cols-3 gap-10 justify-items-center pt-10">
        {chefs.map((chef) => (
          <MasterChef
            key={chef.id}
            image={chef.image}
            name={chef.name}
            specality={chef.specality}
          />
        ))}
      </div>
    </div>
  </div>
</div>


     <div className="relative">
        <div className="text-[#826A45] text-3xl  font-serif flex justify-center dark:bg-black pt-3">------News & Blogs------</div>
        <div className="text-black dark:text-white text-4xl  font-extrabold pt-2 font-serif flex justify-center dark:bg-black">Our Latest News & Blog</div>
        <div className="h-[900px] grid grid-cols-2 gap-25 pt-10 justify-items-center  dark:bg-black dark:text-white">
            {blogs.map((blog)=>(
                <Blog
                    key={blog.id}
                    image={blog.image}
                    date={blog.date}
                    info={blog.info}
                    more={blog.more}
                />
            ))}
        </div>
        </div>
      
      <div className="absolute top-[6000px] left-0 w-full z-20">
      <Footer /> 
      </div>
    </>
  );
}
