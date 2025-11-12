import Image from "next/image";
export default function MasterChef({image, name, specality}){
    return(
        <>
        <div className="flex flex-col relative mt-[15px] border border-2 border-black h-[320px] w-[320px] rounded-[50%] justify-center items-center">
            
                
                    <Image src={image} alt="image" className="h-[300px] w-[300px] rounded-[50%]"></Image>
                
         
            <div className="absolute top-[250px] left-[px] bg-[#826A45] h-[100px] w-[300px] flex flex-col justify-center items-center">
                <div className="text-2xl font-bold text-white">{name}</div>
                <div className="text-2xl font-normal text-white">{specality}</div>
            </div>
        </div>
        </>
    )
}