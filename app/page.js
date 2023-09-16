import Link from "next/link";
import StudentInfo from "./StudentInfo";

export default function Home() {
  return (
    <>
      <h1>CPRG 306: Web Development 2 - Assignments</h1>
      <main>
        <StudentInfo />
        <Link href="./week2">Week2</Link>
      </main>
    </>
  );
}
