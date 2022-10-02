import "./CourseCard.css";
import "bootstrap/dist/css/bootstrap.min.css";

const CourseCard = ({ id, course, selected, toggleSelected }) => {
  return (
    <div
      className={`card m-1 p-2 ${
        selected.includes(course) ? "selected text-white" : ""
      }`}
      onClick={() => toggleSelected(course)}
    >
      <div className="card-body">
        <h5 className="card-title">
          {course.term} CS {course.number}
        </h5>
        <p className="card-text">{course.title}</p>
      </div>
      <div className="align-bottom text-center">
        <hr />
        <p className="card-text ">{course.meets}</p>
      </div>
    </div>
  );
};

export default CourseCard;
