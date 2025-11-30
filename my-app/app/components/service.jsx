import Image from "next/image"

export default function Service({image, about, more}){
    return(
        <>
            <div className="h-[310px] w-[320px] bg-white-200 pt-10 rounded rounded-2xl border border-l-0 border-r-0.5 border-b-0 border-t-0 border-gray-600 flex flex-col ">
                <Image src={image} className="w-[100px] h-[100px] mb-10 ml-[30px]" alt="icon"></Image>
                <h1 className="text-black font-serif text-2xl font-bold  ml-[30px] dark:text-white">{about}</h1>
                <h4 className=" ml-[30px]">{more}</h4>
            </div>
        </>
    )
}