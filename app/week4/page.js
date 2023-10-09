"use client";

import NewItem from "./new-item";

function Page() {
  return (
    <div className="container mx-auto mt-10">
      <h1 className="text-2xl mb-6">Add a New Item</h1>
      <NewItem />
    </div>
  );
}

export default Page;
