import Image from "next/image"

export  function ContactCard({image, disc, extra}){
    return(
        <>
        <div className="h-[200px] w-[400px] flex flex-col  items-center bg-white border border-black rounded-xl">
        <Image src={image} alt="logo" className="h-[50px] w-[50px] mb-4"/>
       <h1 className="text-black text-2xl font-medium">{disc}</h1>
        <h1 className="text-black text-2xl font-medium mt-2">{extra}</h1>
      </div>

        </>
    )
};

export function ContactCard1(){
    return(
        <>
            <div className="h-[500px] w-[700px] bg-white-200 border bg-white flex flex-col justify-center items-center">
                <h1 className="text-[#826A45] text-2xl font-extrabold">------Keep in touch-----</h1>
                <h1 className="text-black font-serif text-2xl font-extrabold">Send Us a Message</h1>
                <textarea placeholder="  Name" className="placeholder-gray-900 text-1xl font-light  bg-[#F3F3F3] h-[50px] w-[600px] my-4"/>
                <div className="flex flex-row my-4 justify-items-center pl-1">
                    <textarea placeholder="  Email*" className="placeholder-gray-900 text-1xl font-light  bg-[#F3F3F3] h-[50px] w-[250px] ml-4"></textarea>
                    <textarea placeholder="  Phone*" className="placeholder-gray-900 text-1xl font-light  bg-[#F3F3F3] h-[50px] w-[250px] mx-4"></textarea>
                </div>
                <textarea placeholder="Your Message*" className="placeholder-gray-900 text-xl font-light bg-[#F3F3F3] h-[150px] w-[600px] p-4 resize-none"></textarea>
                <button className="bg-[#826A45] h-[50px] w-[200px] text-white font-extrabold cursor-pointer my-4">Get in Touch 🕊️</button>
            </div>
        </>
    )
}