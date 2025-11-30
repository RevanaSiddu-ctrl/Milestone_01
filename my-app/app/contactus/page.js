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

        <div className="relative w-full dark:bg-[#1f1f1f] max-sm:pb-10">
        <Image src={contactusbg} alt="contactusbg" className="w-full h-[500px] object-cover brightness-90 dark:brightness-0 max-sm:h-[300px]"/>

        <div className="absolute top-20 left-[100px] flex flex-row gap-5 dark:bg-[#1f1f1f] max-sm:static max-sm:flex-col max-sm:items-center max-sm:gap-5 max-sm:mt-5">
            {alldata.map((data)=>(
                <ContactCard 
                key={data.id}   
                image={data.image}
                disc={data.disc}
                extra={data.extra}
                />
            ))}
        </div>

        <div className="absolute top-[400px] left-[400px] max-sm:static max-sm:mt-10 max-sm:flex max-sm:justify-center">
            <ContactCard1/>
        </div>

        <div className="w-full mt-[650px] dark:bg-[#1f1f1f] max-sm:mt-10"> 
            <VedioSection/>
        </div>

        <div className="relative w-full overflow-visible">
            <div className="relative z-10 dark:bg-[#1f1f1f] pt-30">
                <Footer />
                <Image src={bgspoons} alt="bgspoons" className="absolute top-[-80px] right-10 h-[300px] w-[500px] object-contain opacity-30 z-0 max-sm:hidden"/>
            </div>
        </div>

        </div>

        </>
    )
};
