import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Table from "react";
import "./AddEntry.css";
import { FaInfo } from "react-icons/fa";

function AddEntry() {
  const [formData, setFormData] = useState({
    name: "",
    city: "",
    type: true,
    amount: "",
    comments: "",
  });
  const navigate = useNavigate();

  function handleChange(event) {
    const { name, value, type, checked } = event.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }
  function handleSubmit(event) {
    event.preventDefault();
    navigate("/Dashboard");
  }
  return (
    <div className="container">
      <div className="entry-container">
        <h1 className="title">Add New People</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Name"
            onChange={handleChange}
            name="name"
            value={formData.name}
          />
          <input
            type="text"
            placeholder="City"
            onChange={handleChange}
            name="city"
            value={formData.city}
          />
          <div className="select-container">
            <p className="select-container-title">Presentation Types</p>
            <div className="select-type">
              <input
                type="radio"
                id="rupees"
                name="present"
                value="rupees"
                //   checked={formData.money === "rupees"}
                checked="checked"
                onChange={handleChange}
              />
              <label htmlFor="rupees">Money</label>
            </div>

            <div className="select-type">
              <input
                type="radio"
                id="thing"
                name="present"
                value="thing"
                //   checked={formData.gift === "thing"}
                onChange={handleChange}
              />
              <label htmlFor="thing">Thing</label>
            </div>

            <div className="select-type">
              <input
                type="radio"
                id="both"
                name="present"
                value="both"
                //   checked={formData.employment === "both"}
                onChange={handleChange}
              />
              <label htmlFor="both">Both</label>
            </div>
          </div>

          <input
            className="amount-input"
            type="text"
            placeholder="Amount"
            onChange={handleChange}
            name="amount"
            value={formData.amount}
          />
          <textarea
            value={formData.comments}
            placeholder="Comments"
            onChange={handleChange}
            name="comments"
          />
          <button className="add-button">Add</button>
        </form>

        <table>
          <tbody>
            <tr>
              <td>Name</td>
              <td>Amount</td>
            </tr>
            {formData.map((info, ind) => {
              return (
                <tr key={ind}>
                  <td>{info.name}</td>
                  <td>{info.amount}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AddEntry;
