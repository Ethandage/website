import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Winnings = () => {

    const navigate = useNavigate();

    const handleButtonJoinClick = () => {
        navigate('/join');
    };

    return (
        <div id="winnings" className="font-sui flex flex-col justify-center relative text-left bg-black text-white">
            <div className="flex justify-between items-center max-w-[78vw] py-[10vh] px-[3vw] w-full mx-auto relative">
                <motion.div
                    initial={{ opacity: 0, y: 200 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className=""
                > 
                    <div className="w-full p-5 transition-opacity duration-500">
                        <div className="flex flex-col justify-center items-stretch relative w-[130%]">
                            <h1 className="text-[min(7vh,3.5vw)] leading-[1.11em] tracking-[0.01em] font-[500] text-left">
                                $9 Mn in winnings
                            </h1>
                        </div>
                        <span className="block my-[1vw] "></span>
                        <div role="list" className="text-[min(2.4vh,1.2vw)] list-disc mt-4 w-[130%]">
                            <h1 className="w-full leading-[2.8vh]">
                                <br />Step into a new era of innovation & competition, like
                                <br />never before!<br />Experience the thrill of live, high-energy battles
                                <br />where technology and strategy collide.<br />Witness the ultimate showdown!
                                <br /><br/>
                                <b>
                                    <a onClick={handleButtonJoinClick} className="no-underline cursor-pointer text-[min(2.8vh,1.4vw)] text-[#578EE0] py-2 rounded-md font-[500]">
                                        Sign Up Now
                                    </a>
                                </b>
                            </h1>
                        </div>
                        <span className="block"></span>
                    </div>
                </motion.div>
                <div className="w-[40%] float-right">
                    <img src="homePage/brc_images/image79.png" alt="Competition Image" className="w-full h-auto" />
                </div>
            </div>
        </div>
    );
}

export default Winnings;
