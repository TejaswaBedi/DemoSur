import React from "react";
import Common from "./Common";
import about from "../src/images/about.png";

const About = () => {
  return (
    <div>
      <Common
        name="We provide information on various category of demons encountered by humans. Thankyou for visiting  "
        imgsrc={about}
        visit="/contact"
        btnName="Contact Now"
      />
    </div>
  );
};

export default About;
