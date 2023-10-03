import React from "react";
import ItemList from "./item-list";
import Link from "next/link";

const Page = () => {
  return (
    <main className="bg-slate-950">
      <h1 className="text-3xl font-bold m-2">Shopping List</h1>
      <p>
        <Link href="../">Home</Link>
      </p>
      <ItemList />
    </main>
  );
};

export default Page;
