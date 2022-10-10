import "./Modal.css";
import CourseCard from "../CourseCard/CourseCard";
import ModalCourseInfo from "../ModalCourseInfo";

const Modal = ({ selectedClasses, open, close, courses }) => {
  console.log(selectedClasses);
  console.log(courses["F111"]);
  return (
    <div
      className={`modal ${open ? "modal-show" : ""}`}
      tabIndex="-1"
      role="dialog"
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <button
              type="button"
              className="btn-close"
              aria-label="Close"
              onClick={close}
            />
          </div>
          <div className="modal-body">
            {selectedClasses.length === 0 ? (
              <h2>No courses selected. Click on classes you want to add.</h2>
            ) : (
              selectedClasses.map((id) => {
                return <ModalCourseInfo key={id} course={courses[id]} />;
              })
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
