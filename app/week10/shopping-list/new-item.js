"use client";

import React, { useState } from "react";

function NewItem({ onAddItem }) {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("produce");

  const generateID = () => {
    return Math.random().toString(36).substr(2, 9);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddItem({ id: generateID(), name, quantity, category });
    setName("");
    setQuantity(1);
    setCategory("produce");
  };

  return (
    <form onSubmit={handleSubmit} className="text-black">
      <div className="mb-2">
        <input
          type="text"
          placeholder="Item name"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full mt-1 border-2 border-gray-300 p-2 rounded-lg font-sans"
        />
      </div>
      <div className="flex justify-between">
        <input
          type="number"
          min="1"
          max="99"
          required
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          className="w-20 ml-1 border-2 border-gray-300 p-2 rounded-lg font-sans"
        />
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="ml-1 border-2 border-gray-300 p-2 rounded-lg font-sans"
        >
          <option value="" disabled>
            Category
          </option>
          <option value="produce">Produce</option>
          <option value="dairy">Dairy</option>
          <option value="bakery">Bakery</option>
          <option value="meat">Meat</option>
          <option value="frozen foods">Frozen Foods</option>
          <option value="canned goods">Canned Goods</option>
          <option value="dry goods">Dry Goods</option>
          <option value="beverages">Beverages</option>
          <option value="snacks">Snacks</option>
          <option value="household">Household</option>
          <option value="other">Other</option>
        </select>
      </div>
      <button
        type="submit"
        className="w-full mt-4 py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
      >
        +
      </button>
    </form>
  );
}

export default NewItem;
