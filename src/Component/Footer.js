import React from "react";
import { FaUserAlt, FaTh, FaAlignJustify } from "react-icons/fa";
import "./Footer.css";
import { useNavigate } from "react-router-dom";

function Footer() {
  const navigate = useNavigate();

  function ClickAddEvent() {
    navigate("/AddEvent");
  }
  return (
    <div className="footer-container">
      <div className="footer-buttons">
        <FaTh />
        {/* <FaAlignJustify /> */}
        <FaUserAlt />
      </div>

      <button className="footer-add-button" onClick={ClickAddEvent}>
        {" "}
        +{" "}
      </button>
    </div>
  );
}

export default Footer;
