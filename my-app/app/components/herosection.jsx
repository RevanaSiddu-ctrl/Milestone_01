"use client";

import Image from "next/image";
import hero from "../images/hero.jpg"
import restan from "../images/restan.webp"
import { useRouter } from "next/navigation"
import { FaFacebookF, FaTwitter, FaYoutube, FaLinkedinIn, FaShoppingCart } from "react-icons/fa";
import menubg from "../images/menubg.jpg";
import restanwhite from "../images/restanwhite.webp"
import { MdHome } from "react-icons/md";

export function HeroSection1(){
   
      const route = useRouter();

    return(
        <>
        <div className="relative ">
        <Image
        src="https://restan-nextjs.vercel.app/assets/img/banner/14.jpg" alt="banner" width={1600} height={700} className="brightness-35" />


            <div className="absolute inset-0 flex flex-col  pt-5">
    
                <div className="flex flex-row gap-30 text-white text-lg">
                     <div className="ml-10 cursor-pointer"> 📞Phone: +4733378901</div>
                     <div className="cursor-pointer">📧Email: food@restan.com</div>
                     <div className="ml-110">📍 175 10h Street, Office 375 Berlin, De 21562</div>
                </div>
                <div className="h-[0.5px] bg-white mt-2"></div>  
                
                <div className="flex felx-row justify-center items-center ">
                        <button className="text-[#FFFFFF] cursor-pointer text-2xl font-sans-SERIF ml-65" onClick={()=>{route.push("/home")}}>Home</button> 
                        <button  className="text-[#FFFFFF] cursor-pointer text-2xl font-sans-SERIF  mx-25" onClick={()=>{route.push("/menu")}}>Menu</button> 
                        <Image src={restan} alt="image" className="h-15 w-28 mx-25 mt-4"></Image>
                        <button  className="text-[#FFFFFF] cursor-pointer text-2xl font-sans-SERIF  mx-25" onClick={()=>{route.push("/aboutus")}}>AboutUs</button>
                        <button  className="text-[#FFFFFF] cursor-pointer text-2xl font-sans-SERIF  mx-25" onClick={()=>{route.push("/contactus ")}}>ContactUs</button>
                </div>

                <h1 className="text-7xl font-extrabold font-serif text-white  flex justify-center mt-[300px]">Best Restaurant</h1>
                <div className="flex justify-center  ">
                    <div className="h-[200px] w-[200px] rounded-[50%] border border-white border-2 text-white mt-4 "></div>
                </div>

            </div>
        </div>

        </>
    )
}

export  function HeroSection2({location}){
    
     const route = useRouter();
    
    return(
        <>
        <div className="relative h-[59vh] w-full">
                <Image src={menubg} alt="bg" className="h-[59vh] w-full absolute brightness-50 object-cover"/>
        
                <div className="w-full h-[40px] bg-[#826A45] absolute flex items-center">
                    <div className="text-white ml-[90px]">📞 Phone: +4733378901</div>
                    <div className="text-white ml-[40px]">📧 Email: food@restan.com</div>
        
                    <div className="flex items-center ml-[650px]">
                    <div className="text-white">English</div>
                    <div className="h-[20px] border-l border-amber-50 mx-[10px]"></div>
        
                    <div className="flex items-center gap-4 text-white text-lg">
                      <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300"><FaFacebookF /></a>
                      <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300"><FaTwitter /></a>
                      <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300"><FaYoutube /></a>
                      <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300"><FaLinkedinIn /></a>
                    </div>
                  </div>
                </div>
        
                <div className="absolute inset-0 flex flex-col items-center pt-5 mt-10">
                  <div className="w-full h-[50px] flex flex-row absolute top-[10px] items-center">
                    <Image
                      src={restanwhite} className="h-[50px] w-[90px] ml-[300px]" alt="logo"/>
                    <button className="text-white text-1xl cursor-pointer  justify-center mx-[90px]" onClick={()=>route.push('/home')}>Home</button>
                    <button className="text-white text-1xl cursor-pointer justify-between mx-[60px]" onClick={()=>route.push('/menu')}>Menu</button>
                    <button className="text-white text-1xl cursor-pointer justify-between mx-[60px]" onClick={()=>route.push('/aboutus')}>AboutUs</button>
                    <button className="text-white text-1xl cursor-pointer justify-between mx-[60px]"onClick={()=>route.push('/contactus')}>ConatctUs </button>
                    <div className=" h-[40px] w-[40px] rounded-[50%] bg-white flex justify-center items-center ">
                        <FaShoppingCart  className="h-[25px] w-[25px]"/>
                    </div>
                    <button className="bg-black border-2 text-1xl h-[40px] w-[130px] font-bold border-white text-white hover:text-black hover:bg-white cursor-pointer ml-[10px]">Reservation</button>
                  </div>
                  <div className="absolute top-[80px] w-full h-[0.2px] bg-white"></div>
                </div>
        
                <div className="flex  flex-col justify-center items-center absolute top-[200px] left-[560px] ">
                    <h1 className="text-white text-4xl font-extrabold font-serif ml-20">{location}</h1>
                    <div className="flex flex-row justify-center items-center">
                        <MdHome className="h-[20px] w-[20px] text-white ml-20"/>
                        <button className="text-white text-1xl font-normal cursor-pointer " onClick={()=>route.push("/home") }>Home ➤</button>
                    </div>
                </div>
              </div>
        </>
    )
}