import { Link } from "react-router-dom";

/**
 * Navbar:
 *
 * Props:
 *
 * State:
 *
 * VendingMachine -> Navbar
 */
function Navbar() {
  return (
    <nav className="Navbar">
      <Link to="/chips">Chips</Link>
      <Link to="/soda">Soda</Link>
      <Link to="/pretzels">Chips</Link>
    </nav>
  );
}

export default Navbar;
