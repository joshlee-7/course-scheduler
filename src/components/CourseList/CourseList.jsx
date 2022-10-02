import CourseCard from "../CourseCard/CourseCard";
import "./Courselist.css";

const CourseList = ({ courses, term, selected, toggleSelected }) => {
  return (
    <div className="course-list">
      {Object.entries(courses).map(([id, course]) => {
        return (
          course.term === term && (
            <CourseCard
              key={id}
              course={course}
              selected={selected}
              toggleSelected={toggleSelected}
            />
          )
        );
      })}
    </div>
  );
};

export default CourseList;
