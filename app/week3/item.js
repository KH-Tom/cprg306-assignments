import React from "react";

const Item = ({ name, quantity, category }) => {
  return (
    <li className="p-2 m-4 bg-slate-900 max-w-sm">
      <div className="flex justify-between items-center mb-2">
        <span className="ext-xl font-bold">{name}</span>
        <span className="text-sm">{quantity}</span>
      </div>
      <div className="text-sm mt-1">
        <span className="text-gray-400">{category}</span>
      </div>
    </li>
  );
};

export default Item;
