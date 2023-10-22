import React from "react";

function Item({ item }) {
  return (
    <li className="p-2 m-4 bg-slate-900 max-w-sm">
      <h2 className="text-xl font-bold">{item.name}</h2>
      <div className="text-sm">
        Buy {item.quantity} in {item.category}
      </div>
    </li>
  );
}

export default Item;
