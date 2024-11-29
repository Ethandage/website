import FirstVid from "../components/HomePage/FirstVid.tsx";
import ImagingPerformance from "../components/HomePage/ImagingPerformance/ImagingPerformance.tsx";
import ProductHighlights from "../components/HomePage/ProductHighlights/ProductHighlights.tsx";
import Header from "../components/Layout/Header.tsx";
import Footer from "../components/Layout/Footer.tsx";
import Winnings from "../components/HomePage/Winnings.tsx";
import IntelligentFeatures from "../components/HomePage/IntelligentFeatures/IntelligentFeatures.tsx";
import CERevolution from "../components/HomePage/CERevolution/CERevolution.tsx";
import ButtonLeft from "../components/HomePage/ButtonLeft.tsx";

import { useEffect } from "react";

const HomePage = () =>
{     
  useEffect(() =>
  {
    import("../components/HomePage/ImagingPerformance/ImagingPerformance.tsx");
  }, []);

  return (
    <div className="relative">
      <Header/>
      <ButtonLeft/>
      <FirstVid/>
      <ProductHighlights/>
      <ImagingPerformance/>
      <CERevolution/>
      <IntelligentFeatures/>
      <Winnings/>
      <Footer/>
    </div>
  );
}

export default HomePage;