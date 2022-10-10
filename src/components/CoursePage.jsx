import { useState } from "react";
import CourseList from "./CourseList/CourseList";
import MyCourseButton from "./MyCoursesButton";
import Modal from "./Modal/Modal";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

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
  const openModal = () => setOpen(true);
  const closeModal = () => setOpen(false);

  const toggleSelected = (item) =>
    setSelected(
      selected.includes(item)
        ? selected.filter((x) => x !== item)
        : [...selected, item]
    );
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
          <Modal selectedClasses={selected} open={open} close={closeModal} />
        </div>
      </div>
      <CourseList
        courses={courses}
        term={selection}
        selected={selected}
        toggleSelected={toggleSelected}
      />
    </div>
  );
};

export default CoursePage;
