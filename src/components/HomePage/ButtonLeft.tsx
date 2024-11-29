import { Link } from 'react-scroll';
import { useEffect, useRef, useState } from "react";

enum Color {
    None = "#00000000",
    Dark = "#5c5c5c",
    Light = "#a6a6a6",
};

enum PosNav {
    Product = 0,
    Imaging = 1,
    Flight = 2,
    Intelligent = 3,
    Winnings = 4,
}
const idNav: string[] = ["nav-prod", "nav-im", "nav-fli", "nav-int", "nav-win"];

const ButtonLeft = () => {

    const color = useRef<Color>(Color.None)

    const getContrastColor = (newColor: Color) =>
    {
        let contrastColor: Color = Color.None;
        if (newColor != Color.None)
        {
            contrastColor = (newColor === Color.Light ? Color.Dark : Color.Light);
        }
        return contrastColor;
    }

    const setColor = (newColor: Color, posNav: PosNav) =>
    {
        const contrastColor: Color = getContrastColor(newColor);

        for (let i = 0; i < 5; i++)
        {
            if (i == posNav)
            {
                const elem = document.getElementById(idNav[posNav]);
                if (elem)
                {
                    elem.style.color = newColor;
                    elem.style.opacity = "1";
                    elem.classList.add("active");
                }
            }
            else
            {
                const elem = document.getElementById(idNav[i]);
                if (elem)
                {
                    elem.style.color = contrastColor;
                    elem.style.opacity = "0";
                    elem.classList.remove("active");
                }
            }
        }

        const elemDot = document.getElementById("nav-dot");
        if (elemDot)
        {
            elemDot.style.color = newColor
            elemDot.style.opacity = "1";
        }
        color.current = newColor;
    }

    const handleScroll = () => {
        const posChange = window.innerHeight/2;

        const firstVidElem = document.getElementById("firstVid");
        const productHiElem = document.getElementById("product-highlights");
        const imagingPerfElem = document.getElementById("imaging-performance");
        const cuttingEdgeTilElem = document.getElementById("cuttingEdgeTiltle");
        const cuttingEdgeCont1Elem = document.getElementById("cuttingEdgeContent1");
        const cuttingEdgeContVidElem = document.getElementById("cuttingEdgeContentVid");
        const cuttingEdgeCont2Elem = document.getElementById("cuttingEdgeContent2");
        const intelligentFeatElem = document.getElementById("intelligent-features");
        const winningsElem = document.getElementById("winnings");

        if (firstVidElem && productHiElem && imagingPerfElem && cuttingEdgeTilElem && cuttingEdgeCont1Elem && cuttingEdgeContVidElem && cuttingEdgeCont2Elem &&
            intelligentFeatElem && winningsElem)
        {
            const firstVidPos = firstVidElem.getBoundingClientRect().y;
            const productHiPos = productHiElem.getBoundingClientRect().y;
            const imagingPerfPos = imagingPerfElem.getBoundingClientRect().y;
            const cuttingEdgeTilPos = cuttingEdgeTilElem.getBoundingClientRect().y;
            const cuttingEdgeCont1Pos = cuttingEdgeCont1Elem.getBoundingClientRect().y;
            const cuttingEdgeContVidPos = cuttingEdgeContVidElem.getBoundingClientRect().y;
            const cuttingEdgeCont2Pos = cuttingEdgeCont2Elem.getBoundingClientRect().y;
            const intelligentFeatPos = intelligentFeatElem.getBoundingClientRect().y;
            const winningsPos = winningsElem.getBoundingClientRect().y;

            if (winningsPos < posChange)
                setColor(Color.Light, PosNav.Winnings);
            else if (intelligentFeatPos < posChange)
                setColor(Color.Dark, PosNav.Intelligent);
            else if (cuttingEdgeCont2Pos < posChange)
                setColor(Color.Dark, PosNav.Flight);
            else if (cuttingEdgeContVidPos < posChange)
                setColor(Color.Light, PosNav.Flight);
            else if (cuttingEdgeCont1Pos < posChange)
                setColor(Color.Dark, PosNav.Flight);
            else if (cuttingEdgeTilPos < posChange)
                setColor(Color.Light, PosNav.Flight);
            else if (imagingPerfPos < posChange)
                setColor(Color.Light, PosNav.Imaging);
            else if (productHiPos < posChange)
                setColor(Color.Dark, PosNav.Product);
            else if (firstVidPos < posChange)
                setColor(Color.None, PosNav.Product);
            else
                setColor(Color.None, PosNav.Product);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const handleLeaveText = (e:React.MouseEvent<HTMLButtonElement, MouseEvent>) =>
    {
        if (!e.currentTarget.classList.contains("active"))
            e.currentTarget.style.color = getContrastColor(color.current)
    }

    const getDuration = (distance: number) => 
    {
        const diffDistance = Math.abs(distance)  

        const minDistance = 4995;
        const maxDistance = 28537;

        const minDuration = 1.5;
        const maxDuration = 2.75;

        const slope = (maxDuration - minDuration) / (maxDistance - minDistance);

        let duration = minDuration + slope * (diffDistance - minDistance);

        const ret = Math.min(Math.max(duration, minDuration), maxDuration) * 1000;

        return ret;
    }

    return (
        
        <nav  className="group font-sui font-[600] tracking-[0.01rem] z-[90] p-4 fixed top-1/2 left-0 transform -translate-y-1/2">
            <ul role="list" id="nav-dot" className="flex flex-col gap-[2.2vh] justify-center pl-6 list-disc opacity-0">
                <li>
                    <Link smooth={true} duration={getDuration} to="product-highlights" id="nav-prod" className="cursor-pointer text-[min(1.6vh,0.8vw)] transition-all duration-200 ease inline-block opacity-0 group-hover:!opacity-100"
                    onMouseEnter={(e) => (e.currentTarget.style.color = color.current)}
                    onMouseLeave={handleLeaveText}>
                        BRC Highlights
                    </Link>
                </li>
                <li>
                    <Link smooth={true} duration={getDuration} to="imaging-performance" id="nav-im" className="cursor-pointer text-[min(1.6vh,0.8vw)] transition-all duration-200 ease inline-block opacity-0 group-hover:!opacity-100"
                    onMouseEnter={(e) => (e.currentTarget.style.color = color.current)}
                    onMouseLeave={handleLeaveText}>
                        Robot
                    </Link>
                </li>
                <li>
                    <Link smooth={true} duration={getDuration} to="flight-performance" id="nav-fli" className="cursor-pointer text-[min(1.6vh,0.8vw)] transition-all duration-200 ease inline-block opacity-0 group-hover:!opacity-100"
                    onMouseEnter={(e) => (e.currentTarget.style.color = color.current)}
                    onMouseLeave={handleLeaveText}>
                        High Tech
                    </Link>
                </li>
                <li>
                    <Link smooth={true} duration={getDuration} to="intelligent-features" id="nav-int" className="cursor-pointer text-[min(1.6vh,0.8vw)] transition-all duration-200 ease inline-block opacity-0 group-hover:!opacity-100"
                    onMouseEnter={(e) => (e.currentTarget.style.color = color.current)}
                    onMouseLeave={handleLeaveText}>
                        Global Alliances
                    </Link>
                </li>
                <li>
                    <Link smooth={true} duration={getDuration} to="winnings" id="nav-win" className="cursor-pointer text-[min(1.6vh,0.8vw)] transition-all duration-200 ease inline-block opacity-0 group-hover:!opacity-100"
                    onMouseEnter={(e) => (e.currentTarget.style.color = color.current)}
                    onMouseLeave={handleLeaveText}>
                        Winnings
                    </Link>
                </li>
            </ul>
        </nav>
    );
}

export default ButtonLeft;
