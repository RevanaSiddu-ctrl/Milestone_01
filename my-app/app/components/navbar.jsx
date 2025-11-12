"use client"
import Image from "next/image";
import restan from "../images/restan.webp"
import { useRouter } from "next/navigation"

export default function NavBar(){
 
    const route = useRouter();
        

    return(
        <>
            <div  id="navbar" className="fixed top-0 left-0  h-30 bg-[#383838] flex flex-row items-center justify-center opacity-0 -translate-y-10 transition-all duration-300 z-50">
                <button className="text-[#FFFFFF] cursor-pointer text-2xl font-sans-SERIF  mx-25" onClick={()=>{route.push("/home")}}>Home</button>
                
                 <button className="text-[#FFFFFF] cursor-pointer text-2xl font-sans-SERIF  mx-25" onClick={()=>{route.push("/menu")}}>Menu</button> 

                 <Image src={restan} alt="image" className="h-20 w-28 mx-25 mt-4"></Image>

                 <button className="text-[#FFFFFF] cursor-pointer text-2xl font-sans-SERIF  mx-25" onClick={()=>{route.push("/home")}}>About US</button>

                 <button className="text-[#FFFFFF] cursor-pointer text-2xl font-sans-SERIF  mx-25" onClick={()=>{route.push("/home")}}>Contact US</button>
                

            </div>
        </>
    )
};