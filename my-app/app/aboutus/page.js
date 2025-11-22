import { HeroSection2 } from "../components/herosection";
import C1 from "../components/aboutus.jsx";
import Image from "next/image.js";
import abt1 from "../images/abt1.jpg";
import abt2 from "../images/abt2.jpg";
import fish from "../images/fish.png";
import MasterChef from "../components/materchef.jsx";
import { chefs } from "../data/chefs.js";
import VedioSection from "../components/vediosection.jsx";
import Footer from "../components/footer.jsx";
import bgspoons from "../images/bgspoons.webp";

export default function Aboutus(){
    return(
        <>
            <HeroSection2 location="AboutUs"/>
            <C1/>

            <div className="relative flex flex-row gap-3 dark:bg-[#1f1f1f] max-sm:flex-col max-sm:items-center max-sm:gap-5 max-sm:px-3">
                <Image src={abt1} alt="img" className="h-[400px] w-[400px] max-sm:w-full max-sm:h-auto"/>
                <Image src={abt2} alt="img" className="h-[400px] w-[400px] max-sm:w-full max-sm:h-auto"/>

                <div className="absolute w-[500px] h-[300px] py-5 bg-amber-50 flex flex-col gap-2 left-190 top-40 px-5 dark:bg-black border dark:border-[#C6A664] z-20 max-sm:static max-sm:w-[95%] max-sm:h-auto max-sm:mt-[-40px] max-sm:p-4">
                    <div className="text-[#826A45] text-1xl font-medium">ABOUT US-----</div>
                    <div className="text-black text-2xl font-extrabold w-[300px] dark:text-white max-sm:w-full max-sm:text-xl">We Invite You To Visit Our Restaurant</div>
                    <div className="text-gray text-1xl font-light w-[400px] dark:text-white max-sm:w-full max-sm:text-sm">A relaxing and pleasant atmosphere, good jazz, dinner, and cocktails. The Patio Time Bar opens in the center of Florence. The only bar inspired by the 1960s, it will give you a experience that you’ll have a hard time forgetting.</div>
                    <button className="h-[50px] w-[130px] bg-[#826A45] hover:text-white hover:bg-black mt-5 text-white text-extrabold max-sm:mt-3">Discover More</button>
                    <Image src={fish} alt="img" className="absolute h-[150px] w-[150px] bottom-[280px] left-[400px] max-sm:hidden"/>
                </div>
            </div>

            <div className="dark:bg-black relative">
                <div className="relative h-[600px] bg-[#EBE9EC] w-full pt-20 flex flex-col justify-center items-center z-10 overflow-visible dark:bg-[#1f1f1f] max-sm:h-auto max-sm:py-10">
                    <div className="z-10 flex flex-col items-center text-center max-sm:px-3">
                        <h1 className="text-[#8B7E74] tracking-widest text-sm mb-2">----- Master Chefs -----</h1>
                        <h1 className="text-black text-3xl font-bold font-serif dark:text-white max-sm:text-2xl">Meet Our Special Chefs</h1>

                        <div className="grid grid-cols-3 gap-10 justify-items-center mt-8 max-sm:grid-cols-1 max-sm:gap-6">
                            {chefs.map((chef) => (
                                <MasterChef
                                    key={chef.id}
                                    image={chef.image}
                                    name={chef.name}
                                    specality={chef.specality}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <div className="dark:bg-[#1f1f1f] pt-20 max-sm:pt-10">
                <VedioSection/>
            </div>

            <div className="relative w-full overflow-visible">
                <div className="relative z-10 dark:bg-[#1f1f1f] pt-30">
                    <Footer />
                    <Image src={bgspoons} alt="bgspoons" className="absolute top-[-80px] right-10 h-[300px] w-[500px] object-contain opacity-30 z-0 max-sm:hidden"/>
                </div>
            </div>
        </>
    )
}
