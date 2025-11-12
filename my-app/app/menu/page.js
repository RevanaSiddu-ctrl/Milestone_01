"use client";

import Image from "next/image";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { item1, item2, item3, item4 } from "../data/menu2.js";
import VedioSection from "../components/vediosection.jsx";
import bgmenu from "../images/bgmenu.jpg"
import bgspoons from "../images/bgspoons.webp"
import { CardB } from "../components/card.jsx";
import Footer from "../components/footer.jsx";
import { HeroSection2 } from "../components/herosection.jsx";


export default function Menu() {


        const [menu, setmenu] = useState(item1);

          
         const router = useRouter();
 
    return (
    <>
      <HeroSection2 location="Restaurnt Best Food"/>

      <div className="  relative bg-[#aba496] min-h-[400px] w-full mb-10 flex flex-col justify-start items-center">
                    
      <div className="flex justify-center mt-10">
            <div className="h-16 w-130 border-2 border-black flex  items-center mt-6 rounded-xl justify-center">
                <div className="flex flex-row">
                    <button className={`text-black h-13 w-30 text-lg font-medium rounded-xl  cursor-pointer ${menu==item1? "bg-[#826A45] text-white": "bg-[#aba496] text-black"}`} onClick={()=>{setmenu(item1)}} >Main Dishes</button>
                    <button className={`text-black h-13 w-30 text-lg font-medium rounded-xl  cursor-pointer ${menu==item2? "bg-[#826A45] text-white": "bg-[#aba496] text-black"}`} onClick={()=>{setmenu(item2)}}>DESSERTS</button>
                  <button className={`text-black h-13 w-30 text-lg font-medium rounded-xl cursor-pointer ${menu==item3? "bg-[#826A45] text-white": "bg-[#aba496] text-black"}`} onClick={()=>{setmenu(item3)}}>SEA FOODS </button>
                  <button className={`text-black h-13 w-30 text-lg font-medium rounded-xl  cursor-pointer ${menu==item4? "bg-[#826A45] text-white": "bg-[#aba496] text-black"}`} onClick={()=>{setmenu(item4)}}> BEVERAGE</button>
                 </div>
            </div>

        </div>
        <div className=" absolute bottom-[-150px] ">
       <CardB mainImg={menu.mainImg} dishes={menu.dishes}/>
       </div>
      </div>
      <div className="mt-[300px] ml-30">
        <VedioSection/>
      </div>

      <div className="relative flex-row mb-190 ">

        <Image
            src={bgspoons}
            alt="bgspoons"
            className="absolute top-[-230px] right-[0px] -translate-x-[0px] h-[300px] w-[500px] object-contain opacity-30 z-0"
          />

        <Image src={bgmenu} alt="bg" className="h-[500px] brightness-40 absolute"/>
        
         <div className="flex w-[600px] flex-col left-[200px] absolute top-[90px] ">
           <div className="text-white text-3xl relative my-5">Reservation ---------➤</div>
          <div className="text-white text-3xl relative font-serif font-extrabold my-5">Reservation Your Favorite Private Table</div>
          <h6 className="text-white text-0.5xl font-light">
            A relaxing and pleasant atmosphere, good jazz, dinner, and cocktails. The Patio Time Bar opens in the center of Florence. The only bar inspired by the 1960s, it will give you a experience that you’ll have a hard time forgetting.
          </h6>

          <div className="flex flex-row mt-5">
            <div className="flex flex-col">
              <div className="text-white text-2xl font-bold font-serif ">Launch Menu</div>
              <div className="text-white text-1xl font-extralight">30+ items</div>
            </div>
            <div className="h-[50px] w-[0.1px] border border-white ml-6 "></div>
            <div className="flex flex-col ml-4">
              <div className="text-white text-2xl font-bold font-serif ">Dinner Menu</div>
              <div className="text-white text-1xl font-extralight">50+ items</div>
            </div>
          </div>
         </div>
        <div className="h-[460px] w-[350px] bg-[#1b1b1b] rounded-2xl absolute right-[200px] top-[200px] pt-1 pl-6">

              <div className="flex flex-col">
                <div className="text-white text-2xl font-sans font-bold mb-2">Phone</div>
                <input className="placeholder-white text-white border text-1xl border-white w-[200px] font-extralight p-1" placeholder="+235686768" />

                 <div className="text-white text-2xl font-sans font-bold mt-5 mb-2">Person</div>
                       <select className="text-white bg-transparent border border-white w-[200px] font-extralight p-1">
                          <option className="bg-[#1b1b1b]">1 Person</option>
                          <option className="bg-[#1b1b1b]">2 Persons</option>
                          <option className="bg-[#1b1b1b]">3 Persons</option>
                          <option className="bg-[#1b1b1b]">4 Persons</option>
                        </select>

                   <div className="text-white text-2xl font-sans font-bold mt-5 mb-2">Date</div>
                    <input type="date" className="text-white border border-white w-[200px] bg-transparent p-1" />

                    <div className="text-white text-2xl font-sans font-bold mt-5 mb-2">Time</div>
                         <select className="text-white bg-transparent border border-white w-[200px] font-extralight p-1">
                             <option className="bg-[#1b1b1b]">10:00 AM</option>
                             <option className="bg-[#1b1b1b]">12:00 PM</option>
                              <option className="bg-[#1b1b1b]">02:00 PM</option>
                             <option className="bg-[#1b1b1b]">06:00 PM</option>
                             <option className="bg-[#1b1b1b]">09:00 PM</option>
                          </select>
                    <button className="h-[50px] w-[130px] bg-[#826A45] hover:text-black  hover:bg-white mt-10 rounded rounded-2xl text-white text-extrabold"  >Book A Table</button>
               </div>
          </div>

      </div>

      <Footer/>
      
      
    </>
  );
}
