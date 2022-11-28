import { Link } from "react-router-dom";

/**
 * MainPage:
 *
 * Props:
 *
 * State:
 *
 * VendingMachine -> MainPage
 */
function MainPage() {
  return (
    <div className="MainPage">
      <Link to="/chips">Chips</Link>
      <Link to="/soda">Soda</Link>
      <Link to="/pretzels">Pretzels</Link>
    </div>
  );
}

export default MainPage;
