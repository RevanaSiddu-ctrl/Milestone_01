import Image from "next/image"
import mobileimage from "../images/mobileimage.webp"
import orderbg from "../images/orderbg.png"

export default function OnlineOrder(){
    return(
        <>
            <div className="relative pt-20  flex justify-center dark:bg-[#1b1b1b] max-sm:flex-col max-sm:items-center max-sm:pt-10">
                <Image src={orderbg} className="h-[600px] w-300 rounded rounded-3xl max-sm:w-[95%] max-sm:h-auto" alt="image"></Image>
                <Image src={mobileimage} className="h-[350px] w-100 rounded rounded-2xl absolute top-[100px] left-[290px] max-sm:static max-sm:mt-5 max-sm:h-[300px] max-sm:w-auto" alt="image"></Image>
                <div className="absolute flex flex-col top-[200px] left-[730px] max-sm:static max-sm:w-[90%] max-sm:mt-5 max-sm:text-center">
                    <h1 className="text-white font-bold text-3xl font-semibold w-[400px] max-sm:w-full max-sm:text-2xl">Are you Ready to Start your online Order?</h1>
                    <h2 className="text-white font-medium text-1xl w-[600px] mt-7 max-sm:w-full max-sm:text-sm max-sm:leading-5">
                        Bndulgence diminution so discovered mr apartments. 
                        Are off under folly death wrote cause her way spite. 
                        Plan upon yet way get cold spot its week. Almost do am or limits hearts.
                         Resolve parties but why she shewing. She sang know now</h2>
                </div>
                <div className="absolute top-[400px] left-[730px] flex flex-row gap-4 max-sm:static max-sm:mt-4 max-sm:flex max-sm:flex-col max-sm:w-full max-sm:items-center">
                    <button className="w-[100px] h-[40px] bg-white text-black hover:bg-black hover:text-white border hover:border-white rounded rounded-2xl cursor-pointer max-sm:w-[70%] ">App Store</button>
                    <button className="w-[100px] h-[40px] bg-[#826A45] text-white hover:bg-white hover:text-black border hover:border-black rounded rounded-2xl cursor-pointer max-sm:w-[70%] ">Play Store</button>
                </div>
            </div>
        </>
    )
}