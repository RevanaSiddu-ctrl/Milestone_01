import Image from "next/image"
import social from "../images/social.jpeg"
import street from "../images/street.webp"
import restan from "../images/restan.webp"

export default function Footer(){
return(
<>
<div className="relative z-20 -mb-40 ml-40 max-sm:ml-0 w-[1200px]  min-h-[400px] shrink-0 max-sm:w-full bg-[#1b1b1b] flex flex-row pt-20 pl-10 max-sm:flex-col max-sm:h-auto max-sm:p-5">
            <div className="flex flex-col w-[25%] max-sm:w-full max-sm:mb-6">
                <div className="text-2xl text-white my-4 max-sm:w-[150px] max-sm:h-auto">About Us</div>
                <span className="text-white">Continued at zealously necessary is Surrounded sir motionless she end literature. Gay direction neglected.</span>
                <div className="flex flex-col">
                        <Image src={social} alt="social media contacts" className="h-10 w-50 my-4"></Image>
                </div>
            </div>
            <div className="h-55 w-[1px] bg-gray-200 max-sm:hidden"></div>
            <div className="flex flex-col w-[10%] mx-5 max-sm:w-full max-sm:mx-0 max-sm:mb-6">
                <div className="text-2xl text-white my-3">Explore</div>
                <span className="text-white block my-1 cursor-pointer">About</span>
                <span className="text-white block my-1 cursor-pointer">Help Center</span>
                <span className="text-white block my-1 cursor-pointer">Carrer</span>
                <span className="text-white block my-1 cursor-pointer">features</span>
                <span className="text-white block my-1 cursor-pointer">Contact</span>
            </div>
            <div className="flex flex-col w-[25%] mx-5 max-sm:w-full max-sm:mx-0 max-sm:mb-6">
                <div className="text-2xl text-white my-2">Contact Info</div>
                <span className="text-white block my-3">📍175 10h Street, Office 375 Berlin, De 21562</span>
                <span className="text-white block my-3 cursor-pointer">📞   +123 34598768</span>
                <span className="text-white block my-3 cursor-pointer">📧 food@restan.com</span>
            </div>
           <div className="flex flex-col w-[25%] mx-5 max-sm:w-full max-sm:mx-0 max-sm:mb-6">
              <div className="text-2xl text-white my-2">NewsLetter</div>
              <span className="text-white block my-2">Join our subscribers list to get the latest news and special offers.</span>
              <div className="flex flex-row max-sm:flex-col max-sm:items-start max-sm:gap-2">
              <input placeholder="Enter your email" className="border-b border-amber-50 placeholder:text-amber-50 my-2"></input>
              <button className="text-white cursor-pointer">➜</button>
           </div>
           <label className="flex flex-row">
             <input type="checkbox"></input>
             <span className="text-amber-50">I agree to the Privacy Policy</span>
           </label>
           </div>
</div>

<div className="h-80 bg-[#262525] flex flex-row items-end relative max-sm:flex-col max-sm:h-auto max-sm:items-center max-sm:py-5 overflow-x-hidden">
   <div className="flex flex-row max-sm:flex-col max-sm:items-center max-sm:gap-3">
        <Image src={street} alt="Street" className="h-30 w-30"/>
        <Image src={restan} alt="Street" className="h-20 w-28 mb-3 max-sm:ml-0 max-sm:text-center max-sm:mt-4"></Image>
   </div>
    <div className="text-amber-100 ml-[940px] max-sm:ml-0 mb-3">© Copyright 2025. Restan. All Rights Reserved</div>
</div>
</>
)
}
