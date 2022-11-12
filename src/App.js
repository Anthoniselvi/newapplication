import "./App.css";
import React from "react";
import FrontPage from "./Component/FrontPage";
import Dashboard from "./Component/Dashboard";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import SubmitSignin from "./Component/SubmitSignin";
import SignupForm from "./Component/SignupForm";
import AddEvent from "./Component/AddEvent";
import AddEntry from "./Component/AddEntry";

function App() {
  return (
    <div className="container">
      {/* <SignupForm /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<FrontPage />} />
            <Route path="signin" element={<SubmitSignin />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="signup" element={<SignupForm />} />
            <Route path="addevent" element={<AddEvent />} />
            <Route path="addentry" element={<AddEntry />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
