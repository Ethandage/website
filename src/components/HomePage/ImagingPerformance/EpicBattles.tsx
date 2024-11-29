import { useEffect, useRef, useState } from "react";
import { motion } from 'framer-motion';

const EpicBattles = () => {

    const images = [
        "homePage/brc_images/pexels-abdul7amid-18508734.jpg",
        "homePage/brc_images/pexels-kseniya-buraya-124360874-10221976.jpg",
        "homePage/brc_images/pexels-marek-piwnicki-3907296-8193922.jpg",
        "homePage/brc_images/pexels-olgalioncat-7244979.jpg",
        "homePage/brc_images/pexels-shvets-2563583.jpg"
    ];

    const [currentIndex,setCurrentIndex] = useState(0);
    const widthImg = useRef(0);
    const gapImg = useRef(0);
    const [forceRerender, setForceRerender] = useState(0);
    const [selectedButton, setSelectedButton] = useState<number | null>(0);

    const handleNext = () => {
        const newIndex = (currentIndex + 1) % images.length
        setCurrentIndex(newIndex);
        setSelectedButton(newIndex);
    };

    const handlePrevious = () => {
        const newIndex = (currentIndex - 1 < 0 ? images.length - 1 : currentIndex - 1);
        setCurrentIndex(newIndex);
        setSelectedButton(newIndex);
    }

    const setSize = () =>
    {
        gapImg.current = window.innerWidth / 100;

        const elems = document.getElementsByClassName("image-carousel")as HTMLCollectionOf<HTMLElement>;
        for (const elemImg of elems)
        {
            const width = elemImg.getBoundingClientRect().width;
            widthImg.current = width;
        }
        setForceRerender((prev) => prev + 1)
    }

    useEffect(() =>
    {
        setSize();
        window.addEventListener("resize", setSize);

        return () => {
            window.removeEventListener("resize", setSize)
        }
    }, [])

    return (
        <>
            <motion.div
                initial={{ opacity: 0, y: 200 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col md:flex-row items-center justify-between w-full mx-auto"
            >
                <div className="relative z-[1] mx-auto flex flex-col items-center justify-center gap-[1vh] text-center md:mr-auto">
                    <h2 className={`text-[min(5.2vh,2.6vw)] leading-[1.1667em] font-[500] tracking-[-0.03em]`}>
                        8 Epic battles
                    </h2>
                    
                    <p className={`text-[min(2.8vh,1.4vw)] leading-[1.33em] text-white opacity-100 font-[500] mx-auto max-w-[47vw]`}>
                        8 exhilarating confrontations each season across terrains, set against the backdrop of a vast 9 sq km Playa. Each epic battle unfolds with intense action and high-stakes drama, delivering a season of unforgettable combat.
                    </p>
                </div>
            </motion.div>

            <div className="relative w-full z-10 bg-transparent">
                <div className="overflow-hidden">
                    <motion.div 
                    key={forceRerender}
                    className="flex justify-center items-center space-x-[1vw] w-full" 
                    animate={{ x: widthImg.current * (2 - currentIndex) + gapImg.current * (2 - currentIndex)}}
                    initial={{ x: widthImg.current * (2 - currentIndex) + gapImg.current * (2 - currentIndex)}}
                    transition={{ duration: 0.5, ease: "easeInOut" }}>
                        {images.map((src,ind) => {
                            const isActive = ind === currentIndex;
                            return (
                                <img
                                    key={`img-${ind}`}
                                    src={src}
                                    loading="lazy"
                                    alt={`Slide ${ind}`}
                                    className={`image-carousel aspect-[2/1] rounded-2xl object-cover min-w-[68%] h-auto ${isActive ? "opacity-100" : "opacity-50"}`}
                                />
                            );
                        })}
                    </motion.div>
                </div>

                <div className="mt-[max(19.5vw,22.5vh)] absolute top-1/2 -translate-y-1/2 right-[16%] flex-row flex gap-1">
                    <button
                        onClick={handlePrevious}
                        className="h-8 w-8 bg-transparent border border-white rounded-full flex items-center justify-center hover:bg-white/20 transition duration-200 ease-in-out"
                    >
                        <div className="font-thin text-sm text-gray-400">{"<"}</div>
                    </button>

                    <button
                        onClick={handleNext}
                        className="h-8 w-8 bg-transparent border border-white rounded-full flex items-center justify-center hover:bg-white/20 transition duration-200 ease-in-out"
                    >
                        <div className="font-thin text-sm text-gray-400">{">"}</div>
                    </button>
                </div>

                <div className="flex gap-2 items-center mt-[19.5vw] absolute top-1/2 -translate-y-1/2 left-[16%]">
                    {images.map((_, index) => (
                        <div
                            key={index}
                            className="cursor-pointer"
                            onClick={() => {
                                setCurrentIndex(index)
                                setSelectedButton(index);
                            }}
                        >
                            <button
                                className={`w-4 h-[0.12rem] rounded ${selectedButton === index ? 'bg-white' : 'bg-gray-500'}`}
                                onClick={(e) => e.preventDefault()}
                            ></button>
                        </div>
                    ))}
                </div>

            </div>
        </>
    )
}

export default EpicBattles