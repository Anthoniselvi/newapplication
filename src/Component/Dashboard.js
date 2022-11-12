import React from "react";
import "./Dashboard.css";
import AddEvent from "./AddEvent";
import AddEntry from "./AddEntry";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();

  function moveToAddEntry() {
    navigate("/AddEntry");
  }

  return (
    <div className="container">
      <div className="dashboard-container">
        <h1>Hello Name!</h1>
        <div className="event-outer-box" onClick={moveToAddEntry}>
          <h3>Event List</h3>
          <div className="event-inner-box">
            <h4>Event Name</h4>
            <table>
              <tr>
                <td>Amount</td>
                <td>Nil</td>
              </tr>
              <tr>
                <td>Things</td>
                <td>Nil</td>
              </tr>
            </table>
          </div>
          <div className="event-inner-box">
            <h4>Event Name</h4>
            <table>
              <tr>
                <td>Amount</td>
                <td>Nil</td>
              </tr>
              <tr>
                <td>Things</td>
                <td>Nil</td>
              </tr>
            </table>
          </div>
          <div className="event-inner-box">
            <h4>Event Name</h4>
            <table>
              <tr>
                <td>Amount</td>
                <td>Nil</td>
              </tr>
              <tr>
                <td>Things</td>
                <td>Nil</td>
              </tr>
            </table>
          </div>
          <div className="event-inner-box">
            <h4>Event Name</h4>
            <table>
              <tr>
                <td>Amount</td>
                <td>Nil</td>
              </tr>
              <tr>
                <td>Things</td>
                <td>Nil</td>
              </tr>
            </table>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
export default Dashboard;
