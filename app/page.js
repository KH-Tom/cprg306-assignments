import Link from "next/link";
import StudentInfo from "./StudentInfo";

export default function Home() {
  return (
    <>
      <h1>CPRG 306: Web Development 2 - Assignments</h1>
      <main>
        <StudentInfo />
        <p>
          <Link href="./week2">Week2</Link>
        </p>
        <p>
          <Link href="./week3">Week3</Link>
        </p>

        <p>
          <Link href="./week4">Week4</Link>
        </p>
        <p>
          <Link href="./week5">Week5</Link>
        </p>
        <p>
          <Link href="./week6">Week6</Link>
        </p>
        <p>
          <Link href="./week7">Week7</Link>
        </p>
      </main>
    </>
  );
}
