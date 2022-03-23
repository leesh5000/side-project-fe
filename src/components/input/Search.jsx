import React from "react";

const Search = ({ name, placeholder, svg }) => {
  const onSubmit = (e) => {
    e.preventDefault();
  };

  const onChange = (e) => {
    const { name, value } = e.currentTarget;
    console.log(`${name}: ${value}`);
  };

  return (
    <form onSubmit={onSubmit} className="relative">
      <input
        className="border-2 border-gray-700 rounded-lg outline-none px-1 h-8"
        type="text"
        name={name}
        placeholder={placeholder}
        onChange={onChange}
      />
      <button>{svg}</button>
    </form>
  );
};

export default Search;
