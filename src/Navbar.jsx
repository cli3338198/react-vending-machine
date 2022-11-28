import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

/**
 * Navbar: returns navbar component with links to snacks
 *
 * Props:
 *
 * State:
 *
 * VendingMachine -> Navbar -> Link
 */
function Navbar() {
  const location = useLocation();

  return (
    <nav className="Navbar">
      <Link to="/chips">
        <span
          style={{
            textDecoration: `${
              location.pathname === "/chips" ? "underline" : ""
            }`,
          }}
        >
          Chips
        </span>
      </Link>
      <Link to="/soda">
        <span
          style={{
            textDecoration: `${
              location.pathname === "/soda" ? "underline" : ""
            }`,
          }}
        >
          Soda
        </span>
      </Link>
      <Link to="/pretzels">
        <span
          style={{
            textDecoration: `${
              location.pathname === "/pretzels" ? "underline" : ""
            }`,
          }}
        >
          Pretzels
        </span>
      </Link>
    </nav>
  );
}

export default Navbar;
