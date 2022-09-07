import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import axios from "../api";
import { useParams, useNavigate } from "react-router-dom";

const EditStudent = () => {
  const params = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    getUser(params.id);
  }, []);

  let getUser = async (id) => {
    try {
      let response = await axios.get(`/student/${id}`);
      formik.setValues({
        student: response.data.student,
        avatar: response.data.avatar,
        Emailid: response.data.Emailid,
        Tamil: response.data.marks[0],
        English: response.data.marks[1],
        Science: response.data.marks[2],
        Maths: response.data.marks[3],
        Social: response.data.marks[4],
      });
    } catch (err) {
      console.log(err);
    }
  };
  const formik = useFormik({
    initialValues: {
      student: "",
      avatar: "",
      Emailid: "",
      Tamil: "",
      English: "",
      Science: "",
      Maths: "",
      Social: "",
    },
    validate: (values) => {
      let errors = {};
      // if (values.student === "") {
      //   errors.student = "Please enter a name";
      // }
      // if (values.avatar === "") {
      //   errors.avatar = "Please give a avatar ";
      // }
      // if (values.Emailid === "") {
      //   errors.Emailid = "Please give a email id";
      // }
      // if (values.Tamil === "") {
      //   errors.Tamil = "please enter a mark";
      // }
      // if (values.English === "") {
      //   errors.English = "please enter a mark";
      // }
      // if (values.Science === "") {
      //   errors.Science = "please enter a mark";
      // }
      // if (values.Maths === "") {
      //   errors.Maths = "please enter a mark";
      // }
      // if (values.Social === "") {
      //   errors.Social = "please enter a mark";
      // }

      return errors;
    },
    onSubmit: async (values) => {
      let { student, Emailid, avatar, Tamil, English, Science, Maths, Social } =
        values;
      let marks = [Tamil, English, Science, Maths, Social];

      await axios.put(`/student/${params.id}`, {
        student,
        Emailid,
        avatar,
        marks,
      });
      navigate(`/student/${params.id}`);
    },
  });
  return (
    <form className="App mt-5" onSubmit={formik.handleSubmit}>
      <div className="title">Add Student Details</div>
      <div className="center">
        <div class="form-group col-md-11">
          <input
            type="text"
            class="form-control mt-3"
            value={formik.values.student}
            onChange={formik.handleChange}
            placeholder="Name"
            name="student"
          />
          <span style={{ color: "red" }}>{formik.errors.student}</span>
        </div>
        <div class="form-group col-md-11">
          <input
            type="email"
            class="form-control mt-3 "
            value={formik.values.Emailid}
            onChange={formik.handleChange}
            placeholder="Email"
            name="Emailid"
          />
          <span style={{ color: "red" }}>{formik.errors.Emailid}</span>
        </div>
        <div class="form-group col-md-11">
          <input
            type="text"
            class="form-control mt-3 "
            placeholder="Profile Picture"
            value={formik.values.avatar}
            onChange={formik.handleChange}
            name="avatar"
          />
          <span style={{ color: "red" }}>{formik.errors.avatar}</span>
        </div>
        <div class="form-group col-md-5">
          <input
            type="text"
            class="form-control mt-3 "
            placeholder="Tamil mark"
            value={formik.values.Tamil}
            onChange={formik.handleChange}
            name="Tamil"
          />
          <span style={{ color: "red" }}>{formik.errors.Tamil}</span>
        </div>
        <div class="form-group col-md-5">
          <input
            type="text"
            class="form-control mt-3 mx-2 "
            placeholder="English mark"
            value={formik.values.English}
            onChange={formik.handleChange}
            name="English"
          />
          <span style={{ color: "red" }}>{formik.errors.English}</span>
        </div>
        <div class="form-group col-md-5">
          <input
            type="text"
            class="form-control mt-3 "
            placeholder="Science mark"
            value={formik.values.Science}
            onChange={formik.handleChange}
            name="Science"
          />
          <span style={{ color: "red" }}>{formik.errors.Science}</span>
        </div>
        <div class="form-group col-md-5">
          <input
            type="text"
            class="form-control mt-3 mx-2 "
            placeholder="Math mark"
            value={formik.values.Maths}
            onChange={formik.handleChange}
            name="Maths"
          />
          <span style={{ color: "red" }}>{formik.errors.Maths}</span>
        </div>
        <div class="form-group col-md-5">
          <input
            type="text"
            class="form-control mt-3 mx-2 "
            placeholder="Social mark"
            value={formik.values.Social}
            onChange={formik.handleChange}
            name="Social"
          />
          <span style={{ color: "red" }}>{formik.errors.Social}</span>
        </div>
      </div>
      <button
        type="submit"
        value="Submit"
        class="btn btn-secondary btn-lg button mt-3"
      >
        ADD
      </button>
    </form>
  );
};

export default EditStudent;
