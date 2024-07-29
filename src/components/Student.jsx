import PropTypes from 'prop-types'; 
export const Student = (props) => {
  return (
    <>
    <div className="Student">
    <table>
        <tbody>
        <tr>
            <th>Student ID:</th>
            <td>{props.studentID}</td>
        </tr>
        <tr>
            <th>Student Name:</th>
            <td>{props.studentName}</td>
        </tr>
        <tr>
            <th>Student Age:</th>
            <td>{props.studentAge}</td>
        </tr>
        <tr>
            <th>Student P/A:</th>
            <td>{props.studentPA? "Yes":"No"}</td>
        </tr>
        </tbody>
    </table>
    </div>
    </>
  )
}

Student.propTypes = {
    studentID: PropTypes.number.isRequired,
    studentName: PropTypes.string.isRequired,
    studentAge: PropTypes.number.isRequired,
    studentPA: PropTypes.bool.isRequired
};

Student.defaultProps = {
    studentID: "No ID Found",
    studentName: "No Name Found",
    studentAge: "No Age Found",
    studentPA: false
}