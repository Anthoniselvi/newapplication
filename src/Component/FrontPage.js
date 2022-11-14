import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SubmitSignin from "./SubmitSignin";
import Validation from "./Validation";
import SignupForm from "./SignupForm";
import "../App.css";

const FrontPage = ({ SubmitSignin }) => {
  const [values, setValues] = useState({
    username: "",
    password: "",
    rememberme: true,
  });

  const [errors, setErrors] = useState({});
  const [dataIsCorrect, setDataIsCorrect] = useState(false);

  const frontPageHandleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };
  // const navigate = useNavigate();
  const frontPageHandleSubmit = (event) => {
    event.preventDefault();
    setErrors(Validation(values));
    setDataIsCorrect(true);
    navigate("/dashboard");
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && dataIsCorrect) {
      SubmitSignin(true);
    }
  }, [errors]);

  const navigate = useNavigate();

  function toSignup() {
    navigate("/signup");
  }
  return (
    <div className="frontpage_container">
      <div className="frontpage_bgcontainer">
        <div className="pink"></div>
        <div className="white"></div>
      </div>
      <div className="frontpage_content">
        <h1 className="frontpage_title">SIGN IN</h1>
        <form className="frontpage_form">
          <div className="frontpage_input">
            <div className="frontpage_input_img">
              <img src="..\images\user.png" />
            </div>
            <input
              type="username"
              placeholder="User Name"
              className="frontpage_input_box"
              name="username"
              onChange={frontPageHandleChange}
              value={values.username}
            />
          </div>

          {errors.username && <p className="error">{errors.username}</p>}

          <div className="frontpage_input">
            <div className="frontpage_input_img">
              <img src="..\images\password.png" />
            </div>
            <input
              type="password"
              placeholder="Password"
              className="frontpage_input_box"
              name="password"
              onChange={frontPageHandleChange}
              value={values.password}
            />
          </div>
          {errors.password && <p className="error">{errors.password}</p>}
          <div className="frontpage_input_bottom">
            <div className="frontpageform_checkbox">
              <input
                id="okayToEmail"
                type="checkbox"
                name="rememberme"
                onChange={frontPageHandleChange}
                checked={values.rememberme}
              />
              <label htmlFor="okayToEmail">Remember Me</label>
            </div>
            <a href="" className="frontpage_forget">
              Forget Password
            </a>
          </div>
          <button className="frontpage_button" onClick={frontPageHandleSubmit}>
            SIGN IN
          </button>
          <p className="frontpage_bottomtext">
            Still not connected?{" "}
            <a href="" onClick={toSignup}>
              {" "}
              Sign Up
            </a>
          </p>
          <div className="frontpage_bottomlink">
            <div className="frontpage_or">OR</div>
            <div className="frontpage_linkbox">
              <div className="frontpage_link">
                <img src="..\images\facebook.png" />
              </div>
              <div className="frontpage_link">
                <img src="..\images\gmail.png" />
              </div>
              <div className="frontpage_link">
                <img src="..\images\twitter.png" />
              </div>
              {/* <a href="#" className="login100-social-item bg1">
									<i className="fa fa-facebook" />
								</a>
								<a href="#" className="login100-social-item bg2">
									<i className="fa fa-twitter" />
								</a>
								<a href="#" className="login100-social-item bg3">
									<i className="fa fa-google" />
								</a> */}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
export default FrontPage;
