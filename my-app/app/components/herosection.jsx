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
        src="https://restan-nextjs.vercel.app/assets/img/banner/14.jpg" alt="banner" width={1600} height={700} className="brightness-35 w-full h-[700px] object-cover max-sm:h-[250px]" />


            <div className="absolute inset-0 flex flex-col  pt-5 max-sm:pt-2">
    
                <div className="flex flex-row gap-30 text-white text-lg  max-sm:flex-col max-sm:gap-2 max-sm:text-center max-sm:items-center max-sm:mb-0">
                     <div className="ml-10 cursor-pointer max-sm:ml-0 max-sm:font-extralight"> 📞Phone: +4733378901</div>
                     <div className="cursor-pointer max-sm:ml-0 max-sm:font-extralight">📧Email: food@restan.com</div>
                     <div className="ml-110  max-sm:ml-0 max-sm:w-[90%] max-sm:text-wrap max-sm:font-extralight">📍 175 10h Street, Office 375 Berlin, De 21562</div>
                </div>
                <div className="h-[0.5px] bg-white mt-2"></div>  
                
                <div className="flex felx-row justify-center items-center max-sm:flex-row max-sm:flex-nowrap max-sm:gap-2 ">
                        <button className="text-[#FFFFFF] cursor-pointer text-1xl  ml-6 max-sm:mx-2 max-sm:ml-0" onClick={()=>{route.push("/home")}}>Home</button> 
                        <button  className="text-[#FFFFFF] cursor-pointer text-1xl   mx-45  max-sm:mx-2 max-sm:ml-0" onClick={()=>{route.push("/menu")}}>Menu</button> 
                        <Image src={restan} alt="image" className="h-15 w-28 mx-25 mt-4   max-sm:hidden"></Image>
                        <button  className="text-[#FFFFFF] cursor-pointer text-1xl  mx-15 max-sm:mx-2 max-sm:ml-0" onClick={()=>{route.push("/aboutus")}}>AboutUs</button>
                        <button  className="text-[#FFFFFF] cursor-pointer text-1xl   mx-25 max-sm:mx-2 max-sm:ml-0" onClick={()=>{route.push("/contactus ")}}>ContactUs</button>
                </div>

                <h1 className="text-7xl font-extrabold font-serif text-white  flex justify-center mt-[200px] max-sm:mt-[0px] max-sm:text-3xl max-sm:hidden">Best Restaurant</h1>
                <div className="flex justify-center  ">
                    <div className="h-[200px] w-[200px] rounded-[50%] border border-white border-2 text-white mt-4 max-sm:hidden "></div>
                </div>

            </div>
        </div>

        </>
    )
}

export function HeroSection2({location}){
const route=useRouter();
return(
<>
<div className="relative h-[59vh] w-full max-sm:mt-0">
        <Image src={menubg} alt="bg" className="h-[59vh] w-full absolute brightness-50 object-cover"/>
          <div className="w-full h-[40px] bg-[#826A45] absolute flex items-center max-sm:flex-col max-sm:h-auto max-sm:py-1 max-sm:gap-1 ">
                <div className="text-white ml-[90px] max-sm:ml-0">📞 Phone: +4733378901</div>
                <div className="text-white ml-[40px] max-sm:ml-0">📧 Email: food@restan.com</div>
              <div className="flex items-center ml-[650px] max-sm:ml-0 max-sm:mt-2 max-sm:justify-center">
                  <div className="text-white max-sm:hidden">English</div>
                  <div className="h-[20px] border-l border-amber-50 mx-[10px] max-sm:hidden"></div>
                  <div className="flex items-center gap-4 text-white text-lg max-sm:hidden">
                        <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300"><FaFacebookF/></a>
                        <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300"><FaTwitter/></a>
                        <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300"><FaYoutube/></a>
                        <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300"><FaLinkedinIn/></a>
                  </div>
            </div>
          </div>
<div className="absolute inset-0 flex flex-col items-center pt-5 mt-10 max-sm:pt-0 max-sm:mt-20">
      <div className="w-full h-[50px] flex flex-row absolute top-[10px] items-center max-sm:flex-wrap max-sm:h-auto max-sm:justify-center max-sm:gap-2">
        <Image src={restanwhite} className="h-[50px] w-[90px] ml-[300px] max-sm:ml-0 max-sm:hidden" alt="logo"/>
        <button className="text-white text-1xl cursor-pointer justify-center mx-[90px] max-sm:mx-2" onClick={()=>route.push('/home')}>Home</button>
        <button className="text-white text-1xl cursor-pointer justify-between mx-[60px] max-sm:mx-2" onClick={()=>route.push('/menu')}>Menu</button>
        <button className="text-white text-1xl cursor-pointer justify-between mx-[60px] max-sm:mx-2" onClick={()=>route.push('/aboutus')}>AboutUs</button>
        <button className="text-white text-1xl cursor-pointer justify-between mx-[60px] max-sm:mx-2" onClick={()=>route.push('/contactus')}>ConatctUs</button>
        <div className="h-[40px] w-[40px] rounded-[50%] bg-white flex justify-center items-center max-sm:hidden">
          <FaShoppingCart className="h-[25px] w-[25px] max-sm:hidden"/>
        </div>
        <button className="bg-black border-2 text-1xl h-[40px] w-[130px] font-bold border-white text-white hover:text-black hover:bg-white cursor-pointer ml-[10px] max-sm:ml-0 max-sm:hidden">Reservation</button>
      </div>
      <div className="absolute top-[80px] w-full h-[0.2px] bg-white max-sm:hidden"></div>
</div>
<div className="flex flex-col justify-center items-center absolute top-[200px] left-[560px] max-sm:static">
      <h1 className="text-white text-4xl font-extrabold font-serif ml-20 max-sm:ml-0">{location}</h1>
      <div className="flex flex-row justify-center items-center">
          <MdHome className="h-[20px] w-[20px] text-white ml-20 max-sm:ml-0"/>
      <button className="text-white text-1xl font-normal cursor-pointer " onClick={()=>route.push('/home')}>Home ➤</button>
      </div>
</div>
</div>
</>
)}
