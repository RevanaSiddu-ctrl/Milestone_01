import Image from "next/image";


export default function Blog({image, date, info, more}){
    return(
        <>
        <div className="relative">
            <Image src={image} className="h-[500px] w-[600px]" alt="image"></Image>
            <div className="h-[70px] w-[60px] bg-[#826A45]  top-[410px] left-[490px] text-white font-extrabold text-2xl absolute z-20 text-center ">{date}</div>
            <div className="h-[200px] w-[490px] bg-amber-100 flex flex-col  justify-center items-center absolute top-[440px] left-[95px]">
                <div className="text-2xl text-gray font-normal">{info}</div>
                <div className="text-2xl text-black font-semibold font-serif text-center">{more}</div>
                <button className="text-[#826A45]">Read more</button>
            </div>
        </div>
        </>
    )
}