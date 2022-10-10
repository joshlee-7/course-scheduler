const ModalCourseInfo = ({ course }) => {
  console.log(course);
  return (
    <div>
      <div className="card-body">
        <h5 className="card-title">
          {course.term} CS {course.number}
        </h5>
        <p className="card-text">{course.title}</p>
      </div>
      <div className="align-bottom text-center">
        <p className="card-text ">{course.meets}</p>
      </div>
      <hr />
    </div>
  );
};

export default ModalCourseInfo;
