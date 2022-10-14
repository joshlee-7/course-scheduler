import "./CourseCard.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

const CourseCard = ({ id, course, isSelected, toggleSelected, conflicts }) => {
  console.log(conflicts);
  return (
    <div
      className={`card m-1 p-2 ${isSelected ? "selected text-white" : ""} ${
        conflicts.includes(id) ? "p-3 mb-2 bg-danger" : ""
      }`}
      onClick={() => !conflicts.includes(id) && toggleSelected(id)}
    >
      <div className="card-body">
        <h5 className="card-title">
          {course.term} CS {course.number}
        </h5>
        <p className="card-text">{course.title}</p>
      </div>
      <div className="align-bottom text-center">
        <p className="card-text ">{course.meets}</p>
        <hr />
        <Link to={`/edit/${id}`}>Edit</Link>
      </div>
    </div>
  );
};

export default CourseCard;
