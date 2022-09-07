import React, { useState, useEffect } from "react";
import axios from "../api";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const ViewStudent = () => {
  const params = useParams();
  const [active, setActive] = useState([]);
  const [array, setArray] = useState([]);
  const [spinner, setSpinner] = useState(true);
  useEffect(() => {
    getData(params.id);
  }, []);
  let getData = async (id) => {
    try {
      let response = await axios.get(`/student/${id}`);
      setActive(response.data);
      setArray(response.data.marks);
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
    <div className="container map">
      <div class="card m-auto" style={{ width: "50rem" }}>
        <img
          style={{ width: "20rem" }}
          src={active.avatar}
          class="card-img-top m-auto"
          alt="..."
        />
        <div class="card-body">
          <h5 class="card-title" style={{ fontSize: "2rem" }}>
            {active.student}
          </h5>
          <p class="card-text" style={{ fontSize: "1.2rem" }}>
            <b>Contact</b>: {active.Emailid}
          </p>
          <table class="table">
            <thead>
              <tr>
                <th scope="col">Subject</th>
                <th scope="col">Tamil</th>
                <th scope="col">English</th>
                <th scope="col">Science</th>
                <th scope="col">Social</th>
                <th scope="col">Maths</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">Quartely Exams</th>
                {array.map((el, i) => {
                  return <td key={i + 1}>{el}</td>;
                })}
              </tr>
            </tbody>
          </table>
          <Link to={`/EditStudent/${active.id}`} class="btn btn-primary">
            Edit
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ViewStudent;
