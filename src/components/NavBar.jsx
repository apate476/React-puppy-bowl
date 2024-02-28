import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/form">Add New Player</Link>
    </nav>
  );
}

export default NavBar;
