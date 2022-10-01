import Coursecard from "./Coursecard";
import './Courselist.css'

const CourseList = ({ courses, term }) => {
  return (
    <div className="course-list">
      {Object.entries(courses).map(([id, course]) => {
        console.log(course);
        return course.term === term && <Coursecard key={id} course={course} />

})}
      
    </div>
  );
};

export default CourseList;
