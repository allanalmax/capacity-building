import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/profile">Profile</Link>
      <Link to="/facts">Facts</Link>
      <Link to="/predict">Predict</Link>
      <Link to="/tasks">Tasks</Link>
      <Link to="/form">Form</Link>
      <Link to="/toggle">TogglePage</Link>
      <Link to="/counter">Counter Page</Link>
      <Link to="/person">Person</Link>
    </div>
  );
};
