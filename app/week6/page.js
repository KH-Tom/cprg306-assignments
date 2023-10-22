"use client";

import React, { useState } from "react";
import NewItem from "./new-item";
import ItemList from "./item-list";
import itemsData from "./items.json";

function Page() {
  const [items, setItems] = useState(itemsData);

  const handleAddItem = (item) => {
    setItems((prevItems) => [...prevItems, item]);
  };

  return (
    <main className="bg-slate-950 p-2 m-2 max-w-sm w-full">
      <h2 className="text-3xl font-bold mb-4">Shopping List</h2>
      <h3 className="text-xl font-bold">Add New Item</h3>
      <NewItem onAddItem={handleAddItem} />
      <div className="mt-8">
        <ItemList items={items} />
      </div>
    </main>
  );
}

export default Page;
