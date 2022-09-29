import Coursecard from "./Coursecard";

const Courselist = ({ courses }) => {
  return (
    <div>
      {Object.entries(courses).map(([id, course]) => (
        <Coursecard key={id} course={course} />
      ))}
    </div>
  );
};

export default Courselist;
