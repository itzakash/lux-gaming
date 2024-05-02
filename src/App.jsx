// import "./vendor/bootstrap/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./components/Header/Header";
import MainBanner from "./components/MainBanner/MainBanner";
import Feature from "./components/Features/Feature";
import React, { useEffect } from "react";
import Trending from "./components/Trending/Trending";

import $ from "jquery";
import TopGames from "./components/TopGames/TopGames";
import TopCategory from "./components/TopCategories/TopCategory";
import Footer from "./components/Footer/Footer";

import feature_img_1 from "./assets/images/featured-01.png";
import feature_img_2 from "./assets/images/featured-02.png";
import feature_img_3 from "./assets/images/featured-03.png";
import feature_img_4 from "./assets/images/featured-04.png";
const features = [
  {
    image_path: feature_img_1,
    title: "Free Storage",
  },
  {
    image_path: feature_img_2,
    title: "User More",
  },
  {
    image_path: feature_img_3,
    title: "Reply Ready",
  },
  {
    image_path: feature_img_4,
    title: "Easy Layout",
  },
];

function App() {
  useEffect(() => {
    // Add scroll event listener using jQuery
    $(window).scroll(function () {
      var scroll = $(window).scrollTop();
      var box = $(".header-text").height();
      var header = $("header").height();

      if (scroll >= box - header) {
        $("header").addClass("background-header");
      } else {
        $("header").removeClass("background-header");
      }
    });

    // Cleanup function to remove event listener when component unmounts
    return () => {
      $(window).off("scroll");
    };
  }, []); // Empty dependency array means this effect will only run once after the component mounts

  return (
    <>
      <Header></Header>
      <MainBanner></MainBanner>
      <Feature features={features}></Feature>
      <Trending></Trending>
      <TopGames></TopGames>
      <TopCategory></TopCategory>
      <Footer></Footer>
    </>
  );
}

export default App;
