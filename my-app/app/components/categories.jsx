import Image from "next/image";
export default function PopularCaterory({image, type, name}){

    return(
        <>
            <div className="relative">
                <Image src={image} alt="image" className="h-[280px] w-[260px] rounded rounded-2xl"></Image>
                <div className="absolute top-[180px] left-[10px] flex flex-col text-white">
                    <h3 className="text-amber-300">{type}</h3>
                    <h1>{name}</h1>
                </div>

            </div>
        </>
    )

}