import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Dashboard from "./Dashboard";
import FrontPage from "./FrontPage";

function SubmitSignin() {
  const [formIsSubmitted, setFormIsSubmitted] = useState(false);
  const navigate = useNavigate();

  const SubmitSignin = () => {
    setFormIsSubmitted(true);
    navigate("/Dashboard");
  };
  return (
    <div>
      {!formIsSubmitted ? (
        <FrontPage SubmitSignin={SubmitSignin} />
      ) : (
        <Dashboard />
      )}
    </div>
  );
}

export default SubmitSignin;
