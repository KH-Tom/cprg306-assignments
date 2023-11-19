import React, { useEffect, useState } from "react";
import { getItems, addItem } from "../_services/shopping-list-service";

function ShoppingList({ user }) {
  const [items, setItems] = useState([]);

  // Load items from Firestore
  async function loadItems() {
    const loadedItems = await getItems(user.uid);
    setItems(loadedItems);
  }

  // Add a new item
  async function handleAddItem(newItem) {
    const id = await addItem(user.uid, newItem);
    setItems([...items, { ...newItem, id }]);
  }

  // Load items on component mount
  useEffect(() => {
    loadItems();
  }, []);

  // Render your shopping list component here
  // ...
}

export default ShoppingList;
