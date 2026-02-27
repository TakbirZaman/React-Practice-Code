import { useLocation, useNavigate } from "react-router-dom";

const UserProfile = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const user = location.state;

  if (!user) {
    return (
      <div className="profile-card">
        <h2>No User Data Found</h2>
        <p>Please complete registration first.</p>
        <button onClick={() => navigate("/")}>
          Go to Registration
        </button>
      </div>
    );
  }

  return (
    <div className="profile-card">
      <h2>User Profile</h2>

      <p><strong>Full Name:</strong> {user.firstName} {user.lastName}</p>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Phone:</strong> {user.phone}</p>
      <p><strong>Date of Birth:</strong> {user.dob}</p>
      <p><strong>Address:</strong> {user.address}</p>
      <p><strong>City:</strong> {user.city}</p>
      <p><strong>Gender:</strong> {user.gender}</p>

      {user.facebook && (
        <p><strong>Facebook:</strong> <a href={user.facebook} target="_blank" rel="noreferrer">View Profile</a></p>
      )}

      {user.linkedin && (
        <p><strong>LinkedIn:</strong> <a href={user.linkedin} target="_blank" rel="noreferrer">View Profile</a></p>
      )}

      {user.github && (
        <p><strong>GitHub:</strong> <a href={user.github} target="_blank" rel="noreferrer">View Profile</a></p>
      )}

      {user.website && (
        <p><strong>Website:</strong> <a href={user.website} target="_blank" rel="noreferrer">Visit Website</a></p>
      )}

      <button onClick={() => navigate("/products")}>
        Go to Products
      </button>
    </div>
  );
};

export default UserProfile;