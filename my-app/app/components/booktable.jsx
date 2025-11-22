import Image from "next/image";
import spoon from "../images/spoon.png";

export default function BookTable() {
  return (
    <>
      <div className="relative h-[500px] w-[400px] 
    max-sm:h-auto max-sm:py-5 max-sm:w-full
    border border-gray-300 dark:border-[#C6A664]/40  
    bg-white dark:bg-[#121212] rounded-2xl 
    flex flex-col justify-center items-center  
    z-0 transition-all duration-500 shadow-md dark:shadow-[#C6A664]/10">
        
        <Image 
          src={spoon} 
          alt="image" 
          className="rounded-full h-[100px] w-[100px] absolute top-[0px] left-[0px] opacity-90 dark:opacity-100" 
        />

        <h1 className="text-black dark:text-[#C6A664] text-2xl font-bold mb-2">Book a Table</h1>

        <input 
          className="border border-black dark:border-[#C6A664]/60 h-[50px] w-[200px] pl-[5px] my-[6px] bg-transparent dark:bg-[#1b1b1b]  text-black dark:text-[#EAEAEA]  placeholder:text-gray-500 dark:placeholder:text-[#C6A664]/60 focus:outline-none rounded-lg"
          placeholder="Phone"
        />

        <select 
          className="border border-black dark:border-[#C6A664]/60  h-[50px] w-[200px] pl-[5px] my-[6px]  bg-white dark:bg-[#1b1b1b]  text-black dark:text-[#EAEAEA] rounded-lg"
        >
          <option className="bg-white dark:bg-[#1b1b1b]">1 Person</option>
          <option className="bg-white dark:bg-[#1b1b1b]">2 Person</option>
          <option className="bg-white dark:bg-[#1b1b1b]">3 Person</option>
          <option className="bg-white dark:bg-[#1b1b1b]">4 Person</option>
          <option className="bg-white dark:bg-[#1b1b1b]">5 Person</option>
        </select>

        <input 
          type="date" 
          className="border border-black dark:border-[#C6A664]/60 
                     h-[50px] w-[200px] pl-[5px] my-[10px] 
                     bg-transparent dark:bg-[#1b1b1b] 
                     text-black dark:text-[#EAEAEA] rounded-lg focus:outline-none"
        />

        <input 
          placeholder="Time (X:XX)" 
          className="border border-black dark:border-[#C6A664]/60 h-[50px] w-[200px] pl-[5px] my-[10px]  bg-transparent dark:bg-[#1b1b1b] text-black dark:text-[#EAEAEA]  placeholder:text-gray-500 dark:placeholder:text-[#C6A664]/60 rounded-lg focus:outline-none"
        />

        <button 
          className="h-[50px] w-[130px] mt-10 rounded-2xl  bg-[#826A45] dark:bg-[#C6A664]  text-white dark:text-black font-semibold  hover:bg-black hover:text-white dark:hover:bg-[#EAEAEA] transition-all"
        >
          Book A Table
        </button>
      </div>
    </>
  );
}
