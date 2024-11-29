import { useNavigate } from "react-router-dom";

const WatchVideo = () => {
    
    const navigate = useNavigate();

    const handleButtonHomeClick = () => {
        navigate('/');
    };

    return (
        <main className="flex justify-center items-center h-screen m-0 bg-[#232526]">
            <button
                className="absolute top-2.5 right-2.5 w-10 h-10 bg-[#333] rounded-full flex items-center justify-center cursor-pointer hover:bg-[#555555] active:bg-[#777]"
                onClick={handleButtonHomeClick}
            >
                <div className="text-white text-xl pointer-events-none">X</div>
            </button>
            <div className="w-[70%] h-[70%]">
                <video
                    controls
                >
                    <source src="homePage/brc_videos/Homepage_video_Brc.mp4"/>
                    Your browser does not support the video tag.
                </video>
            </div>
        </main>
    );
};

export default WatchVideo;
