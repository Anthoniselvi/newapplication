import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import SignupForm from "./SignupForm";
import Dashboard from "./Dashboard";
import FrontPage from "./FrontPage";

function SubmitSignup() {
  const [formIsSubmitted, setFormIsSubmitted] = useState(false);
  const navigate = useNavigate();

  const submitForm = () => {
    setFormIsSubmitted(true);
    navigate("/signin");
  };
  return (
    <div>
      {!formIsSubmitted ? (
        <SubmitSignup submitForm={submitForm} />
      ) : (
        <FrontPage />
      )}
    </div>
  );
}

export default SubmitSignup;
