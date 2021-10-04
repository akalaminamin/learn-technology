import React from "react";
import { NavLink } from "react-router-dom";
import "./NotFound.css";
const NotFound = () => {
  return (
    <div className="container error">
      <h1>
        4 <span>0</span> 4
      </h1>
      <h2>Oops... Page Not Found!</h2>
      <NavLink to="/">
        <button className="same-btn mt-3">Back to Home Page</button>
      </NavLink>
    </div>
  );
};

export default NotFound;
