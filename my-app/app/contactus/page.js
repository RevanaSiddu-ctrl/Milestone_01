"use client";
import Image from "next/image";
import {ContactCard, ContactCard1} from "../components/contactcard.jsx";
import { HeroSection2 } from "../components/herosection.jsx";
import contactusbg from "../images/contactusbg.png"
import bgspoons from "../images/bgspoons.webp"
import {data1, data2, data3} from "../data/contact.js"
import VedioSection from "../components/vediosection.jsx";
import Footer from "../components/footer.jsx";




export default function Contactus(){
    const alldata = [...data1, ...data2, ...data3];
    
    return(
        <>
        <HeroSection2 location="ContactUS"/>
        <div className="relative w-full h-[1000px]  dark:bg-[#1f1f1f]">
        <Image src={contactusbg} alt="contactusbg" className="w-full  h-[1000px] object-cover brightness=10 dark:brightness-0 "/>

        <div className="absolute  flex flex-row mx-10 gap-5 top-[50px] left-[100px] dark:bg-[#1f1f1f] ">
            {alldata.map((data)=>(
                <ContactCard 
                key={data.id}   
                image={data.image}
                disc={data.disc}
                extra={data.extra}
                />
            ))}
        </div>
        <div className="absolute top-[400px] flex left-[400px] br-white">
            <ContactCard1/>
        </div>
       <div className=" top-[900]  w-full dark:bg-[#1f1f1f]"> 
        <VedioSection/>
       </div>

                <div className="relative w-full overflow-visible">
                    <div className="relative z-10  dark:bg-[#1f1f1f] pt-30">
                        <Footer />
                        <Image src={bgspoons} alt="bgspoons" className="absolute top-[-80px] right-10 h-[300px] w-[500px] object-contain opacity-30 z-0"
                      />
                      </div>
                </div>

         
        </div>

        </>
    )
};