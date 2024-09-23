import React from "react";
import HomeCarousel from "../customer/Components/Carousel/HomeCarousel";
import { homeCarouselData } from "../customer/Components/Carousel/HomeCaroselData";
import HomeProductSection from "../customer/Components/Home/HomeProductSection";
import { sareePage1 } from "../Data/Saree/page1";
import { dressPage1 } from "../Data/dress/page1";
import { gounsPage1 } from "../Data/Garden/garden";
import { kurtaPage1 } from "../Data/Kurta/kurta";
import { WoodenCreationsArt } from "../Data/WoodenCreationsArt";
import { PottersArt } from "../Data/Potters_Art/Potters_Art";
import { WoolenWonderArt } from "../Data/Woolenart/WoolenWonderArt";

const Homepage = () => {

  return (
    <div className="">
      <HomeCarousel images={homeCarouselData} />

      <div className="space-y-10 py-20">
     
        <HomeProductSection data={PottersArt} section={"Potters Art"} />
        <HomeProductSection data={WoodenCreationsArt} section={"Wooden Creation Art"} />
        <HomeProductSection data={WoolenWonderArt} section={"Woolen Art"} />
        <HomeProductSection data={gounsPage1} section={"Groom Garden"} />
        
        {/* <HomeProductSection data={mensPantsPage1} section={"Men's Pants"} /> */}
      </div>

      
    </div>
  );
};

export default Homepage;
