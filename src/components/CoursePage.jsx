import { useState } from "react";
import CourseList from "./CourseList/CourseList";
import MyCourseButton from "./MyCoursesButton";
import Modal from "./Modal/Modal";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import {
  enableCoursesWithNoConflicts,
  disableCoursesWithConflicts,
} from "../utilities/courseConflict";

const terms = ["Fall", "Winter", "Spring"];

const TermButton = ({ term, selection, setSelection }) => (
  <div>
    <input
      type="radio"
      id={term}
      className="btn-check"
      checked={term === selection}
      autoComplete="off"
      onChange={() => setSelection(term)}
    />
    <label className="btn btn-success mb-1 p-2" htmlFor={term}>
      {term}
    </label>
  </div>
);

const TermSelector = ({ selection, setSelection }) => (
  <div className="btn-group">
    {terms.map((term) => (
      <TermButton
        key={term}
        term={term}
        selection={selection}
        setSelection={setSelection}
      />
    ))}
  </div>
);

const CoursePage = ({ courses }) => {
  const [selection, setSelection] = useState(terms[0]);
  const [selected, setSelected] = useState([]);
  const [open, setOpen] = useState(false);
  const [conflicts, setConflicts] = useState([]);
  const openModal = () => setOpen(true);
  const closeModal = () => setOpen(false);

  const toggleSelected = (id) => {
    if (selected.includes(id)) {
      const latest = selected.filter((x) => x !== id);
      console.log(latest);
      setConflicts(
        enableCoursesWithNoConflicts(conflicts, latest, courses, id)
      );
      setSelected(latest);
    } else {
      setConflicts(
        disableCoursesWithConflicts(conflicts, id, courses, selected)
      );
      setSelected([...selected, id]);
    }
  };
  console.log(selected);
  return (
    <div>
      <div className="d-flex bd-highlight mb-3">
        <div className="me-auto p-2 bd-highlight">
          <TermSelector selection={selection} setSelection={setSelection} />
        </div>
        <div className=" bd-highlight">
          <MyCourseButton openModal={openModal} />
        </div>
        <div>
          <Modal
            selectedClasses={selected}
            open={open}
            close={closeModal}
            courses={courses}
          />
        </div>
      </div>
      <CourseList
        courses={courses}
        term={selection}
        selected={selected}
        toggleSelected={toggleSelected}
        conflicts={conflicts}
      />
    </div>
  );
};

export default CoursePage;