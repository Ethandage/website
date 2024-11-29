import { motion } from 'framer-motion';
import { SetStateAction, useState } from 'react';

const Worldwide = () => {
    const [activeTab, setActiveTab] = useState("Team Franchise");
    const [activeTab2, setActiveTab2] = useState("Media");
    const [activeTab3, setActiveTab3] = useState("Environmental Responsibility");

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

    const handleTabClick2 = (tab: SetStateAction<string>) => {
        if (tab !== activeTab2) {
            setIsTransitioning(true);
            setTimeout(() => {
                setActiveTab2(tab);
                setIsTransitioning(false);
            }, 200);
        }
    };

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
                className="flex flex-col md:flex-row items-center justify-between w-full mx-auto"
            >
                <div className="relative z-[1] mx-auto flex flex-col items-center justify-center gap-[0.8vh] mt-[6vh] text-center md:mr-auto">
                    <h2 className={`text-[min(5vh,2.5vw)] leading-[1.1667em] font-[500] tracking-[-0.03em]`}>
                        Crafted by innovators & visionaries
                    </h2>
                    
                    <p className={`text-[min(2.6vh,1.3vw)] leading-[1.33em] text-black opacity-65 font-[500] mx-auto max-w-[62vw]`}>
                        Behind each team is a powerhouse-backed by global corporates, HNIs, and celebrities. These teams aren’t just competing; they’re building a legacy. Engineers, researchers, and designers from around the world unite to push innovation, creating machines that shape the future of robotics. This is more than a battle—it’s the start of something legendary.
                    </p>
                </div>
            </motion.div>

            <span className="block mt-[3vh]"></span>

            <motion.div
                initial={{ opacity: 0, y: 200 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className=""
            >
                <div className="mb-[2.5vh]">
                    {activeTab === "Team Franchise" && (
                        <div className={`transition-opacity duration-300 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
                            <div className="bg-cover overflow-hidden">
                                <video
                                    id="video1"
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                    src="homePage/brc_videos/clip5_franchise.mp4"
                                    className="aspect-[2/1] w-full max-w-full h-auto rounded-[1rem] object-cover"
                                />
                            </div>
                        </div>                
                    )}
                    {activeTab === "Team Builders" && (
                        <div className={`transition-opacity duration-300 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
                            <div className="bg-cover overflow-hidden">
                                <video
                                    id="video2"
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                    src="homePage/brc_videos/clips6.mp4"
                                    className="aspect-[2/1] w-full max-w-full h-auto rounded-[1rem] object-cover"
                                />
                            </div>
                        </div>
                    )}
                </div>

                <div className="flex flex-col items-center mb-[2.5vh]">
                    <div className="flex items-center justify-center gap-[1.9vw] text-[min(2vh,0.95vw)]">
                        <a
                            onClick={() => handleTabClick("Team Franchise")}
                            className={`text-center border-b-2 py-3 ${
                                activeTab === "Team Franchise" ? "border-black text-black opacity-100" : "border-transparent opacity-65"
                            } hover:opacity-100 cursor-pointer`}
                        >
                            Team Franchise
                        </a>
                        <a
                            onClick={() => handleTabClick("Team Builders")}
                            className={`text-center border-b-2 py-3 ${
                                activeTab === "Team Builders" ? "border-black text-black opacity-100" : "border-transparent opacity-65"
                            } hover:opacity-100 cursor-pointer`}
                        >
                            Team Builders
                        </a>
                    </div>
                    <div className="w-[17.8vw] h-[1px] bg-gray-300 "></div>
                </div>

                <div className={`text-black text-[min(2vh,0.96vw)] text-opacity-85 mx-auto text-center transition-opacity duration-200 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
                    {activeTab === "Team Franchise" && (
                        <div>
                            <p>Franchises are backed by global powerhouses, bringing together talent, vision, and innovation to create a lasting legacy.<br/></p>
                        </div>
                    )}
                    {activeTab === "Team Builders" && (
                        <div>
                            <p>Engineers, researchers, and designers from around the world unite to construct robots that redefine competition and technology.<br/></p>
                        </div>
                    )}
                </div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 200 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className=""
            >
                <div className="relative z-[1] mx-auto flex flex-col items-center justify-center gap-[0.8vh] mt-[6vh] text-center md:mr-auto">
                    <h2 className={`text-[min(5vh,2.5vw)] leading-[1.1667em] font-[500] tracking-[-0.03em]`}>
                        Global Alliances
                    </h2>
                    
                    <p className={`text-[min(2.6vh,1.3vw)] leading-[1.33em] text-black opacity-65 font-[500] mx-auto max-w-[58vw]`}>
                    An unprecedented spectacle is being crafted with global leaders: media giants, 5G innovators, top universities, and leading sponsors. 
                    </p>
                </div>
                <span className="block mt-[2vh]"></span>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 200 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className=""
            >    
                <div className="">
                    {activeTab2 === "Media" && (
                        <div className={`transition-opacity duration-300 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
                            <div className="bg-cover overflow-hidden">
                                <img
                                    src="homePage/brc_images/imageo.png"
                                    className="aspect-[2/1] w-full max-w-full h-auto rounded-[1rem] object-cover"
                                />
                            </div>
                        </div>                
                    )}
                    {activeTab2 === "Telecom 5G" && (
                        <div className={`transition-opacity duration-300 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
                            <div className="bg-cover overflow-hidden">
                                <img
                                    src="homePage/brc_images/imageo.png"
                                    className="aspect-[2/1] w-full max-w-full h-auto rounded-[1rem] object-cover"
                                />
                            </div>
                        </div>
                    )}
                    {activeTab2 === "University" && (
                        <div className={`transition-opacity duration-300 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
                            <div className="bg-cover overflow-hidden">
                                <img
                                    src="homePage/brc_images/imageo.png"
                                    className="aspect-[2/1] w-full max-w-full h-auto rounded-[1rem] object-cover"
                                />
                            </div>
                        </div>
                    )}
                    {activeTab2 === "Sponsors" && (
                        <div className={`transition-opacity duration-300 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
                            <div className="bg-cover overflow-hidden">
                                <img
                                    src="homePage/brc_images/imageo.png"
                                    className="aspect-[2/1] w-full max-w-full h-auto rounded-[1rem] object-cover"
                                />
                            </div>
                        </div>
                    )}
                    {activeTab2 === "Host Nation" && (
                        <div className={`transition-opacity duration-300 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
                            <div className="bg-cover overflow-hidden">
                                <img
                                    src="homePage/brc_images/imageo.png"
                                    className="aspect-[2/1] w-full max-w-full h-auto rounded-[1rem] object-cover"
                                />
                            </div>
                        </div>
                    )}
                </div>
            </motion.div>
            <div className="flex flex-col items-center">
                <div className="flex items-center justify-center gap-[1.9vw] text-[min(2vh,0.95vw)]">
                    <a
                        onClick={() => handleTabClick2("Media")}
                        className={`text-center border-b-2 py-3 ${
                            activeTab2 === "Media" ? "border-black text-black opacity-100" : "border-transparent opacity-65"
                        } hover:opacity-100 cursor-pointer`}
                    >
                        Media
                    </a>
                    <a
                        onClick={() => handleTabClick2("Telecom 5G")}
                        className={`text-center border-b-2 py-3 ${
                            activeTab2 === "Telecom 5G" ? "border-black text-black opacity-100" : "border-transparent opacity-65"
                        } hover:opacity-100 cursor-pointer`}
                    >
                        Telecom 5G
                    </a>
                    <a
                        onClick={() => handleTabClick2("University")}
                        className={`text-center border-b-2 py-3 ${
                            activeTab2 === "University" ? "border-black text-black opacity-100" : "border-transparent opacity-65"
                        } hover:opacity-100 cursor-pointer`}
                    >
                        University
                    </a>
                    <a
                        onClick={() => handleTabClick2("Host Nation")}
                        className={`text-center border-b-2 py-3 ${
                            activeTab2 === "Host Nation" ? "border-black text-black opacity-100" : "border-transparent opacity-65"
                        } hover:opacity-100 cursor-pointer`}
                    >
                        Host Nation
                    </a>
                    <a
                        onClick={() => handleTabClick2("Sponsors")}
                        className={`text-center border-b-2 py-3 ${
                            activeTab2 === "Sponsors" ? "border-black text-black opacity-100" : "border-transparent opacity-65"
                        } hover:opacity-100 cursor-pointer`}
                    >
                        Sponsors
                    </a>

                </div>
                <div className="w-[33.6vw] h-[1px] bg-gray-300 "></div>
            </div>

            <div className={`text-black text-[min(2vh,0.96vw)] text-opacity-85 mx-auto text-center transition-opacity duration-200 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
                {activeTab2 === "Media" && (
                    <div>
                        <p>World-leading media partners will broadcast every epic moment to a global audience, elevating the event to unprecedented visibility.
                        <br/></p>
                    </div>
                )}
                {activeTab2 === "Telecom 5G" && (
                    <div>
                        <p>
                        Cutting-edge 5G networks deliver lightning-fast, flawless connectivity, powering the high-stakes battles with unparalleled precision.
                        <br/></p>
                    </div>
                )}
                {activeTab2 === "University" && (
                    <div>
                        <p>
                        Prestigious universities from around the globe fuel groundbreaking research and innovation, shaping the future of robotics.
                        <br/></p>
                    </div>
                )}
                {activeTab2 === "Host Nation" && (
                    <div>
                        <p>
                        The host nation provides a world-class arena and infrastructure, setting the stage for an extraordinary international spectacle.
                        <br/></p>
                    </div>
                )}
                {activeTab2 === "Sponsors" && (
                    <div>
                        <p>
                        Major global sponsors elevate the competition with unparalleled support, driving innovation and excellence on a grand scale.
                        <br/></p>
                    </div>
                )}
            </div>

            <motion.div
                initial={{ opacity: 0, y: 200 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className=""
            > 
                <div className="relative z-[1] mx-auto flex flex-col items-center justify-center gap-[0.8vh] mt-[6vh] text-center md:mr-auto">
                    <h2 className={`text-[min(5vh,2.5vw)] leading-[1.1667em] font-[500] tracking-[-0.03em]`}>
                        ESG Commitment
                    </h2>
                    
                    <p className={`text-[min(2.6vh,1.3vw)] leading-[1.33em] text-black opacity-65 font-[500] mx-auto max-w-[58vw]`}>
                        BRC is dedicated to setting new standards in Environmental, Social, and Governance (ESG) practices. The event focuses on reducing environmental impact, fostering inclusivity, and upholding strong ethical standards. Join in making a meaningful difference and driving positive change.
                    </p>
                </div>
            </motion.div>

            <span className="block mt-[2vh]"></span>

            <motion.div
                initial={{ opacity: 0, y: 200 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className=""
            >
                <div className="">
                    {activeTab3 === "Environmental Responsibility" && (
                        <div className={`transition-opacity duration-300 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
                            <div className="bg-cover overflow-hidden">
                                <img
                                    src="homePage/brc_images/heart.png"
                                    className="aspect-[2/1] w-full max-w-full h-auto rounded-[1rem] object-cover"
                                />
                            </div>
                        </div>                
                    )}
                    {activeTab3 === "Social Impact" && (
                        <div className={`transition-opacity duration-300 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
                            <div className="bg-cover overflow-hidden">
                                <img
                                    src="homePage/brc_images/Social.jpg"
                                    className="aspect-[2/1] w-full max-w-full h-auto rounded-[1rem] object-cover"
                                />
                            </div>
                        </div>
                    )}
                    {activeTab3 === "Governance Excellence" && (
                        <div className={`transition-opacity duration-300 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
                            <div className="bg-cover overflow-hidden">
                                <img
                                    src="homePage/brc_images/Governance.jpg"
                                    className="aspect-[2/1] w-full max-w-full h-auto rounded-[1rem] object-cover"
                                />
                            </div>
                        </div>
                    )}
                </div>
            </motion.div>
            <div className="flex flex-col items-center">
                <div className="flex items-center justify-center gap-[1.9vw] text-[min(2vh,0.95vw)]">
                    <a
                        onClick={() => handleTabClick3("Environmental Responsibility")}
                        className={`text-center border-b-2 py-3 ${
                            activeTab3 === "Environmental Responsibility" ? "border-black text-black opacity-100" : "border-transparent opacity-65"
                        } hover:opacity-100 cursor-pointer`}
                    >
                        Environmental Responsibility
                    </a>
                    <a
                        onClick={() => handleTabClick3("Social Impact")}
                        className={`text-center border-b-2 py-3 ${
                            activeTab3 === "Social Impact" ? "border-black text-black opacity-100" : "border-transparent opacity-65"
                        } hover:opacity-100 cursor-pointer`}
                    >
                        Social Impact
                    </a>
                    <a
                        onClick={() => handleTabClick3("Governance Excellence")}
                        className={`text-center border-b-2 py-3 ${
                            activeTab3 === "Governance Excellence" ? "border-black text-black opacity-100" : "border-transparent opacity-65"
                        } hover:opacity-100 cursor-pointer`}
                    >
                        Governance Excellence
                    </a>
                </div>
                <div className="w-[38.7vw] h-[1px] bg-gray-300"></div>
            </div>

            <div className={`text-black text-[min(2vh,0.96vw)] text-opacity-85 mx-auto text-center transition-opacity duration-200 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
                {activeTab3 === "Environmental Responsibility" && (
                    <div>
                        <p>
                            Footprint minimized through sustainable practices and innovative solutions.
                        <br/></p>
                    </div>
                )}
                {activeTab3 === "Social Impact" && (
                    <div>
                        <p>
                            Inclusivity promoted and communities engaged to foster positive change.
                        <br/></p>
                    </div>
                )}
                {activeTab3 === "Governance Excellence" && (
                    <div>
                        <p>
                            Highest ethical standards upheld, with transparency and accountability ensured
                        <br/></p>
                    </div>
                )}
            </div>
        </>
    );
};

export default Worldwide;
