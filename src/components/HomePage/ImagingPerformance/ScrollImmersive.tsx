import { useEffect, useRef } from "react";
import { motion } from 'framer-motion';


type Sizes =
{
    width: number,
    height: number,
};

type AllSizes =
{
    Img: Sizes,
    TxtImg: Sizes,
};

const ScrollImmersive = () =>
{
    const refPos_1 = useRef<HTMLDivElement | null>(null);
    const refImg_1 = useRef<HTMLImageElement | null>(null);
    const refTxt_1 = useRef<HTMLImageElement | null>(null);
    const refTxtImg_1 = useRef<HTMLImageElement | null>(null);
    const refPos_2 = useRef<HTMLDivElement | null>(null);
    const refImg_2 = useRef<HTMLImageElement | null>(null);
    const refTxt_2 = useRef<HTMLImageElement | null>(null);
    const refTxtImg_2 = useRef<HTMLImageElement | null>(null);
    const refPos_3 = useRef<HTMLDivElement | null>(null);
    const refImg_3 = useRef<HTMLImageElement | null>(null);
    const refTxt_3 = useRef<HTMLImageElement | null>(null);
    const refTxtImg_3 = useRef<HTMLImageElement | null>(null);
    const refPos_4 = useRef<HTMLDivElement | null>(null);
    const refImg_4 = useRef<HTMLImageElement | null>(null);
    const refTxt_4 = useRef<HTMLImageElement | null>(null);
    const refTxtImg_4 = useRef<HTMLImageElement | null>(null);
    const refPos_5 = useRef<HTMLDivElement | null>(null);
    const refImg_5 = useRef<HTMLImageElement | null>(null);
    const refTxt_5 = useRef<HTMLImageElement | null>(null);
    const refTxtImg_5 = useRef<HTMLImageElement | null>(null);
    const saveHeightImg = useRef<number>(-1);
    const saveWidthImg = useRef<number>(-1);
    const saveHeightTxtImg = useRef<number>(-1);
    const saveWidthTxtImg = useRef<number>(-1);

    function setSizeImg () : AllSizes
    {
        let heightImg = saveHeightImg.current;
        let widthImg = saveWidthImg.current;
        let heightTxtImg = saveHeightTxtImg.current;
        let widthTxtImg = saveWidthTxtImg.current;

        //get size from the first available picture
        if (refImg_1.current && refImg_1.current.getBoundingClientRect().height != 0) 
        {
            saveHeightImg.current = refImg_1.current.getBoundingClientRect().height;
            heightImg = refImg_1.current.getBoundingClientRect().height;
            saveWidthImg.current = refImg_1.current.getBoundingClientRect().width;
            widthImg = refImg_1.current.getBoundingClientRect().width;
        }
        else if (refImg_2.current && refImg_2.current.getBoundingClientRect().height != 0) 
        {
            saveHeightImg.current = refImg_2.current.getBoundingClientRect().height;
            heightImg = refImg_2.current.getBoundingClientRect().height;
            saveWidthImg.current = refImg_2.current.getBoundingClientRect().width;
            widthImg = refImg_2.current.getBoundingClientRect().width;
        }
        else if (refImg_3.current && refImg_3.current.getBoundingClientRect().height != 0) 
        {
            saveHeightImg.current = refImg_3.current.getBoundingClientRect().height;
            heightImg = refImg_3.current.getBoundingClientRect().height;
            saveWidthImg.current = refImg_3.current.getBoundingClientRect().width;
            widthImg = refImg_3.current.getBoundingClientRect().width;
        }
        else if (refImg_4.current && refImg_4.current.getBoundingClientRect().height != 0) 
        {
            saveHeightImg.current = refImg_4.current.getBoundingClientRect().height;
            heightImg = refImg_4.current.getBoundingClientRect().height;
            saveWidthImg.current = refImg_4.current.getBoundingClientRect().width;
            widthImg = refImg_4.current.getBoundingClientRect().width;
        }
        else if (refImg_5.current && refImg_5.current.getBoundingClientRect().height != 0) 
        {
            saveHeightImg.current = refImg_5.current.getBoundingClientRect().height;
            heightImg = refImg_5.current.getBoundingClientRect().height;
            saveWidthImg.current = refImg_5.current.getBoundingClientRect().width;
            widthImg = refImg_5.current.getBoundingClientRect().width;
        }

        if (refTxtImg_1.current && refTxtImg_1.current.getBoundingClientRect().height != 0) 
        {
            saveHeightTxtImg.current = refTxtImg_1.current.getBoundingClientRect().height;
            heightTxtImg = refTxtImg_1.current.getBoundingClientRect().height;
            saveWidthTxtImg.current = refTxtImg_1.current.getBoundingClientRect().width;
            widthTxtImg = refTxtImg_1.current.getBoundingClientRect().width;
        }
        else if (refTxtImg_2.current && refTxtImg_2.current.getBoundingClientRect().height != 0) 
        {
            saveHeightTxtImg.current = refTxtImg_2.current.getBoundingClientRect().height;
            heightTxtImg = refTxtImg_2.current.getBoundingClientRect().height;
            saveWidthTxtImg.current = refTxtImg_2.current.getBoundingClientRect().width;
            widthTxtImg = refTxtImg_2.current.getBoundingClientRect().width;
        }
        else if (refTxtImg_3.current && refTxtImg_3.current.getBoundingClientRect().height != 0) 
        {
            saveHeightTxtImg.current = refTxtImg_3.current.getBoundingClientRect().height;
            heightTxtImg = refTxtImg_3.current.getBoundingClientRect().height;
            saveWidthTxtImg.current = refTxtImg_3.current.getBoundingClientRect().width;
            widthTxtImg = refTxtImg_3.current.getBoundingClientRect().width;
        }
        else if (refTxtImg_4.current && refTxtImg_4.current.getBoundingClientRect().height != 0) 
        {
            saveHeightTxtImg.current = refTxtImg_4.current.getBoundingClientRect().height;
            heightTxtImg = refTxtImg_4.current.getBoundingClientRect().height;
            saveWidthTxtImg.current = refTxtImg_4.current.getBoundingClientRect().width;
            widthTxtImg = refTxtImg_4.current.getBoundingClientRect().width;
        }
        else if (refTxtImg_5.current && refTxtImg_5.current.getBoundingClientRect().height != 0) 
        {
            saveHeightTxtImg.current = refTxtImg_5.current.getBoundingClientRect().height;
            heightTxtImg = refTxtImg_5.current.getBoundingClientRect().height;
            saveWidthTxtImg.current = refTxtImg_5.current.getBoundingClientRect().width;
            widthTxtImg = refTxtImg_5.current.getBoundingClientRect().width;
        }

        return { Img: { height:heightImg, width: widthImg}, TxtImg: {width: widthTxtImg, height: heightTxtImg}};
    }

    function getSizeImg() : AllSizes
    {
        if (saveHeightImg.current && saveHeightImg.current != -1 && saveWidthImg.current && saveWidthImg.current != -1 &&
            saveHeightTxtImg.current && saveHeightTxtImg.current != -1 && saveWidthTxtImg.current && saveWidthTxtImg.current != -1)
        {
            const heightImg = saveHeightImg.current;
            const widthImg = saveWidthImg.current;
            const heightTxtImg = saveHeightTxtImg.current;
            const widthTxtImg = saveWidthTxtImg.current;
            return { Img: {width: widthImg, height: heightImg}, TxtImg: {width: widthTxtImg, height: heightTxtImg}};
        }
        else
        {
            return setSizeImg()
        }
    }

    function disableAll()
    {
        // set opacity 0 to all element, handle scroll will set opacity to one we need it
        refImg_1.current!.style.opacity = "0";
        refImg_2.current!.style.opacity = "0";
        refImg_3.current!.style.opacity = "0";
        refImg_4.current!.style.opacity = "0";
        refImg_5.current!.style.opacity = "0";
        disableText();
    }

    function disableText()
    {
        refTxt_1.current!.style.opacity = "0";
        refTxtImg_1.current!.style.opacity = "0";
        refTxt_2.current!.style.opacity = "0";
        refTxtImg_2.current!.style.opacity = "0";
        refTxt_3.current!.style.opacity = "0";
        refTxtImg_3.current!.style.opacity = "0";
        refTxt_4.current!.style.opacity = "0";
        refTxtImg_4.current!.style.opacity = "0";
        refTxt_5.current!.style.opacity = "0";
        refTxtImg_5.current!.style.opacity = "0";
    }

    function handleScroll ()
    {
        const {Img: {width: widthImg, height: heightImg}, TxtImg: {width: widthTxtImg, height: heightTxtImg}} = getSizeImg();

        if (refPos_1.current && refPos_2.current && refPos_3.current && refPos_4.current && refPos_5.current)
        {
            const elem_1 = refPos_1.current;
            const elem_2 = refPos_2.current;
            const elem_3 = refPos_3.current;
            const elem_4 = refPos_4.current;
            const elem_5 = refPos_5.current;

            const posY_1 = elem_1.getBoundingClientRect().y;
            const posY_2 = elem_2.getBoundingClientRect().y;
            const posY_3 = elem_3.getBoundingClientRect().y;
            const posY_4 = elem_4.getBoundingClientRect().y;
            const posY_5 = elem_5.getBoundingClientRect().y;

            //we make transition between element or we disable element depending of the position of it
            if (posY_1 == 0 && posY_2 == 0)
            {
                //disable one
                refImg_1.current!.style.opacity = "0";
                refTxt_1.current!.style.opacity = "0";
                refTxtImg_1.current!.style.opacity = "0";

                refTxt_3.current!.style.opacity = "0";
                refTxtImg_3.current!.style.opacity = "0";

                refImg_2.current!.style.opacity = "1";
                refTxt_2.current!.style.opacity = "1";
                refTxtImg_2.current!.style.opacity = "1";

                refImg_1.current!.style.width = `${widthImg}px`;
                refTxtImg_1.current!.style.width = `${widthTxtImg}px`;
                refImg_1.current!.style.height = `${heightImg}px`;
                refTxtImg_1.current!.style.height = `${heightTxtImg}px`;
            }
            else if (posY_1 == 0 && posY_2 - posY_1 < heightImg)
            {
                //transition two
                refImg_2.current!.style.opacity = "1";

                const trans: number = (posY_2 - posY_1)/heightImg;
                refImg_1.current!.style.opacity = trans.toString();

                const minScale = 0.913;
                const scale = minScale + (1 - minScale) * trans;
                refImg_1.current!.style.width = `${widthImg * scale}px`;
                refImg_1.current!.style.height = `${heightImg * scale}px`;

                if (posY_2 - posY_1 < heightImg / 2)
                {
                    const newTrans: number = 1 - trans;
                    refTxt_1.current!.style.opacity = "0";
                    refTxtImg_1.current!.style.opacity = "0";
                    refTxt_2.current!.style.opacity = newTrans.toString();
                    refTxtImg_2.current!.style.opacity = newTrans.toString();
                }
                else
                {
                    const newTransTxt: number = trans * 1.4;
                    refTxtImg_1.current!.style.width = `${widthTxtImg * scale}px`;
                    refTxtImg_1.current!.style.height = `${heightTxtImg * scale}px`;
                    refTxt_1.current!.style.opacity = newTransTxt.toString();
                    refTxtImg_1.current!.style.opacity =  trans.toString();
                    refTxt_2.current!.style.opacity = "0";
                    refTxtImg_2.current!.style.opacity = "0";
                }
            }
            else if (posY_2 == 0 && posY_3 == 0)
            {
                //disable two
                refImg_2.current!.style.opacity = "0";
                refTxt_2.current!.style.opacity = "0";
                refTxtImg_2.current!.style.opacity = "0";

                refTxt_4.current!.style.opacity = "0";
                refTxtImg_4.current!.style.opacity = "0";

                refImg_3.current!.style.opacity = "1";
                refTxt_3.current!.style.opacity = "1";
                refTxtImg_3.current!.style.opacity = "1";

                refImg_2.current!.style.width = `${widthImg}px`;
                refTxtImg_2.current!.style.width = `${widthTxtImg}px`;
                refImg_2.current!.style.height = `${heightImg}px`;
                refTxtImg_2.current!.style.height = `${heightTxtImg}px`;
            }
            else if (posY_2 == 0 && posY_3 - posY_2 < heightImg)
            {
                //transition three
                refImg_3.current!.style.opacity = "1";

                const trans: number = (posY_3 - posY_2)/heightImg;
                refImg_2.current!.style.opacity = trans.toString();

                const minScale = 0.913;
                const scale = minScale + (1 - minScale) * trans;
                refImg_2.current!.style.width = `${widthImg * scale}px`;
                refImg_2.current!.style.height = `${heightImg * scale}px`;

                if (posY_3 - posY_2 < heightImg / 2)
                {
                    const newTrans: number = 1 - trans;
                    refTxt_2.current!.style.opacity = "0";
                    refTxtImg_2.current!.style.opacity = "0";
                    refTxt_3.current!.style.opacity = newTrans.toString();
                    refTxtImg_3.current!.style.opacity = newTrans.toString();
                }
                else
                {
                    const newTransTxt: number = trans * 1.4;
                    refTxtImg_2.current!.style.width = `${widthTxtImg * scale}px`;
                    refTxtImg_2.current!.style.height = `${heightTxtImg * scale}px`;
                    refTxt_2.current!.style.opacity = newTransTxt.toString();
                    refTxtImg_2.current!.style.opacity =  trans.toString();
                    refTxt_3.current!.style.opacity = "0";
                    refTxtImg_3.current!.style.opacity = "0";
                }
            }
            else if (posY_3 == 0 && posY_4 == 0)
            {
                //disable three
                refImg_3.current!.style.opacity = "0";
                refTxt_3.current!.style.opacity = "0";
                refTxtImg_3.current!.style.opacity = "0";

                refTxt_5.current!.style.opacity = "0";
                refTxtImg_5.current!.style.opacity = "0";

                refImg_4.current!.style.opacity = "1";
                refTxt_4.current!.style.opacity = "1";
                refTxtImg_4.current!.style.opacity = "1";

                refImg_3.current!.style.width = `${widthImg}px`;
                refTxtImg_3.current!.style.width = `${widthTxtImg}px`;
                refImg_3.current!.style.height = `${heightImg}px`;
                refTxtImg_3.current!.style.height = `${heightTxtImg}px`;
            }
            else if (posY_3 == 0 && posY_4 - posY_3 < heightImg)
            {
                //transition four
                refImg_4.current!.style.opacity = "1";

                const trans: number = (posY_4 - posY_3)/heightImg;
                refImg_3.current!.style.opacity = trans.toString();

                const minScale = 0.913;
                const scale = minScale + (1 - minScale) * trans;
                refImg_3.current!.style.width = `${widthImg * scale}px`;
                refImg_3.current!.style.height = `${heightImg * scale}px`;

                if (posY_4 - posY_3 < heightImg / 2)
                {
                    const newTrans: number = 1 - trans;
                    refTxt_3.current!.style.opacity = "0";
                    refTxtImg_3.current!.style.opacity = "0";
                    refTxt_4.current!.style.opacity = newTrans.toString();
                    refTxtImg_4.current!.style.opacity = newTrans.toString();
                }
                else
                {
                    const newTransTxt: number = trans * 1.4;
                    refTxtImg_3.current!.style.width = `${widthTxtImg * scale}px`;
                    refTxtImg_3.current!.style.height = `${heightTxtImg * scale}px`;
                    refTxt_3.current!.style.opacity = newTransTxt.toString();
                    refTxtImg_3.current!.style.opacity =  trans.toString();
                    refTxt_4.current!.style.opacity = "0";
                    refTxtImg_4.current!.style.opacity = "0";
                }
            } 
            else if (posY_4 == 0 && posY_5 == 0)
            {
                //disable four
                refImg_4.current!.style.opacity = "0";
                refTxt_4.current!.style.opacity = "0";
                refTxtImg_4.current!.style.opacity = "0";

                refImg_5.current!.style.opacity = "1";
                refTxt_5.current!.style.opacity = "1";
                refTxtImg_5.current!.style.opacity = "1";

                refImg_4.current!.style.width = `${widthImg}px`;
                refTxtImg_4.current!.style.width = `${widthTxtImg}px`;
                refImg_4.current!.style.height = `${heightImg}px`;
                refTxtImg_4.current!.style.height = `${heightTxtImg}px`;
            }
            else if (posY_4 == 0 && posY_5 - posY_4 < heightImg)
            {
                //transition five
                refImg_5.current!.style.opacity = "1";

                const trans: number = (posY_5 - posY_4)/heightImg;
                refImg_4.current!.style.opacity = trans.toString();

                const minScale = 0.913;
                const scale = minScale + (1 - minScale) * trans;
                refImg_4.current!.style.width = `${widthImg * scale}px`;
                refImg_4.current!.style.height = `${heightImg * scale}px`;

                if (posY_5 - posY_4 < heightImg / 2)
                {
                    const newTrans: number = 1 - trans;
                    refTxt_4.current!.style.opacity = "0";
                    refTxtImg_4.current!.style.opacity = "0";
                    refTxt_5.current!.style.opacity = newTrans.toString();
                    refTxtImg_5.current!.style.opacity = newTrans.toString();
                }
                else
                {
                    const newTransTxt: number = trans * 1.4;
                    refTxtImg_4.current!.style.width = `${widthTxtImg * scale}px`;
                    refTxtImg_4.current!.style.height = `${heightTxtImg * scale}px`;
                    refTxt_4.current!.style.opacity = newTransTxt.toString();
                    refTxtImg_4.current!.style.opacity =  trans.toString();
                    refTxt_5.current!.style.opacity = "0";
                    refTxtImg_5.current!.style.opacity = "0";
                }
            }
            else
            {
                //reset opacity if needed
                //reftxt 1 need to be manage here because other are manage in disable
                if (posY_1 >= 0)
                {
                    refImg_1.current!.style.opacity = "1";
                    refTxt_1.current!.style.opacity = "1";
                    refTxtImg_1.current!.style.opacity = "1";
                }
                if (posY_2 >= 0)
                {
                    refImg_2.current!.style.opacity = "1";
                }
                if (posY_3 >= 0)
                {
                    refImg_3.current!.style.opacity = "1";
                }
                if (posY_4 >= 0)
                {
                    refImg_4.current!.style.opacity = "1";
                }
                if (posY_5 >= 0)
                {
                    refImg_5.current!.style.opacity = "1";
                }
            }
        }
    };

    function handlResize ()
    {
        setSizeImg();
    }

    useEffect(() => {
        setSizeImg();
        disableAll();
        handleScroll();
        window.addEventListener("scroll", handleScroll);
        window.addEventListener("resize", handlResize);

        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("resize", handlResize);
        }

    }, [])

    return (            
        <div id="immersive" className="text-left overflow-clip mt-[80vh]">
            <motion.div
                initial={{ opacity: 0, y: 200 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col md:flex-row items-center justify-between w-full mx-auto"
            >
                <div className="z-[1] relative gap-[1vh] flex-col flex justify-center items-stretch">
                    <h1 className="text-[min(5vh,2.5vw)] leading-[1.1667] tracking-[-0.01em] font-[500]">Dynamic Arena Combat with AI scoring</h1>
                    <p className="text-[min(2.5vh,1.25vw)] leading-[1.33] tracking-[-0.01em] font-[500]">Robots start with 20% power and unlocked weapons, exploring the arena to power up and upgrade. Earn points with each successful strike, and as the Playa shrinks, the battle intensifies until only one robot remains.</p>
                </div>
            </motion.div>
            <div className="gap-[3vw] h-[500vh] relative row-auto grid-cols-2 grid">
                <div>
                    <div className="h-[100vh]">
                        <div className="h-[245vh]">
                            <div className="h-[100vh] sticky top-0">
                                    <div className="flex flex-col justify-center h-[80vh]" ref={refPos_1}>
                                        <img src="homePage/brc_images/1resize.png" loading="eager" sizes="(max-width: 479px) 93vw, (max-width: 767px) 95vw, 50vw" alt="" 
                                        className="self-center block rounded-[1rem]" ref={refImg_1}/>
                                    </div>
                            </div>
                        </div>
                    </div>

                    <div className="h-[100vh]">
                        <div className="h-[245vh]">
                            <div className="h-[100vh] sticky top-0">
                                    <div className="flex flex-col justify-center h-[80vh]" ref={refPos_2}>
                                        <img src="homePage/brc_images/2resize.png" loading="eager" sizes="(max-width: 479px) 93vw, (max-width: 767px) 95vw, 50vw" alt="" 
                                        className="self-center block rounded-[1rem]" ref={refImg_2}/>
                                    </div>
                            </div>
                        </div>
                    </div>

                    <div className="h-[100vh]">
                        <div className="h-[245vh]">
                            <div className="h-[100vh] sticky top-0">
                                    <div className="flex flex-col justify-center h-[80vh]" ref={refPos_3}>
                                        <img src="homePage/brc_images/3resize.png" loading="eager" sizes="(max-width: 479px) 93vw, (max-width: 767px) 95vw, 50vw" alt="" 
                                        className="self-center block rounded-[1rem]" ref={refImg_3}/>
                                    </div>
                            </div>
                        </div>
                    </div>

                    <div className="h-[100vh]">
                        <div className="h-[245vh]">
                            <div className="h-[100vh] sticky top-0">
                                    <div className="flex flex-col justify-center h-[80vh]" ref={refPos_4}>
                                        <img src="homePage/brc_images/4resize.png" loading="eager" sizes="(max-width: 479px) 93vw, (max-width: 767px) 95vw, 50vw" alt="" 
                                        className="self-center block rounded-[1rem]" ref={refImg_4}/>
                                    </div>
                            </div>
                        </div>
                    </div>

                    <div className="h-[100vh] sticky top-0">
                        <div className="flex flex-col justify-center h-[80vh]" ref={refPos_5}>
                            <img src="homePage/brc_images/5resize.png" loading="eager" sizes="(max-width: 479px) 93vw, (max-width: 767px) 95vw, 50vw" alt="" 
                            className="self-center block rounded-[1rem]" ref={refImg_5}/>
                        </div>
                    </div>
                </div>

                <div className="relative">
                    <div className="sticky top-0 bottom-0">
                        <div className="grid-rows-[auto] grid-cols-[1fr] auto-cols-[1fr] h-[100vh] grid col-start-2">
                            <div className="flex-col justify-center h-[80vh] flex">
                                <div ref={refTxt_1}>
                                    <h1 className="text-[min(3.4vh,1.7vw)] leading-[1.25em] tracking-[-0.01em] font-[500]">Start with limited power</h1>
                                    <span className="text-[2vh] h-[1.25vh] p-0 block"/>
                                    <p className="text-[min(2vh,1vw)] leading-[1.4em] tracking-[-0.02em] font-[500]">
                                        Robots are airdropped with just 20% power and basic weapons, setting the stage for strategic upgrades and survival.
                                    </p>
                                    <span className="h-[1.25vh] p-0 block"/>
                                </div>
                                <img src="homePage/brc_images/1.png" loading="eager" sizes="(max-width: 479px) 93vw, (max-width: 767px) 95vw, 50vw" alt=""
                                className="self-center block rounded-[1rem]" ref={refTxtImg_1}/>
                            </div>
                        </div>
                    </div>

                    <div className="sticky top-0 bottom-0">
                        <div className="grid-rows-[auto] grid-cols-[1fr] auto-cols-[1fr] h-[100vh] grid">
                            <div className="flex-col justify-center h-[80vh] flex">
                                <div ref={refTxt_2}>
                                    <h1 className="text-[min(3.4vh,1.7vw)] leading-[1.25em] tracking-[-0.01em] font-[500]">Explore for Upgrades</h1>
                                    <span className="text-[2vh] h-[1.25vh] p-0 block"/>
                                    <p className="text-[min(2vh,1vw)]  leading-[1.4em] tracking-[-0.02em] font-[500]">
                                        Roam the arena to discover energy sources and enhancements that boost your power and weapon systems.
                                    </p>
                                    <span className="h-[1.25vh] p-0 block"/>
                                </div>
                                <img src="homePage/brc_images/2.png" loading="eager" sizes="(max-width: 479px) 93vw, (max-width: 767px) 95vw, 50vw" alt=""
                                className="self-center block rounded-[1rem]" ref={refTxtImg_2}/>
                            </div>
                        </div>
                    </div>

                    <div className="sticky top-0 bottom-0">
                        <div className="grid-rows-[auto] grid-cols-[1fr] auto-cols-[1fr] h-[100vh] grid">
                            <div className="flex-col justify-center h-[80vh] flex">
                                <div ref={refTxt_3}>
                                    <h1 className="text-[min(3.4vh,1.7vw)] leading-[1.25em] tracking-[-0.01em] font-[500]">Score with Every Hit</h1>
                                    <span className="text-[2vh] h-[1.25vh] p-0 block"/>
                                    <p className="text-[min(2vh,1vw)] leading-[1.4em] tracking-[-0.02em] font-[500]">
                                        Rack up points with every successful attack and clever move, strengthening the robot and gaining an advantage.
                                    </p>
                                    <span className=" h-[1.25vh] p-0 block"/>
                                </div>
                                <img src="homePage/brc_images/3.png" loading="eager" sizes="(max-width: 479px) 93vw, (max-width: 767px) 95vw, 50vw" alt=""
                                className="self-center block rounded-[1rem]" ref={refTxtImg_3}/>
                            </div>
                        </div>
                    </div>

                    <div className="sticky top-0 bottom-0">
                        <div className="grid-rows-[auto] grid-cols-[1fr] auto-cols-[1fr] h-[100vh] grid">
                            <div className="flex-col justify-center h-[80vh] flex">
                                <div ref={refTxt_4}>
                                    <h1 className="text-[min(3.4vh,1.7vw)] leading-[1.25em] tracking-[-0.01em] font-[500]">Survive the Shrinking Arena</h1>
                                    <span className="text-[2vh] h-[1.25vh] p-0 block"/>
                                    <p className="text-[min(2vh,1vw)] leading-[1.4em] tracking-[-0.02em] font-[500]">
                                        As the Playa shrinks, robots are forced into closer quarters, making every battle fiercer and more urgent.
                                    </p>
                                    <span className="h-[1.25vh] p-0 block"/>
                                </div>
                                <img src="homePage/brc_images/4.png" loading="eager" sizes="(max-width: 479px) 93vw, (max-width: 767px) 95vw, 50vw" alt=""
                                className="self-center block rounded-[1rem]" ref={refTxtImg_4}/>
                            </div>
                        </div>
                    </div>

                    <div className="sticky top-0 bottom-0">
                        <div className="grid-rows-[auto] grid-cols-[1fr] auto-cols-[1fr] h-[100vh] grid">
                            <div className="flex-col justify-center h-[80vh] flex">
                                <div ref={refTxt_5}>
                                    <h1 className="text-[min(3.4vh,1.7vw)] leading-[1.25em] tracking-[-0.01em] font-[500]">Claim Victory as the Last Robot</h1>
                                    <span className="h-[1.25vh] p-0 block"/>
                                    <p className="text-[min(2vh,1vw)] leading-[1.4em] tracking-[-0.02em] font-[500]">
                                        Outlast all opponents in the intense final clashes to emerge as the ultimate champion, the last robot standing.
                                    </p>
                                    <span className=" h-[1.25vh] p-0 block"/>
                                </div>
                                <img src="homePage/brc_images/5.png" loading="eager" sizes="(max-width: 479px) 93vw, (max-width: 767px) 95vw, 50vw" alt=""
                                className="self-center block rounded-[1rem]" ref={refTxtImg_5}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ScrollImmersive;