import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const MyCourseButton = ({ openModal }) => {
  return (
    <div>
      <button type="button" class="btn btn-primary" onClick={openModal}>
        My Courses
      </button>
    </div>
  );
};

export default MyCourseButton;
