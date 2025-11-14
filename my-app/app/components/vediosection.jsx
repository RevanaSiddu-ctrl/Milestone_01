import Image from "next/image";
import mobilelogo from "../images/mobilelogo.png"


export default function VedioSection(){
    return(
        <>
        <div className="relative w-full pl-70 pt-30 ">
            <iframe width="660" 
            height="408" 
            src="https://www.youtube.com/embed/F3zw1Gvn4Mk?autoplay=1&mute=1" 
            title="Mr Fox Restaurant Promo Video" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerPolicy="strict-origin-when-cross-origin" 
            allowFullScreen></iframe>
            <div className="absolute flex flex-col h-[300px] w-[450px] bg-white border dark:bg-[#1b1b1b] dark:text-white dark:border-[#C6A664]/40  border-gray rounded rounded-2xl bottom-[170px] left-[900px] p-8">
                <h1 className="text-black text-2xl font-bold font-serif dark:text-white">Opening Hours</h1>
                <h4 className="text-gray-800 text-0.5xl font-extralight dark:text-white">
                    A relaxing and pleasant atmosphere, good jazz, dinner, and cocktails.
                     The Patio Time Bar opens in the center..</h4>
                <h2 className="text-black text-1xl font-normal font-pop mt-3 my-1 dark:text-white">Sunday To Tuesday: ------10:00-9:00</h2>
                <h2 className="text-black text-1xl font-normal font-serif my-1 dark:text-white">Wednesday to Thursday:: ------11:30-10:30</h2>
                <h2 className="text-black text-1xl font-normal font-serif my-1 dark:text-white" >Sunday To Tuesday: ------10:00-9:00</h2>
                
                <div className="flex flex-row ">
                    <Image src={mobilelogo} className="h-[40px] w-[40px]  mt-2 dark:text-white" alt="image"></Image>
                    <h2 className="text-black text-2xl font-normal font-pop  mt-3 dark:text-white">Call Anytime</h2>
                    
                </div>
                <h2 className="text-black hover:text-[#826A45]text-2xl font-bold font-pop dark:text-white">+964733-378901</h2>
            </div>
        </div>
        </>
    )
}