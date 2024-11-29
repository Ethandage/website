import { useEffect } from "react";
import ScrollImmersive from "./ScrollImmersive";
import Autonomous from "./Autonomous";
import EpicBattles from "./EpicBattles";
import GlobalAccess from "./GlobAccess";

const ImagingPerformance = () =>
{
    useEffect(() =>
    {
        import ("./ScrollImmersive");
    },[]);

    return (
        <section id="imaging-performance" className="bg-black">
            <div className="text-center bg-black font-sui text-white flex flex-col gap-y-[8vh] max-w-[78vw] py-[8vh] px-[3vw] w-full mx-auto my-auto relative">
                <Autonomous/>
                <ScrollImmersive/>
            </div>
            <div className="text-center bg-black font-sui text-white flex flex-col gap-y-[8vh] py-[8vh] w-full mx-auto my-auto mt-[-30vh] relative">
                <EpicBattles/>
            </div>
            <div className="text-center bg-black font-sui text-white flex flex-col max-w-[78vw] pb-[8vh] px-[3vw] w-full mx-auto my-auto relative">
                <GlobalAccess/>
            </div>
        </section>
    );
}

export default ImagingPerformance;