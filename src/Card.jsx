import React from "react";
import { NavLink } from "react-router-dom";

const Card = (props) => {
  return (
    <div>
      <div className="col-md-4 col-10 mx-auto">
        <div className="card">
          <img src={props.imgsrc} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text"></p>
            <NavLink
              to="https://www.thecoolist.com/types-of-demons/"
              className="btn btn-primary"
            >
              Reference
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
