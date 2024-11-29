import { motion } from 'framer-motion';
import { Link } from 'react-scroll';

const NavBlock = () =>
{
    const getDuration = (distance: number) => 
    {
        const diffDistance = Math.abs(distance)  

        const minDistance = 4995;
        const maxDistance = 28537;

        const minDuration = 1.5;
        const maxDuration = 2.75;

        const slope = (maxDuration - minDuration) / (maxDistance - minDistance);

        let duration = minDuration + slope * (diffDistance - minDistance);

        const ret = Math.min(Math.max(duration, minDuration), maxDuration) * 1000;

        return ret;
    }

    return (
        <div>
            <motion.div
                initial={{ opacity: 0, y: 200 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col md:flex-row items-center justify-between w-full mx-auto"
            >
            <div className="grid grid-cols-3 grid-rows-[auto] mx-[8%] px-[2.5vw] gap-[1vw] text-center">
                <Link smooth={true} duration={getDuration} to='elite' className="cursor-pointer group z-0 text-center rounded-[1rem] min-h-[50vh] p-[4vh] relative overflow-hidden">
                    <img src="homePage/brc_images/epic_Show.png" loading="lazy" alt="" sizes="(max-width: 479px) 100vw, (max-width: 767px) 93vw, (max-width: 991px) 46vw, 33vw"
                    className="z-[-1] w-full h-full absolute top-0 bottom-0 left-0 right-0 object-cover max-w-full overflow-clip inline-block 
                    tranform scale-100 group-hover:scale-110 transition duration-300 ease-in-out"/>
                    <div className="text-[min(2.5vh,1.25vw)] font-sui leading-[2.25rem] tracking-[-0.02rem] font-[500]">
                        <h2 className="text-white">Epic Showdown:</h2>
                        <h2 className="text-white">9 Teams, 18 Robots</h2>
                    </div>
                    <img src="homePage/brc_images/icon-arrow-down.png" loading="lazy" alt="go to" className="w-[3vw] h-[3vw] absolute bottom-[3vh] right-[1.5vw]
                    group-hover:bottom-[1.2vh] transition-all duration-300 ease-in-out"/>
                </Link>
                <Link smooth={true} duration={getDuration} to='immersive' className="cursor-pointer group z-0 text-center rounded-[1rem] min-h-[50vh] p-[4vh] relative overflow-hidden mb-[-7.8vh]">
                    <img src="homePage/brc_images/dynamic.png" loading="lazy" alt="" sizes="(max-width: 479px) 100vw, (max-width: 767px) 95vw, (max-width: 991px) 47vw, 33vw"
                    className="z-[-1] w-full h-full absolute top-0 bottom-0 left-0 right-0 object-cover max-w-full overflow-clip inline-block
                    tranform scale-100 group-hover:scale-110 transition duration-300 ease-in-out"/>
                    <div className="text-[min(2.5vh,1.25vw)] font-sui leading-[2.25rem] tracking-[-0.02rem] font-[500]">
                        <h2 className="text-white">Immersive,</h2>
                        <h2 className="text-white">Dynamic Combat</h2>
                    </div>
                    <img src="homePage/brc_images/icon-arrow-down.png" loading="lazy" alt="go to" className="w-[3vw] h-[3vw] absolute bottom-[3vh] right-[1.5vw]
                    group-hover:bottom-[1.2vh] transition-all duration-300 ease-in-out"/>
                </Link>
                <Link smooth={true} duration={getDuration} to='cuttingEdgeTiltle' className="cursor-pointer group z-0 text-center rounded-[1rem] min-h-[50vh] p-[4vh] relative overflow-hidden">
                    <img src="homePage/brc_images/innovative.png" loading="lazy" alt="" sizes="(max-width: 479px) 100vw, (max-width: 767px) 95vw, (max-width: 991px) 47vw, 33vw"
                    className="z-[-1] w-full h-full absolute top-0 bottom-0 left-0 right-0 object-cover max-w-full overflow-clip inline-block
                    tranform scale-100 group-hover:scale-110 transition duration-300 ease-in-out"/>
                    <div className="text-[min(2.5vh,1.25vw)] font-sui leading-[2.25rem] tracking-[-0.02rem] font-[500]">
                        <h2 className="text-white">Innovative Tech-</h2>
                        <h2 className="text-white">Breakthroughs</h2>
                    </div>
                    <img src="homePage/brc_images/icon-arrow-down.png" loading="lazy" alt="go to" className="w-[3vw] h-[3vw] absolute bottom-[1.5vh] right-[1.5vw]
                    group-hover:bottom-[1.2vh] transition-all duration-300 ease-in-out"/>
                </Link>

                <Link smooth={true} duration={getDuration} to='cuttingEdgeContent2' className="cursor-pointer group z-0 text-center rounded-[1rem] min-h-[50vh] p-[4vh] relative overflow-hidden">
                    <img src="homePage/brc_images/lifeSized.png" loading="lazy" alt="" sizes="(max-width: 479px) 100vw, (max-width: 767px) 95vw, (max-width: 991px) 47vw, 33vw"
                    className="z-[-1] w-full h-full absolute top-0 bottom-0 left-0 right-0 object-cover max-w-full overflow-clip inline-block
                    tranform scale-100 group-hover:scale-110 transition duration-300 ease-in-out"/>
                    <div className="text-[min(2.5vh,1.25vw)] font-sui leading-[2.25rem] tracking-[-0.02rem] font-[500]">
                        <h2 className="text-white">Live-Sized Robots,</h2>
                        <h2 className="text-white">250 kWh Batteries</h2>
                    </div>
                    <img src="homePage/brc_images/icon-arrow-down.png" loading="lazy" alt="go to" className="w-[3vw] h-[3vw] absolute bottom-[1.5vh] right-[1.5vw]
                    group-hover:bottom-[1.2vh] transition-all duration-300 ease-in-out"/>
                </Link>
                <Link smooth={true} duration={getDuration} to='EnergyManagement' className="cursor-pointer group z-0 text-center rounded-[1rem] min-h-[50vh] p-[4vh] relative overflow-hidden mt-[7.5vh]">
                    <img src="homePage/brc_images/precision.png" loading="lazy" alt="" sizes="(max-width: 479px) 100vw, (max-width: 767px) 95vw, (max-width: 991px) 47vw, 33vw"
                    className="z-[-1] w-full h-full absolute top-0 bottom-0 left-0 right-0 object-cover max-w-full overflow-clip inline-block
                    tranform scale-100 group-hover:scale-110 transition duration-300 ease-in-out"/>
                    <div className="text-[min(2.5vh,1.25vw)] font-sui leading-[2.25rem] tracking-[-0.02rem] font-[500]">
                        <h2 className="text-white">Precision Energy</h2>
                        <h2 className="text-white">Management</h2>
                    </div>
                    <img src="homePage/brc_images/icon-arrow-down.png" loading="lazy" alt="go to" className="w-[3vw] h-[3vw] absolute bottom-[1.5vh] right-[1.5vw]
                    group-hover:bottom-[1.2vh] transition-all duration-300 ease-in-out"/>
                </Link>
                <Link smooth={true} duration={getDuration} to='intelligent-features' className="cursor-pointer group z-0 text-center rounded-[1rem] min-h-[50vh] p-[4vh] relative overflow-hidden">
                    <img src="homePage/brc_images/worldWide.png" loading="lazy" alt="" sizes="(max-width: 479px) 100vw, (max-width: 767px) 95vw, (max-width: 991px) 47vw, 33vw"
                    className="z-[-1] w-full h-full absolute top-0 bottom-0 left-0 right-0 object-cover max-w-full overflow-clip inline-block
                    tranform scale-100 group-hover:scale-110 transition duration-300 ease-in-out"/>
                    <div className="text-[min(2.5vh,1.25vw)] font-sui leading-[2.25rem] tracking-[-0.02rem] font-[500]">
                        <h2 className="text-white">Worldwide</h2>
                        <h2 className="text-white">Collaboration</h2>
                        <h2 className="text-white">& Impact</h2>
                    </div>
                    <img src="homePage/brc_images/icon-arrow-down.png" loading="lazy" alt="go to" className="w-[3vw] h-[3vw] absolute bottom-[1.5vh] right-[1.5vw]
                    group-hover:bottom-[1.2vh] transition-all duration-300 ease-in-out"/>
                </Link>
            </div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 200 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col md:flex-row items-center justify-between w-full mx-auto"
            >            
            <div className="max-w-[56vw] ml-auto mr-auto pt-[8vh] flex flex-col items-center justify-center">
                <p className="font-sui text-[min(2.56vh,1.28vw)] leading-[1.4em] tracking-[-0.01em] font-[500] text-[#686868]">
                    Experience the future of robotic combat where video games turn into reality. Life-sized autonomous robots, equipped with advanced weaponry and controlled by expert teams, transform the Playa into an epic battleground. Feel the intensity of a high-stakes showdown that blends technology and human skill.
                    <br/><br/>
                </p>
            </div>
            </motion.div>  
        </div>
    );
}

export default NavBlock;