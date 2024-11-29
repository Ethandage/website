import { motion } from 'framer-motion';

const Elite = () =>
{
    return (
        <div>
            <motion.div
                initial={{ opacity: 0, y: 200 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col md:flex-row items-center justify-between w-full mx-auto"
            >
                <div className="font-sui z-1 mt-[4vh] relative max-w-[60vw] ml-auto mr-auto gap-y-[2vh] flex flex-col items-center justify-center content-center">
                    <h2 className="text-[min(8vh,4vw)] leading-[1.11em] tracking-[0.01em] font-[500]">Elite teams, Elite Robots</h2>
                    <p className="text-[min(2.6vh,1.3vw)] leading-[1.4em] tracking-[-0.01em] font-[500] text-[#686868]">
                        Nine premier teams, each with two high-tech robots, compete in fierce battles. These advanced machines are crafted by leading engineers, researchers, and scientists globally and backed by corporates / enthusiasts.
                    </p>
                </div>
            </motion.div>
            <div className="z-0 mt-[4vh] relative mb-[-2vh]">
                <img src="homePage/brc_images/thank.png" loading="lazy" alt="" className="block mx-auto w-[93%]"/>
            </div>
        </div>
    )
}

export default Elite;