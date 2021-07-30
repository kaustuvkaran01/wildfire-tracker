import React from "react";
import loader from "../assets/loader.gif";

export default function Loader() {
  return (
    <div className="loader">
      <img src={loader} alt="Loading"/>
      <h1>Fetching Data...</h1>
    </div>
  );
}
