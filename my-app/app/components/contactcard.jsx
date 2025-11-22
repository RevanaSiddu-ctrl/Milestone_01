import Image from "next/image";

export function ContactCard({image, disc, extra}){
    return(
        <>
        <div className="h-[200px] w-[400px] flex flex-col items-center bg-white border border-black rounded-xl dark:bg-[#1f1f1f] dark:border-[#C6A664]/60 max-sm:w-[90%] max-sm:h-auto max-sm:py-5">
            <Image src={image} alt="logo" className="h-[50px] w-[50px] mb-4"/>
            <h1 className="text-black text-2xl font-medium dark:text-white max-sm:text-xl">{disc}</h1>
            <h1 className="text-black text-2xl font-medium mt-2 dark:text-white max-sm:text-xl">{extra}</h1>
        </div>
        </>
    )
}

export function ContactCard1(){
    return(
        <>
        <div className="h-[500px] w-[700px] bg-white border flex flex-col justify-center items-center dark:bg-[#1f1f1f] dark:border-[#C6A664]/60 max-sm:w-[95%] max-sm:h-auto max-sm:py-5">
            <h1 className="text-[#826A45] text-2xl font-extrabold max-sm:text-xl">------Keep in touch-----</h1>
            <h1 className="text-black font-serif text-2xl font-extrabold dark:text-white max-sm:text-xl">Send Us a Message</h1>
            <textarea placeholder="  Name" className="bg-[#F3F3F3] h-[50px] w-[600px] my-4 max-sm:w-[90%]"/>
            <div className="flex flex-row my-4 justify-items-center pl-1 max-sm:flex-col max-sm:gap-3 max-sm:w-full max-sm:items-center">
                <textarea placeholder="  Email*" className="bg-[#F3F3F3] h-[50px] w-[250px] ml-4 max-sm:w-[90%] max-sm:ml-0"></textarea>
                <textarea placeholder="  Phone*" className="bg-[#F3F3F3] h-[50px] w-[250px] mx-4 max-sm:w-[90%] max-sm:mx-0"></textarea>
            </div>
            <textarea placeholder="Your Message*" className="bg-[#F3F3F3] h-[150px] w-[600px] p-4 resize-none max-sm:w-[90%]"></textarea>
            <button className="bg-[#826A45] h-[50px] w-[200px] text-white font-extrabold cursor-pointer my-4 max-sm:w-[60%]">Get in Touch 🕊️</button>
        </div>
        </>
    )
}
