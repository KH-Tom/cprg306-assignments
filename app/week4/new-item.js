"use client";

import { useState } from "react";

export default function NewItem() {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("produce");

  const handleSubmit = (event) => {
    //Prevent the form's default submission behavior.
    event.preventDefault();

    // Create a new item object
    const item = {
      name,
      quantity,
      category,
    };

    // Log the new item object to the console
    console.log(item);

    // Alert the user with the new item's details
    alert(`Name: ${name}, Quantity: ${quantity}, Category: ${category}`);

    // Reset the state variables to their initial values
    setName("");
    setQuantity(1);
    setCategory("produce");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="p-2 m-4 bg-slate-900 text-black max-w-sm w-full"
    >
      <div className="mb-2">
        <input
          // Create an input field of type text.
          type="text"
          placeholder="Item name"
          required
          className="w-full mt-1 border-2 border-gray-300 p-2 rounded-lg font-sans"
          value={name}
          // Use the setName function in an onChange event handler to update the state of name as the user types into the field.
          onChange={(e) => setName(e.target.value.toUpperCase())}
        />
      </div>
      <div className="flex justify-between">
        <input
          // Create an input field of type text.
          type="number"
          // Set the minimum value to 1 and the maximum value to 99.
          min="1"
          max="99"
          required
          className="w-20 ml-1 border-2 border-gray-300 p-2 rounded-lg font-sans"
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
        />

        <select
          // Create a select element for the category.
          className="ml-1 border-2 border-gray-300 p-2 rounded-lg font-sans"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
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
        //Create a submit button that triggers the handleSubmit function when clicked.
        type="submit"
        className="w-full mt-4 py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
      >
        +
      </button>
    </form>
  );
}
