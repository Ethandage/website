import { motion } from 'framer-motion';

const RealityText = () =>
{
    return (
        <div>
            <motion.div
                initial={{ opacity: 0, y: 200 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col md:flex-row items-center justify-between w-full mx-auto"
            >
                <div className="font-sui z-1 relative max-w-[60vw] ml-auto mr-auto gap-y-[1.5vh] flex flex-col items-center justify-center content-center">
                    <h2 className="text-[min(8vh,4vw)] leading-[1.11em] tracking-[0.01em] font-[500]">This is reality</h2>
                    <p className="text-[min(2.6vh,1.28vw)] leading-[1.4em] tracking-[-0.01em] font-[500] text-[#686868]">
                        Experience Reality Like Never Before.<br/>
                        This is not VR or a video game; it’s a real-world Battle Royale. Advanced robots clash in intense, physical showdowns where only one will emerge victorious. Dive into the ultimate test of technology and skill.
                        <br/><br/>
                    </p>
                </div>
            </motion.div>
        </div>
    );
}

export default RealityText;