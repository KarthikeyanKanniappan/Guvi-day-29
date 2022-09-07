import Card from "../components/Card";
import Navbar from "../components/Navbar";
import axios from "../api";
import React, { useEffect, useState } from "react";

const Portal = () => {
  const [spinner, setSpinner] = useState(true);
  const [active, setActive] = useState([]);
  useEffect(() => {
    getData();
  }, []);
  let getData = async () => {
    try {
      let response = await axios.get("/student");
      setActive(response.data);
      if (response.status === 200) {
        setSpinner(false);
      }
    } catch (e) {
      console.log(e);
    }
  };
  return spinner ? (
    <div>
      <div class="d-flex justify-content-center">
        <div class="spinner-border" role="status"></div>
      </div>
    </div>
  ) : (
    <div>
      {/* <Navbar /> */}
      <div className="container mt-5 m-auto">
        <div className="row">
          {active.map((el, i) => {
            return <Card key={i} el={el} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Portal;
