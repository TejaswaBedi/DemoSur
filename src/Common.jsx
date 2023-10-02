import React from "react";
import "./index.css";

const Common = (props) => {
  return (
    <section>
      <div id="header">
        <div className="container-fluid nav_bg">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
                <div
                  className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1"
                  style={{ marginTop: "190px" }}
                >
                  <h1>
                    {props.name}
                    <strong style={{ color: "crimson" }}>DemoSur</strong>
                  </h1>
                  <h2 className="my-3">We are a team exploring the World 🌍</h2>
                  <div className="mt-3">
                    <a href={props.visit}>
                      <button
                        style={{
                          borderRadius: "20px",
                          background: "transparent",
                          fontSize: "25px",
                        }}
                      >
                        {props.btnName}
                      </button>
                    </a>
                  </div>
                </div>
                <div className="col-lg-6 order-1 order-lg-2">
                  <img
                    className="img-fluid animated"
                    src={props.imgsrc}
                    alt=""
                    style={{ height: "600px" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Common;
