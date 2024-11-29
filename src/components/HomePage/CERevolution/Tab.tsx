import { motion } from "framer-motion";
import { SetStateAction, useState } from "react";

const Tab = () => {
    const [activeTab, setActiveTab] = useState("AI");
    const [isTransitioning, setIsTransitioning] = useState(false);
    
    const handleTabClick = (tab: SetStateAction<string>) => {
        if (tab !== activeTab) {
            setIsTransitioning(true);
            setTimeout(() => {
                setActiveTab(tab);
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
                className="flex flex-col md:flex-row items-center justify-between w-full mx-auto"
        >
            <div className="relative z-[1] mx-auto flex flex-col items-center justify-center mt-0 mb-[5vh] text-center md:mr-auto">
                    <h2 className={`text-[min(5vh,2.5vw)] leading-[1.1667em] font-[500] tracking-[-0.03em]`}>
                        Simply revolutionising
                    </h2>
            </div>
        </motion.div>
        <motion.div
                initial={{ opacity: 0, y: 200 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className=""
        >
            <div className="mb-[2vh]">
                {activeTab === "AI" && (
                    <div className={`transition-opacity duration-300 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
                        <div className="bg-cover overflow-hidden">
                            <img
                                src="homePage/brc_images/AI.jpg"
                                className="aspect-[2/1] w-full max-w-full h-auto rounded-[1rem] object-cover"
                            />
                        </div>
                    </div>                
                )}
                {activeTab === "Cybersecurity" && (
                    <div className={`transition-opacity duration-300 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
                        <div className="bg-cover overflow-hidden">
                            <img
                                src="homePage/brc_images/cyber-security.png"
                                className="aspect-[2/1] w-full max-w-full h-auto rounded-[1rem] object-cover"
                            />
                        </div>
                    </div>
                )}
                {activeTab === "Robotics" && (
                    <div className={`transition-opacity duration-300 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
                        <div className="bg-cover overflow-hidden">
                            <video
                                autoPlay
                                loop
                                muted
                                playsInline
                                src="homePage/brc_videos/clip4.mp4"
                                className="aspect-[2/1] w-full max-w-full h-auto rounded-[1rem] object-cover"
                            />
                        </div>
                    </div>
                )}
                {activeTab === "EV Tech" && (
                    <div className={`transition-opacity duration-300 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
                        <div className="bg-cover overflow-hidden">
                            <img
                                src="homePage/brc_images/EV.jpg"
                                className="aspect-[2/1] w-full max-w-full h-auto rounded-[1rem] object-cover"
                            />
                        </div>
                    </div>
                )}
                {activeTab === "Telecommunications" && (
                    <div className={`transition-opacity duration-300 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
                        <div className="bg-cover overflow-hidden">
                            <img
                                src="homePage/brc_images/Telecomm.jpg"
                                className="aspect-[2/1] w-full max-w-full h-auto rounded-[1rem] object-cover"
                            />
                        </div>
                    </div>
                )}
            </div>

            <div className="flex flex-col items-center mb-[2vh]">
                <div className="flex items-center justify-center gap-[2vw] text-[min(2vh,0.96vw)]">
                    <a
                        onClick={() => handleTabClick("AI")}
                        className={`text-center border-b-2 py-3 ${
                            activeTab === "AI" ? "border-black text-black opacity-100" : "border-transparent  opacity-65"
                        } hover:opacity-100 cursor-pointer`}
                    >
                        AI
                    </a>
                    <a
                        onClick={() => handleTabClick("Cybersecurity")}
                        className={`text-center border-b-2 py-3  ${
                            activeTab === "Cybersecurity" ? "border-black text-black opacity-100" : "border-transparent opacity-65"
                        } hover:opacity-100 cursor-pointer`}
                    >
                        Cybersecurity
                    </a>
                    <a
                        onClick={() => handleTabClick("Robotics")}
                        className={`text-center border-b-2 py-3 ${
                            activeTab === "Robotics" ? "border-black text-black opacity-100" : "border-transparent opacity-65"
                        } hover:opacity-100 cursor-pointer`}
                    >
                        Robotics
                    </a>
                    <a
                        onClick={() => handleTabClick("EV Tech")}
                        className={`text-center border-b-2 py-3 ${
                            activeTab === "EV Tech" ? "border-black text-black opacity-100" : "border-transparent opacity-65"
                        } hover:opacity-100 cursor-pointer`}
                    >
                        EV Tech
                    </a>
                    <a
                        onClick={() => handleTabClick("Telecommunications")}
                        className={`text-center border-b-2 py-3 ${
                            activeTab === "Telecommunications" ? "border-black text-black opacity-100" : "border-transparent opacity-65"
                        } hover:opacity-100 cursor-pointer`}
                    >
                        Telecommunications
                    </a>
                </div>
                <div className="w-[36.7vw] h-[1px] bg-gray-300 "></div>
            </div>

            <div className={`text-black text-[min(2vh,0.96vw)] text-opacity-85 max-w-[50vw] mx-auto text-center transition-opacity duration-200 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
                {activeTab === "AI" && (
                    <div>
                        <p>Real-time strategy and autonomous control, revolutionizing robot performance.<br/></p>
                    </div>
                )}
                {activeTab === "Cybersecurity" && (
                    <div>
                        <p>Robust measures for safeguarding data and ensuring operational integrity.<br/></p>
                    </div>
                )}
                {activeTab === "Robotics" && (
                    <div>
                        <p>High-performance machines engineered for precise, dynamic combat scenarios.<br/></p>
                    </div>
                )}
                {activeTab === "EV Tech" && (
                    <div>
                        <p>Modular, high-capacity energy systems powering advanced robotic platforms.<br/></p>
                    </div>
                )}
                {activeTab === "Telecommunications" && (
                    <div>
                        <p>Seamless, high-speed communication systems for real-time coordination and control.<br/></p>
                    </div>
                )}
            </div>
        </motion.div>
        </>
    )
}

export default Tab;