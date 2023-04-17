import React from "react";
import BestWatches from "./BestWatches";
import Brands from "./Brands";
import FeaturedProducts from "./FeaturedProducts";
import { Header } from "./Header";
import RunningShoes from "./RunningShoes";
import SeasonsBanner from "./SeasonsBanner";

export const Home = () => {
  return (
    <>
      <Header />
      <Brands />
      <FeaturedProducts />
      <SeasonsBanner />
      <BestWatches />
      <RunningShoes />
    </>
  );
};
