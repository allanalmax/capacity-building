import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/profile">Profile</Link>
      <Link to="/facts">Facts</Link>
      <Link to="/predict">Predict</Link>
      <Link to="/tasks">Tasks</Link>
    </div>
  );
};
