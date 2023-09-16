import StudentInfo from "../StudentInfo";

const inlineBlockStyle = {
  display: "inline-block",
};

export default function Week2() {
  return (
    <>
      <h1 style={inlineBlockStyle}>My Shopping List</h1>
      <p style={inlineBlockStyle}>
        <StudentInfo />
      </p>
    </>
  );
}
