import "./CourseCard.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import { useAuthState } from "../../utilities/firebase";
import { useProfile } from "../../utilities/profile";

const CourseCard = ({ id, course, isSelected, toggleSelected, conflicts }) => {
  const [user] = useAuthState();
  const [profile, profileLoading, profileError] = useProfile();

  if (profileError) return <h1>Error loading profile: {`${profileError}`}</h1>;
  if (profileLoading) return <h1>Loading user profile</h1>;
  if (!profile) return <h1>No profile data</h1>;
  return (
    <div
      data-cy="course"
      className={`card m-1 p-2 ${isSelected ? "selected text-white" : ""} ${
        conflicts.includes(id) ? "p-3 mb-2 bg-danger" : ""
      }`}
      onClick={() => !conflicts.includes(id) && toggleSelected(id)}
    >
      <div className="card-body">
        <h5 className="card-title">
          {course.term} CS {course.number}
        </h5>
        <p className="card-text">{course.title}</p>
      </div>
      <div className="align-bottom text-center">
        <p className="card-text ">{course.meets}</p>
        <hr />
        {profile?.isAdmin && <Link to={`/edit/${id}`}>Edit</Link>}
      </div>
    </div>
  );
};

export default CourseCard;
