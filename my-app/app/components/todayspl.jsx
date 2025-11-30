import Image from "next/image"
import todayspl from "../images/todayspl.png"
import sp2 from "../images/sp2.webp"
import sp1 from "../images/sp1.webp"
import sp3 from "../images/sp3.webp"

export default function Todayspl(){
    return(
        <>
            <div className="relative flex justify-center dark:dark:bg-[#1b1b1b] ">
                
                    <Image src={todayspl} className="h-[600px] w-300 pt-20 rounded rounded-0xl" alt="Image"></Image>
                
                <Image src={sp2} className="h-[160px] w-40 rounded rounded-2xl absolute left-[320px] top-[130px]" alt="Image"></Image>
                <Image src={sp1} className="h-[220px] w-60 rounded rounded-2xl absolute left-[510px] top-[220px]" alt="Image"></Image>
                <Image src={sp3} className="h-[160px] w-40 rounded rounded-2xl absolute left-[320px] top-[340px]" alt="Image"></Image>
                <div className="h-[150px] w-[150px] rounded-full border-2 border-dashed border-black bg-white text-black flex flex-col justify-center items-center absolute left-[510px] top-[150px]">
                    <span className="font-bold text-xl leading-tight">Save</span>
                    <span className="font-semibold text-3xl leading-tight">55%</span>
                </div>


                <div className="flex felx-col">
                    <h3 className="text-black text-2xl font-bold w-[350px] absolute top-[179px] left-[780px]">Today Special Offer------</h3>
                    <h1 className="text-black text-4xl font-serif font-extrabold w-[400px] absolute top-[250px] left-[780px]">Explore Irresistible Promotions!</h1>
                    <h4 className="text-black  text-1xl font-medium w-[550px] absolute top-[350px] left-[780px]">
                        Contrasted dissimilar get joy you instrument out reasonably. 
                        Again keeps at no meant stuff. 
                        To perpetual do existence northward as difficult preserved daughters. 
                        Continued at up to zealously necessary.</h4>
                        <button className="bg-[#826A45] h-[60px] w-[170px] rounded rounded-2xl absolute top-[440px] left-[780px] text-white hover:bg-black cursor-pointer">Order Today</button>
                </div>
            </div> 
        </>
    )
} 