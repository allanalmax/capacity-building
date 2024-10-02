import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <div className="navbar">
      <Link to="/">Home</Link>
      <Link to="/person">Person</Link>
      <Link to="/login">Login</Link>
    </div>
  );
};
