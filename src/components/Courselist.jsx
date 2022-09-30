import Coursecard from "./Coursecard";
import './Courselist.css'

const Courselist = ({ courses }) => {
  return (
    <div className="course-list">
      {Object.entries(courses).map(([id, course]) => (
        <Coursecard key={id} course={course} />
      ))}
    </div>
  );
};

export default Courselist;
