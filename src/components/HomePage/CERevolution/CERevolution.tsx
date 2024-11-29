import CuttingEdge from "./CuttingEdge"
import Tab from "./Tab"

const CERevolution = () => {
    return (
        <>
            <section id="flight-performance" className="text-center bg-white">
                <CuttingEdge/>
                <div className="font-sui flex flex-col max-w-[78vw] px-[3vw] py-[8vh] w-full mx-auto relative">
                    <Tab/>
                </div>
            </section>
        </>
    )
}

export default CERevolution