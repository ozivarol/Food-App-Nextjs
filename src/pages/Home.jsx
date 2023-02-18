import React from "react";
import styles from "../assets/page.module.css";
const { dancingClass, josefinSansClass } = require("../assets/font");
import Carousel from "@/components/ui/Carousel";
import Campaigns from "@/components/ui/Campaigns";
import MenuWrapper from "@/components/product/MenuWrapper";
import About from "./about";
const Home = () => {
  return (
    <React.Fragment>
      <Carousel fonts={[dancingClass, josefinSansClass]} />
      <Campaigns />
      <MenuWrapper />
      <About/>
    </React.Fragment>
  );
};

export default Home;
