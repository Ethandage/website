import Elite from "./Elite";
import NavBlock from "./NavBlock";
import RealityText from "./RealityText";
import RealityVid from "./RealityVid";

const ProductHighlights = () =>
{
    return (
        <section id="product-highlights" className="text-center">
            <div className="bg-white flex gap-[8vh] flex-col max-w-[74vw] py-[9vh] pb-0 w-full mx-[12.6vw] relative text-center">
                <NavBlock/>
                <RealityText/>
            </div>
            <RealityVid/>
            <div className="bg-white flex gap-[8rem] flex-col max-w-[74vw] py-[8rem] pb-0 w-full mx-[12.6vw] relative text-center " id="elite">
                <Elite/>
            </div>
        </section>
    );

}

export default ProductHighlights;