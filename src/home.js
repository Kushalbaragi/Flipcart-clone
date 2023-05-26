import React from "react";
import images from "./database/banner";
import "./style/home.scss";
import HomeProduct from "./homeProduct";

function Home() {
  let { banner } = images;
  return (
    <section className="banner">
      <img src={banner[0]} />
      <HomeProduct/>
    </section>
  );
}

export default Home;
