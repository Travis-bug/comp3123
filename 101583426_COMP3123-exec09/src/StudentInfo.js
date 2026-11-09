// Shows the lab information it receives from App through props.
function StudentInfo(props) {
  return (
    <div className="Student-info">
      <h1>{props.title}</h1>
      <h2>{props.subtitle}</h2>
      <h3>{props.studentId}</h3>
      <h4>{props.name}</h4>
      <h5>{props.school}</h5>
    </div>
  );
}

export default StudentInfo;
