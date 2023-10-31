"use client";

import React, { useState } from "react";
import itemsData from "./items.json";
import Item from "./item";

function ItemList({ items: initialItems, onItemSelect }) {
  const [items, setItems] = useState(initialItems || itemsData);
  const [sortType, setSortType] = useState(null);

  const sortItems = (type) => {
    const sortedItems = [...items];
    if (type === "name") {
      sortedItems.sort((a, b) => a.name.localeCompare(b.name));
    } else if (type === "category") {
      sortedItems.sort((a, b) => a.category.localeCompare(b.category));
    }
    setItems(sortedItems);
    setSortType(type);
  };

  return (
    <div className="max-w-sm w-full">
      <div className="mt-8">
        <div>
          <label htmlFor="sort">Sort by: </label>
          <button
            onClick={() => sortItems("name")}
            className={`bg-orange-${
              sortType === "name" ? "700" : "500"
            } p-1 m-2 w-28`}
          >
            Name
          </button>
          <button
            onClick={() => sortItems("category")}
            className={`bg-orange-${
              sortType === "category" ? "700" : "500"
            } p-1 m-2 w-28`}
          >
            Category
          </button>
        </div>
        <ul>
          {items.map((item) => (
            <Item key={item.id} item={item} onSelect={onItemSelect} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ItemList;
