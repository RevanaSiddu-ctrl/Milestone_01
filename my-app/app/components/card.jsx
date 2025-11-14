import Image from "next/image";
import pi1 from "../images/pi1.jpg";
import blog2 from "../images/blog2.webp";

export  function CardA({image, rate, price, food, info}){

return(
    <div className="w-100 h-110 border border-gray-200 border-2  dark:dark:border-[#C6A664]/40 rounded-2xl ml-8 mt-10 flex flex-col relative justify-between">
        <img src={image} className="h-[59.2%] w-[100%] rounded-xl "></img>
        <div className="absolute bottom-[50%] left-0 translate-y-[50%] 
                       bg-white w-[50%] h-20 flex flex-col 
                      rounded-tr-2xl shadow-md dark:bg-[#1b1b1b]">
            <div className="text-black ml-7 mt-2 dark:text-white ">{rate}</div>
            <div className="text-black my-1 ml-7 dark:text-white ">{price}</div>
        </div>
        <div className="text-black text-2xl font-bold my-1 ml-7 mt-2 dark:text-white">{food}</div>
        <div className="text-black ml-7 dark:text-white">{info}</div>
        <button className="text-black font-medium border border-gray-300 dark: dark:border-[#C6A664]/40 dark:text-white rounded-2xl w-[60%] h-11 ml-20 mb-2 hover:bg-[#826A45] hover:text-white cursor-pointer" > 🛒 Add to Cart</button>
    </div>
);
}

export function CardB({mainImg, dishes}) {
  return (
    <div className="relative h-[350px] w-[900px] flex flex-row border  border-e-amber-300">
      <Image src={mainImg} alt="img" className="w-[40%] h-[100%] "  />
      <div className="w-[60%] bg-black h-[100%] flex flex-col justify-center items-center ">
        {dishes.map((dish, index) => (
          <div key={index} className="flex flex-row justify-between w-[90%] my-3">
            <Image src={dish.image} alt={dish.name} className="rounded-full h-[60px] w-[60px]" />
            <div className="flex flex-col ml-5">
              <div className="text-white text-2xl">{dish.name}</div>
              <div className="text-white text-base font-extralight">{dish.desc}</div>
            </div>
            <div className="flex-1 h-[1px] bg-white mx-6 mt-5"></div>
            <div className="text-white text-2xl">{dish.price}</div>
          </div>
        ))}
      </div>
    </div>
  );
}