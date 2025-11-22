import Image from "next/image";
export default function MasterChef({image, name, specality}){
    return(
        <>
        <div className="flex flex-col items-center mt-[15px]">
    
    <div className="relative h-[340px] w-[340px] rounded-full border border-2 border-black max-sm:h-[250px] max-sm:w-[250px] flex justify-center items-center">

        <Image src={image} alt="image"className="h-full w-full rounded-full object-cover object-center"/>
    </div>

    <div className="bg-[#826A45] h-[100px] w-[300px] flex flex-col justify-center items-center mt-3 max-sm:w-full max-sm:h-auto max-sm:py-3">

        <div className="text-2xl font-bold text-white max-sm:text-xl">{name}</div>
        <div className="text-2xl font-normal text-white max-sm:text-lg">{specality}</div>

    </div>

</div>

        </>
    )
}