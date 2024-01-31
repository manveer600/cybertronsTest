import React from "react";
import { useLocation } from "react-router-dom";

function Result() {
  const location = useLocation();
  console.log("state", location);

  // state.checked is an array
  const checkedArray = location.state.checked || [];

  // state.data is an object
  const dataObject = location.state.data || {};

  return (
    <div className="w-screen bg-gray-800 p-20 h-screen text-white text-center">
      <div>
        <h2 className="bold text-2xl underline">Checked Array:</h2>
        <pre>{JSON.stringify(checkedArray, null, 2)}</pre>
      </div>
      <div>
        <h2  className="bold text-2xl underline" >Data Object:</h2>
        <pre>{JSON.stringify(dataObject, null, 2)}</pre>
      </div>
    </ div>
  );
}

export default Result;
