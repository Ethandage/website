import { useEffect, useRef, useState } from "react";
import { motion } from 'framer-motion';


const CuttingEdge = () => {

    const [scrollProgress, setScrollProgress] = useState(0);
    const videoRef = useRef<HTMLVideoElement | null>(null);
    

    useEffect(() => {
        const handleScroll = () => {
            if (videoRef.current) {
                const rect = videoRef.current.getBoundingClientRect();
                const windowHeight = window.innerHeight;
        
                const start = windowHeight * 0.80;
                const end = rect.height + windowHeight;
                const progress = Math.min(1, Math.max(0, (start - rect.top - 10) / (end - start - 10))) - 0.8;
                setScrollProgress(progress);
            }
        };
        
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);


    return (
        <>
            <div id="cuttingEdgeTiltle" className="flex items-center justify-center h-screen relative">
                <img 
                    src="homePage/brc_images/image66.png" 
                    loading="lazy" 
                    alt="" 
                    className="w-full h-full absolute top-0 left-0 object-cover"
                />
                <div className="flex flex-col absolute inset-0 items-center justify-center">
                    <h1 className="font-sui text-[min(8vh,4vw)] font-[500] text-center text-white leading-tight">
                        Cutting edge <br /> Revolution
                    </h1>
                </div>
            </div>

            <motion.div
                initial={{ opacity: 0, y: 200 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col md:flex-row items-center justify-between w-full mx-auto"
            >
                <div id="cuttingEdgeContent1" className="font-sui relative z-[1] mx-auto flex flex-col items-center justify-center gap-[4vh] mt-[5vh] text-center md:mr-auto"
                    style={{ opacity: 1 - scrollProgress * 1.2 }}
                >
                    <h2 className="text-[min(5.2vh,2.6vw)] leading-[1.1667em] font-[500] tracking-[-0.03em]">
                        Ultimate robot combat
                    </h2>
                    <p className="text-[min(2.4vh,1.2vw)] leading-[1.33em] text-black opacity-65 font-[600] mx-auto max-w-[55vw]">
                        The most advanced robots designed for high-stakes battles. Their innovation will redefine competitive robotics, pushing boundaries and setting new standards on the battlefield.
                    </p>
                </div>
            </motion.div>
            <div id="cuttingEdgeContentVid" className="flex items-center justify-center h-screen relative mt-[10vh]">
                <video 
                    ref={videoRef}
                    src="homePage/brc_videos/clip3.mp4" 
                    autoPlay muted loop
                    className="absolute top-0 object-cover rounded-lg transition-all duration-500"
                    style={{
                        width: `${75 + (scrollProgress + 0.5) * 100}%`,
                        height: `${50 + ((scrollProgress + 1) * 40)}%`,
                        opacity: 1,
                        borderRadius: 1
                    }}
                />
            </div>
            <div id='cuttingEdgeContent2'></div>
            <motion.div
                initial={{ opacity: 0, y: 200 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col md:flex-row items-center justify-between w-full mx-auto"
                 id="cuttingEdgeContent2"
            >
                <div className="font-sui text-left relative z-[1] mx-auto flex flex-col gap-[1vh] mt-[10vh] md:mr-auto ml-[14vw]">
                    <h2 className="text-[min(5.2vh,2.6vw)] leading-[1.1667em] font-[500] tracking-[-0.03em]">Harness next gen energy</h2>
                    <p className="text-[min(2.6vh,1.3vw)] leading-[1.33em] text-black opacity-65 font-[500] max-w-[50vw]">
                        Advanced, scalable designs with flexible integration, allowing for high customization and exceptional performance.
                    </p>
                    <span className="block" ></span>
                </div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 200 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col md:flex-row items-center justify-between w-full mx-auto"
            >
                <div className="grid gap-[2vw] grid-cols-[18vw_1fr] ml-[14vw] mt-[5vh]">
                    <div className="gap-y-[5vh] flex flex-col">
                        <div className="font-sui relative z-10 flex flex-col items-stretch justify-center gap-0 text-left">
                            <h2 className="text-[min(8vh,4vw)] font-[500] text-highlighted w-full bg-gradient-to-r from-[#66d4d4] to-[#0c6170] bg-clip-text text-transparent leading-tight">
                                5x2 metre
                            </h2>
                            <p className="text-[min(2.6vh,1.3vw)] font-medium w-full opacity-65">standard EV platform for all teams<br/><br/></p>
                        </div>
                        <div className="font-sui relative z-10 flex flex-col items-stretch justify-center text-left mt-[2vh]">
                            <h2 className="text-[min(8vh,4vw)] font-[500] text-highlighted w-full bg-gradient-to-r from-[#66d4d4] to-[#0c6170] bg-clip-text text-transparent leading-tight">
                                250 kWh
                            </h2>
                            <p className="text-[min(2.6vh,1.3vw)] font-medium opacity-65">battery capacity</p>
                        </div>
                    </div>
                    <div>
                        <img 
                            src="homePage/brc_images/doubletank.png" 
                            alt="" 
                            className="" 
                            sizes=""
                            loading="lazy"
                        />
                    </div>
                </div>
            </motion.div>
            <span className="block"></span>
            <div id="EnergyManagement"></div>
            <motion.div
                initial={{ opacity: 0, y: 200 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col md:flex-row items-center justify-between w-full mx-auto"
            >
                <div className="font-sui text-left relative z-[1] mx-auto flex flex-col gap-[1vh] mt-[5vh] md:mr-auto ml-[14vw] ">
                    <h2 className="text-[min(5.2vh,2.6vw)] leading-[1.1667em] font-[500] tracking-[-0.03em]">Energy management: Powering victory</h2>
                    <p className="text-[min(2.6vh,1.3vw)] leading-[1.33em] text-black opacity-65 font-[500] max-w-[58vw]">
                        With 250 kWh of energy, every team must strategically manage their resources for maximum efficiency. How this power is controlled will define the robot’s performance and endurance throughout the battle. It’s all about balancing offense, defense, and survival-lasting until the final moment.
                    </p>
                    <span className="block" ></span>
                </div>
            </motion.div>
            <div className="flex items-center justify-center relative">
                <img 
                    src="homePage/brc_images/image70.png"
                    className="w-[42%]" 
                />
            </div>
            
        </>
    );
};

export default CuttingEdge;
