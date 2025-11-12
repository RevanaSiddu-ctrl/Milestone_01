import Image from "next/image";
import spoon from "../images/spoon.png"

export default function BookTable(){
    return(
        <>
        <div className="relative h-[500px] bg-white w-[400px] border border-gray-300 ml-25 rounded-2xl flex flex-col justify-center items-center z-0">
            <Image src={spoon} className="rounded-[50%] h-[100px] w-[100px] absolute top-[00px] left-[0px] z-10 " alt='image'></Image>
            <h1 className="text-black text-2xl font-bold">Book a table</h1>
            <input className="border border-black h-[50px] w-[200px] pl-[5px] my-[6px]" placeholder="Phone"></input>
            <select className="border border-black h-[50px] w-[200px] pl-[5px] my-[6px]">
                <option className="bg-white">1 Person</option>
                <option className="bg-white">2 Person</option>
                <option className="bg-white">3 Person</option>
                <option className="bg-white">4 Person</option>
                <option className="bg-white">5 Person</option>
            </select>
            <input className="border border-black h-[50px] w-[200px] pl-[5px] my-[10px]" type="date"></input>
            <input className="border border-black h-[50px] w-[200px] pl-[5px] my-[10px]" placeholder="Time(X:XX)"></input>
            <button className="h-[50px] w-[130px] bg-[#826A45] hover:text-white hover:bg-black mt-10 rounded rounded-2xl text-white text-extrabold"  >Book A Table</button>
        </div>
        </>
    )
}