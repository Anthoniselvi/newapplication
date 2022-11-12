import React from "react";
import { useNavigate } from "react-router-dom";
import "./AddEvent.css";

function AddEvent() {
  const navigate = useNavigate();

  function handleAddEventSubmit() {
    navigate("/Dashboard");
  }
  return (
    <div className="container">
      <div className="addevent-container">
        <h1 className="addevent-title">Create New Event</h1>
        <form onSubmit={handleAddEventSubmit} className="addevent-form">
          <input
            className="addevent-input"
            type="text"
            placeholder="EventName"
            // onChange={handleAddEventChange}
            name="name"
            // value={}
          />
          <input
            className="addevent-input"
            type="date"
            placeholder="Event Date"
            // onChange={handleChange}
            name="date"
            // value={formData.city}
          />

          <input
            className="addevent-input"
            type="text"
            placeholder="Place"
            // onChange={handleChange}
            name="place"
            // value={formData.amount}
          />

          <button className="add-event-button">Add</button>
        </form>
      </div>
    </div>
  );
}

export default AddEvent;
