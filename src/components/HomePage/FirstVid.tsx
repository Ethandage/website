import { useNavigate } from 'react-router-dom';

const FirstVid = () =>
{
    const navigate = useNavigate();

    const handleButtonJoinClick = () => {
        navigate('/join');
    };

    const handleButtonWatchVideoClick = () => {
        navigate('/video');
    };
    
    return (          
        <div id="firstVid" className="bg-black text-white z-[100] text-center min-h-[calc(100vh-4rem)]">
            <div className="h-screen w-full absolute top-0 bottom-0 left-0 right-0">
                    <video className="h-full w-full object-cover"  src="/homePage/brc_videos/Homepage_video_Brc.mp4" autoPlay loop muted playsInline/>
            </div>
            <div className="w-full mx-auto relative py-[16vh]">
                <div className="mx-auto gap-[2vh] text-center flex flex-col justify-start items-stretch">
                    <h1 className="font-sui text-[min(7.8vh,3.9vw)] leading-[1.1667em] tracking-[0.01em] font-[600]">
                        BATTLE ROYALE CHAMPIONSHIP
                    </h1>
                    <h1 className="font-sui text-[min(5vh,2.5vw)] leading-[1.1667em] tracking-[0.01em] font-[500]">
                        Real-life Combat. Real-World Stakes.
                    </h1>
                    <div className="mx-auto grid gap-[0.5vw] grid-cols-2 grid-flow-col">
                        <a onClick={handleButtonJoinClick} className="max-w-full py-[1.5vh] px-[1.8vw] border-[1px] border-transparent rounded-full bg-white justify-center
                        items-center leading-[1.1rem] inline-flex transition-colors duration-200 hover:bg-[rgba(255,255,255,0.8)] cursor-pointer">
                            <div className="font-sui text-[min(1.7vh,0.85vw)] text-black">
                                SIGN UP NOW
                            </div>
                        </a>
                        <a onClick={handleButtonWatchVideoClick} className=" cursor-pointer py-[0.75rem] px-[1rem] gap-[0.5rem] border-[1px] border-white rounded-full bg-[rgba(0,0,0,0)] justify-center
                        items-center leading-[1.1rem] inline-flex transition-colors duration-200 hover:bg-[rgba(255,255,255,0.05)]">
                            <div className="font-sui text-[min(1.7vh,0.85vw)] text-white">
                                WATCH VIDEO
                            </div>
                            <div>
                                <img src="/homePage/brc_images/resume.svg" loading="eager" alt="Pause logo" className="w-auto h-4 p-[0.1rem]"/>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FirstVid;