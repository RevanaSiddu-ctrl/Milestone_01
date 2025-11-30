import Image from "next/image";


export default function Blog({image, date, info, more}){
    return(
        <>
        <div className="relative">
            <Image src={image} className="h-[500px] w-[600px] max-sm:h-[250px] max-sm:w-full max-sm:object-cover" alt="image"></Image>
            <div className="h-[70px] w-[60px] bg-[#826A45]  top-[410px] left-[490px] text-white font-extrabold text-2xl absolute z-20 text-center max-sm:top-[200px] max-sm:left-[10px] max-sm:h-[50px] max-sm:w-[45px] max-sm:text-lg  ">{date}</div>
            <div className="h-[200px] w-[490px] bg-amber-100 flex flex-col  justify-center items-center absolute top-[440px] left-[95px] dark:bg-[#1b1b1b] max-sm:static max-sm:w-full max-sm:h-auto max-sm:p-4 max-sm:mt-3 max-sm:bg-[#826A45]">
                <div className="text-2xl text-gray font-normal dark:text-white max-sm:text-lg max-sm:text-center max-sm:bg-[#826A45]" >{info}</div>
                <div className="text-2xl text-black font-semibold font-serif text-center dark:text-white  max-sm:text-xl max-sm:bg-[#826A45]">{more}</div>
                <button className="text-[#826A45] dark:text-white  max-sm:text-base max-sm:mt-2 max-sm:bg-[#826A45]">Read more</button>
            </div>
        </div>
        </>
    )
}