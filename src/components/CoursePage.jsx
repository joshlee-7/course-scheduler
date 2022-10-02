import { useState } from "react";
import Courselist from "./CourseList/CourseList";
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

  const toggleSelected = (item) =>
    setSelected(
      selected.includes(item)
        ? selected.filter((x) => x !== item)
        : [...selected, item]
    );
  console.log(selected);
  return (
    <div>
      <TermSelector selection={selection} setSelection={setSelection} />
      <Courselist
        courses={courses}
        term={selection}
        selected={selected}
        toggleSelected={toggleSelected}
      />
    </div>
  );
};

export default CoursePage;
