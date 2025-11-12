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
        <div className="relative w-full h-[800px] mt-10">
        <Image src={contactusbg} alt="contactusbg" className="w-full  h-[800px] object-cover brightness=10 mt-10"/>

        <div className="absolute  flex flex-row mx-10 gap-5 top-[50px] left-[100px]">
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
       <div className="absolute top-[900] left-[90]"> 
        <VedioSection/>
       </div>
       <Image src={bgspoons} alt="bgspoons"
            className="absolute top-330 right-10 h-[300px] w-[500px] object-contain opacity-30 z-0" />
       <div className="relative top-[750]">
        <Footer/>
       </div>   
        </div>

        </>
    )
};