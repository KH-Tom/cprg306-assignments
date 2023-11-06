"use client";

import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // For redirection
import { useUserAuth } from "./_utils/auth-context"; // Your custom hook for authentication context
import NewItem from "./new-item";
import ItemList from "./item-list";
import itemsData from "./items.json";
import MealIdeas from "./meal-ideas";

function Page() {
  const { user } = useUserAuth(); // Get the user from the auth context
  const navigate = useNavigate(); // For redirection
  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState(null);

  // Check if a user is logged in, if not, redirect to the landing page
  if (!user) {
    navigate("/"); // Replace '/' with your landing page path if different
    return null; // This line is optional as navigate will redirect
  }

  const handleAddItem = (item) => {
    setItems((prevItems) => [...prevItems, item]);
  };

  const handleItemSelect = (itemName) => {
    const cleanedName = itemName
      .split(",")[0]
      .replace(
        /([\u2700-\u27BF]|[\uE000-\uF8FF]|�[�-�]|�[�-�]|[\u2011-\u26FF]|�[�-�])/g,
        ""
      )
      .trim();
    setSelectedItemName(cleanedName);
  };

  return (
    <main className="bg-slate-950 p-2 m-2 max-w-xl w-full flex">
      <div>
        <h2 className="text-3xl font-bold mb-4">Shopping List</h2>
        <NewItem onAddItem={handleAddItem} />
        <ItemList items={items} onItemSelect={handleItemSelect} />
      </div>
      <MealIdeas ingredient={selectedItemName} />
    </main>
  );
}

export default Page;
