import React from "react";
import { Link } from "react-router-dom";

const BasicButton = ({ subject, path }) => {
  return (
    <li className="list-none">
      <Link to={path}>
        <button className="bg-indigo-500 shadow-lg shadow-indigo-500/50 hover:bg-indigo-600 active:bg-indigo-700 focus:outline-none focus:ring focus:ring-indigo-200 p-2 rounded-md text-white w-full">
          {subject}
        </button>
      </Link>
    </li>
  );
};

export default BasicButton;
