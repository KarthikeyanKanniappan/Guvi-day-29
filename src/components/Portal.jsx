import Card from "../components/Card";
import Navbar from "../components/Navbar";
import axios from "../api";
import React, { useEffect, useState } from "react";

const Portal = () => {
  const [spinner, setSpinner] = useState(true);
  const [count, setCount] = useState(0);
  const [active, setActive] = useState([]);

  let userDelete = async (id) => {
    try {
      await axios.delete(`/student/${id}`);
      let user = active.findIndex((el) => el.id === id);
      active.splice(user, 1);
      setCount((c) => c + 1);
      alert("UserDeleted");
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    setActive(active);
  }, [count]);

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
            return <Card key={i} el={el} userDelete={userDelete} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Portal;
