import { motion } from 'framer-motion';

const Autonomous = () => {
    return (
        <>
        <motion.div
                initial={{ opacity: 0, y: 200 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col md:flex-row items-center justify-between w-full mx-auto"
        >
            <div className="font-sui z-1 relative max-w-[57vw] ml-auto mr-auto gap-y-[1vh] flex flex-col items-center justify-center content-center">
                <h2 className="text-[min(8vh,4vw)] leading-[1.11em] tracking-[0.01em] font-[500] bg-gradient-to-r from-[#66d4d4] to-[#0c6170] bg-clip-text text-transparent">5 metres. 250 kWh. Autonomous.</h2>
                <p className="text-[min(2.6vh,1.3vw)] leading-[1.4em] tracking-[-0.01em] font-[500]">
                    Life-sized robots, managed remotely or autonomously, built on a 5-meter EV platform with over 250 kWh of power. Equipped with cutting-edge offense and defense systems to deliver unmatched combat performance.
                </p>
            </div>
        </motion.div>
        <div className="flex items-center justify-center h-[100%] relative mt-[2vh]">
                <video 
                    src="homePage/brc_videos/Clip3_BRC.mp4" 
                    autoPlay muted loop
                    className="absolute top-0 object-cover rounded-lg transition-all duration-500"
                />
        </div>
        </>
    )
}

export default Autonomous