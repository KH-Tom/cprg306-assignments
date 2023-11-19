import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc, query, where } from "firebase/firestore";

// Function to get items for a specific user
export async function getItems(userId) {
  const itemsCol = collection(db, "users", userId, "items");
  const q = query(itemsCol);
  const querySnapshot = await getDocs(q);
  const items = [];
  querySnapshot.forEach((doc) => {
    items.push({ id: doc.id, ...doc.data() });
  });
  return items;
}

// Function to add a new item
export async function addItem(userId, item) {
  const itemsCol = collection(db, "users", userId, "items");
  const docRef = await addDoc(itemsCol, item);
  return docRef.id;
}
