import { SetStateAction, useState } from "react";
import { motion } from 'framer-motion';

const GlobalAccess = () => {
    const [activeTab3, setActiveTab3] = useState("Globally Livestreamed");

    const [isTransitioning, setIsTransitioning] = useState(false);
    
    const handleTabClick3 = (tab: SetStateAction<string>) => {
        if (tab !== activeTab3) {
            setIsTransitioning(true);
            setTimeout(() => {
                setActiveTab3(tab);
                setIsTransitioning(false);
            }, 200);
        }
    };
    
    return (
        <>
            <motion.div
                initial={{ opacity: 0, y: 200 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className=""
            >
                <div className="relative z-[1] mx-auto flex flex-col items-center justify-center mt-[10vh] text-center md:mr-auto mb-[2.5vh]">
                    <h2 className={`text-[min(5vh,2.5vw)] leading-[1.1667em] font-[500] tracking-[-0.03em]`}>
                        Global Access to the action
                    </h2>
                </div>
            

                <div className="mb-[2.5vh]">
                    {activeTab3 === "Globally Livestreamed" && (
                        <div className={`transition-opacity duration-300 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
                            <div className="bg-cover overflow-hidden">
                                <img
                                    src="homePage/brc_images/1. Live Screening.png"
                                    className="aspect-[2/1] w-full max-w-full h-auto rounded-[1rem] object-cover"
                                />
                            </div>
                        </div>                
                    )}
                    {activeTab3 === "Immersive Venues" && (
                        <div className={`transition-opacity duration-300 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
                            <div className="bg-cover overflow-hidden">
                                <img
                                    src="homePage/brc_images/2. Immersive.jpg"
                                    className="aspect-[2/1] w-full max-w-full h-auto rounded-[1rem] object-cover"
                                />
                            </div>
                        </div>
                    )}
                    {activeTab3 === "Community" && (
                        <div className={`transition-opacity duration-300 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
                            <div className="bg-cover overflow-hidden">
                                <img
                                    src="homePage/brc_images/3. Community.png"
                                    className="aspect-[2/1] w-full max-w-full h-auto rounded-[1rem] object-cover"
                                />
                            </div>
                        </div>
                    )}
                </div>

                <div className="flex flex-col items-center mb-[2.5vh]">
                    <div className="flex items-center justify-center gap-[1.9vw] text-[min(2vh,0.95vw)]">
                        <a
                            onClick={() => handleTabClick3("Globally Livestreamed")}
                            className={`text-center border-b-2 py-3 ${
                                activeTab3 === "Globally Livestreamed" ? "border-white text-white opacity-100" : "border-transparent opacity-65"
                            } hover:opacity-100 cursor-pointer`}
                        >
                            Globally Livestreamed
                        </a>
                        <a
                            onClick={() => handleTabClick3("Immersive Venues")}
                            className={`text-center border-b-2 py-3 ${
                                activeTab3 === "Immersive Venues" ? "border-white text-white opacity-100" : "border-transparent opacity-65"
                            } hover:opacity-100 cursor-pointer`}
                        >
                            Immersive Venues
                        </a>
                        <a
                            onClick={() => handleTabClick3("Community")}
                            className={`text-center border-b-2 py-3 ${
                                activeTab3 === "Community" ? "border-white text-white opacity-100" : "border-transparent opacity-65"
                            } hover:opacity-100 cursor-pointer`}
                        >
                            Community
                        </a>
                    </div>
                    <div className="w-[31.2vw] h-[1px] bg-gray-300 "></div>
                </div>

                <div className={`text-white text-[min(2vh,0.96vw)] text-opacity-85 max-w-[50vw] mx-auto text-center transition-opacity duration-200 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
                    {activeTab3 === "Globally Livestreamed" && (
                        <div>
                            <p>
                                Streamed live to millions across the world, bringing the battles to your screen.
                            <br/></p>
                        </div>
                    )}
                    {activeTab3 === "Immersive Venues" && (
                        <div>
                            <p>
                                Watch the excitement unfold at select venues with a fully immersive experience.
                            <br/></p>
                        </div>
                    )}
                    {activeTab3 === "Community" && (
                        <div>
                            <p>
                                Stay connected with live streaming and real-time updates, right in your hand.
                            <br/></p>
                        </div>
                    )}
                </div>
            </motion.div>
        </>
    )
}

export default GlobalAccess