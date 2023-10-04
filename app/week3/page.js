import ItemList from "./item-list";
import Link from "next/link";

export default function Page() {
  return (
    <main className="bg-slate-950">
      <h1 className="text-3xl font-bold m-2">Shopping List_revised</h1>
      <p>
        <Link href="../">Back to Home</Link>
      </p>
      <ItemList />
    </main>
  );
}
