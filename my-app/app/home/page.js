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
    <div className="relative pb-[450px]">
        <HeroSection1/>
        <div className=" absolute top-[680px] flex flex-row">
            <BookTable/>
            
            <div className="flex flex-col font- font-serif font-bold justify-center ">
             <h1 className="text-4xl text-black my-4 ml-[200px] mt-[150px]">🔥 Our Popular category</h1>
             <div className="flex gap-2 ml-[200px]">
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

        <div className="flex flex-row justify-center">
            {service.map((s)=>(
                <Service
                key={s.id}
                image={s.image}
                about={s.about}
                more={s.more}
                />
            ))}
        </div>

            <Todayspl/>

                <div className="text-2xl flex flex-col mt-10 items-center">
                    <h1 className="text-[#826A45] font-light text-3xl">-----FOOD MENU-----</h1>
                    <h1 className="text-black text-3xl font-extrabold font-serif">OUR SPECIAL MENU</h1>
                </div>
      <div className="flex justify-center ">
            <div className="h-27 w-180 border-2 border-black flex justify-center items-center mt-10 rounded-2xl">
                <div className="flex flex-row">
                    <button className={`text-black h-20 w-40 text-2xl font-medium rounded-2xl mx-2 cursor-pointer ${menu=="main"? "bg-[#826A45] text-white": "bg-white text-black"}`}  onClick={()=>setmenu("main")}>Main Dishes</button>
                    <button className={`text-black h-20 w-40 text-2xl font-medium rounded-2xl mx-2 cursor-pointer  ${menu=="dess"? "bg-[#826A45] text-white": "bg-white text-black"}`}  onClick={()=>setmenu("dess")}>DESSERTS</button>
                    <button className= {`text-black h-20 w-40 text-2xl font-medium rounded-2xl mx-2  cursor-pointer ${menu=="seafood"? "bg-[#826A45] text-white": "bg-white text-black"}`} onClick={()=>setmenu("seafood")}>SEA FOODS</button>
                    <button className={`text-black h-20 w-40 text-2xl font-medium rounded-2xl mx-2  cursor-pointer ${menu=="beverage"? "bg-[#826A45] text-white": "bg-white text-black"}` } onClick={()=>setmenu("beverage")}>BEVERAGE</button>
              </div>
            </div>
        </div>
      <div className="grid grid-cols-3 gap-0  mt-10 my-10 ">
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
      <VedioSection/>


<div className="relative bg-white overflow-visible">
  
  <Image
    src={bgspoons}
    alt="bgspoons"
    className="absolute top-[-230px] right-[0px] -translate-x-[0px] h-[300px] w-[700px] object-contain opacity-30 z-0"
  />

  
  <div className="relative h-[500px] bg-[#EBE9EC] w-full mb-10 flex flex-col justify-center items-center z-10 overflow-visible">
    <div className="z-10 flex flex-col items-center text-center">
      <h1 className="text-[#8B7E74] tracking-widest text-sm mb-2">
        ----- Master Chefs -----
      </h1>
      <h1 className="text-black text-3xl font-bold font-serif">
        Meet Our Special Chefs
      </h1>

      <div className="grid grid-cols-3 gap-10 justify-items-center mt-8">
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




        <div className="text-[#826A45] text-3xl  font-serif flex justify-center ">------News & Blogs------</div>
        <div className="text-black text-4xl  font-extrabold font-serif flex justify-center ">Our Latest News & Blog</div>
        <div className="h-[650px] flex flex-row grid grid-cols-2 gap-25 mb-10 justify-items-center mt-[50px]">
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
      

      <Footer />
    </>
  );
}
