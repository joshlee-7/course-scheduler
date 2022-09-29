const Coursecard = ({ course }) => {
  return (
    <p>
      {course.term} CS {course.number}: {course.title}
    </p>
  );
};

export default Coursecard;
