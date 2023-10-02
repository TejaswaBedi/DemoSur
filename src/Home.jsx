import React from "react";
import Common from "./Common";
import home from "../src/images/home.png";

const Home = () => {
  return (
    <div>
      <Common
        name="Get knowledge about demons with"
        imgsrc={home}
        visit="/services"
        btnName="Embark on Journey"
      />
    </div>
  );
};

export default Home;
