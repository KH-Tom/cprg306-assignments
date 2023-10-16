"use client";

import React, { useState } from "react";
import Item from "./item.js";
import itemsData from "./items.json";

export default function ItemList() {
  const [sortBy, setSortBy] = useState("name");

  // Sort the items
  const sortedItems = [...itemsData].sort((a, b) => {
    if (sortBy === "name") {
      return a.name.localeCompare(b.name);
    } else if (sortBy === "category") {
      return a.category.localeCompare(b.category);
    } else {
      return 0;
    }
  });

  const handleSortByName = () => {
    setSortBy("name");
  };

  const handleSortByCategory = () => {
    setSortBy("category");
  };

  const handleSortByGroupedCategory = () => {
    setSortBy("grouped");
  };

  const groupByCategory = () => {
    const grouped = sortedItems.reduce((acc, curr) => {
      if (!acc[curr.category]) {
        acc[curr.category] = [];
      }
      acc[curr.category].push(curr);
      return acc;
    }, {});

    // Sort categories directly
    const sortedCategories = Object.keys(grouped).sort();

    return sortedCategories.map((category) => (
      <div key={category}>
        <h2 className="capitalize">{category}</h2>
        <ul>
          {grouped[category].map((item) => (
            <Item key={item.id} {...item} />
          ))}
        </ul>
      </div>
    ));
  };

  return (
    <main className="bg-slate-950 m-4">
      <h2 className="text-3xl font-bold m-2">Shopping List</h2>
      <div>
        <label htmlFor="sort">Sort by: </label>
        <button
          className={`bg-${
            sortBy === "name" ? "orange-500" : "orange-700"
          } p-1 m-2 w-28`}
          onClick={handleSortByName}
        >
          Name
        </button>
        <button
          className={`bg-${
            sortBy === "category" ? "orange-500" : "orange-700"
          } p-1 m-2 w-28`}
          onClick={handleSortByCategory}
        >
          Category
        </button>
        <button
          className={`bg-${
            sortBy === "grouped" ? "orange-500" : "orange-700"
          } p-1 m-2 w-28`}
          onClick={handleSortByGroupedCategory}
        >
          Grouped Category
        </button>
      </div>
      <ul>
        {sortBy !== "grouped"
          ? sortedItems.map((item) => <Item key={item.id} {...item} />)
          : groupByCategory()}
      </ul>
    </main>
  );
}
