import React from "react";
import "./PageHeader.css";

const PageHeader = ({ children }) => {
  return (
    <>
      <div className="page-header">
        <div className="container">
          <div>
            <h2>{children}</h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default PageHeader;
