import StudentInfo from "../StudentInfo";
import Link from "next/link";

export default function Week2() {
  return (
    <>
      <h1 className="text-4xl">My Shopping List</h1>
      <p>
        <StudentInfo />
      </p>

      <p>
        <Link href="../">Back to Home</Link>
      </p>
    </>
  );
}
