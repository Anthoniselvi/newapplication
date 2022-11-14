import React, { useState } from "react";
import "./AddEntry.css";

function Entry() {
  const [array, setArray] = useState([]);
  const [inputData, setInputData] = useState({
    name: "",
    city: "",
    number: "",
  });

  function data(e) {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  }

  function addInputData(e) {
    e.preventDefault();
    const { name, number } = inputData;

    setArray([...array, { name, number }]);
    console.log(array.length, array);
    // setInputData({ name: "", number: "" });
  }

  // function deleteData(i) {
  //   let total = [...array];
  //   total.splice(i, 1);
  //   setArray(total);
  // }
  return (
    <div className="container">
      <div className="entry-container">
        <h1 className="title">Add New People</h1>
        <form onSubmit={addInputData}>
          <input
            type="text"
            placeholder="Name"
            onChange={data}
            name="name"
            value={inputData.name || ""}
          />
          <input
            type="text"
            placeholder="City"
            onChange={data}
            name="city"
            value={inputData.city}
          />

          <input
            className="amount-input"
            type="number"
            placeholder="Amount"
            onChange={data}
            name="number"
            value={inputData.number || ""}
          />

          <button className="add-button" type="submit">
            Add
          </button>
        </form>

        <table className="table-list">
          <tbody>
            <tr className="table-row">
              <th className="table-cell">Name</th>
              <th className="table-cell">Amount</th>
            </tr>
            {array &&
              array.map((item, i) => {
                return (
                  <tr key={i} className="table-row">
                    <td className="table-cell">{item.name}</td>
                    <td className="table-cell">{item.number}</td>
                    {/* <td>
                      <button>Edit</button>
                    </td>
                    <td>
                      <button onClick={() => deleteData(i)}>Delete</button>
                    </td> */}
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Entry;
