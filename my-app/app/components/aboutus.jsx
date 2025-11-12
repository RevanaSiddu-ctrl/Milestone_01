import aboutusbg from "../images/aboutusbg.png";
import Image from "next/image";
import ab1 from "../images/ab1.png"
import ab2 from "../images/ab2.png"
import ab3 from "../images/ab3.png"
import ab4 from "../images/ab4.png"
import ab5 from "../images/ab5.png"



export default function C1(){
    return(
        <>
        <div className="flex flex-col justify-items-center ">
            <Image src={aboutusbg} alt="bg" className="relative w-sceern h-[100px]"/>
            <div className="absolute text-[#826A45] ml-[40%] mt-10 text-1xl font-normal">-------OUR TRUSTED 8K HAPPY PARTNER------</div>
            <div className="flex flex-row px-60 gap-20">
                <Image src={ab1} alt="img" className="h-[100px] w-[150px]  my-20"/>
                <Image src={ab2} alt="img" className="h-[100px] w-[150px]  my-20"/>
                <Image src={ab3} alt="img" className="h-[100px] w-[150px]  my-20"/>
                <Image src={ab4} alt="img" className="h-[100px] w-[150px]  my-20"/>
                <Image src={ab5} alt="img" className="h-[100px] w-[150px]  my-20"/>
            </div>
        </div>
        </>
    )
}