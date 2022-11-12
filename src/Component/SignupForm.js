import React, { useState, useEffect } from "react";
import SignupValidation from "./SignupValidation";
import SubmitSignup from "./SubmitSignup";
import FrontPage from "./FrontPage";
import "../App.css";
// import { useNavigate } from "react-router-dom";

const SignupForm = ({ submitForm }) => {
  const [values, setValues] = useState({
    fullname: "",
    email: "",
    phone: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [dataIsCorrect, setDataIsCorrect] = useState(false);

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };
  // const navigate = useNavigate();

  const handleFormSubmit = (event) => {
    event.preventDefault();
    setErrors(SignupValidation(values));
    setDataIsCorrect(true);
    // navigate("/signin");
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && dataIsCorrect) {
      submitForm(true);
    }
  }, [errors]);

  return (
    <div className="container">
      <div className="signup_container">
        <div>
          <h2 className="title">Register</h2>
        </div>
        <form className="sigup_form">
          <div className="name">
            <label className="signup_label">Full Name</label>
            <input
              className="signup_input"
              type="text"
              name="fullname"
              value={values.fullname}
              onChange={handleChange}
            />
            {errors.fullname && <p className="error">{errors.fullname}</p>}
          </div>
          <div className="email">
            <label className="label">Email</label>
            <input
              className="signup_input"
              type="email"
              name="email"
              value={values.email}
              onChange={handleChange}
            />
            {errors.email && <p className="error">{errors.email}</p>}
          </div>
          <div className="phone">
            <label className="label">Mobile Number</label>
            <input
              className="signup_input"
              type="text"
              name="phone"
              value={values.phone}
              onChange={handleChange}
            />
            {errors.phone && <p className="error">{errors.phone}</p>}
          </div>

          <div className="password">
            <label className="label">Password</label>
            <input
              className="signup_input"
              type="password"
              name="password"
              value={values.password}
              onChange={handleChange}
            />
            {errors.password && <p className="error">{errors.password}</p>}
          </div>
          <div>
            <button className="signup_submit" onClick={handleFormSubmit}>
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignupForm;
