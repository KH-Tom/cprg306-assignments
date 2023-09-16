import Link from "next/link";

let name = "Tom Ho";
let course = "CPRG 306-SA1";

export default function StudentInfo() {
  return (
    <main>
      <h1>Name: {name}</h1>
      <h1>Course section: {course}</h1>
      <Link href="https://github.com/KH-Tom/cprg306-assignments">
        https://github.com/KH-Tom/cprg306-assignments
      </Link>
    </main>
  );
}
