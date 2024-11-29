import Wordlwide from "./Worldwide";
import { motion } from 'framer-motion';


const IntelligentFeatures = () => {
    return (
        <>
            <section id="intelligent-features" className="text-center bg-[rgba(218,218,218,0.3)]">
                <div className="font-sui flex flex-col max-w-[78vw] px-[3vw] py-[8vh] w-full mx-auto relative gap-[6.5vh] sm:gap-[2vh]">
                    <motion.div
                        initial={{ opacity: 0, y: 200 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="flex flex-col md:flex-row items-center justify-between w-full mx-auto"
                    >
                        <div className="relative z-[1] max-w-[60vw] mx-auto flex flex-col items-center text-center">
                            <h2 className="text-[min(8.6vh,4.3vw)] leading-[1.11em] font-[500] tracking-[-0.03em] ">
                                Building a legacy
                            </h2>
                        </div>
                    </motion.div>
                    <Wordlwide/>
                </div>
            </section>
        </>
    );
};

export default IntelligentFeatures;