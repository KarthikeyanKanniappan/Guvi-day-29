import React, { useState, useEffect } from "react";
import axios from "../api";
import { Link, useNavigate } from "react-router-dom";

const Card = ({ el, userDelete }) => {
  return (
    <div className="card mx-auto mt-3 mb-3 col-md-3" style={{ width: "20rem" }}>
      <img
        className="card-img-top mt-3"
        style={{ objectFit: "cover", width: "10rem", height: "10rem" }}
        src={`${el.avatar}`}
        alt="Card image cap"
      ></img>
      <div className="card-body">
        <h5 className="card-title mt-3">{el.student}</h5>
        <p className="card-text mt-3">{`Email id: ${el.Emailid}`}</p>
        <div className="d-grid  mt-3 mb-3 d-md-block">
          <Link to={`/student/${el.id}`} className="btn btn-dark btn-sm mb-3 ">
            VIEW DETAILS
          </Link>
          <button
            onClick={() => userDelete(el.id)}
            className="btn btn-dark btn-sm mx-3 mb-3"
          >
            DELETE
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
