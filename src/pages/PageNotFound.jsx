import React from "react";
import Header from "../components/Header";
import "./PageNotFound.css";

const PageNotFound = ({cart}) => {
  return (
    <>
    <title>Page Not Found</title>
    <link rel="icon" type="image/svg+xml" href="/404-favicon.png" />
      <Header cart={cart} />
      <div className="page-not-found">
        <h1>Page Not Found</h1>
        <p className="page-not-found-desc">
          The page you are looking for does not exist.
        </p> 
      </div>
    </>
  );
};

export default PageNotFound;
