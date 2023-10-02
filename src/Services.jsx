import React from "react";
import DemonData from "./DemonData";
import Card from "./Card";

const Services = () => {
  return (
    <>
      <div className="my-5">
        <h1 style={{ marginLeft: "38%" }}>Category of Demons</h1>
      </div>
      <div className="container-fluid mb-5">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row gy-4 ">
              {DemonData.map((currData, index) => {
                return (
                  <Card
                    key={index}
                    imgsrc={currData.imgsrc}
                    title={currData.title}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
