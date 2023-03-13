import React, { useState } from "react";
import list from "./data";

const Input = () => {
  return (
    <div>
      <input
        type="text"
        onChange={handleChange}
        value={searchInput}
        placeholder="Search..."
      />
    </div>
  );
};

export default Input;
