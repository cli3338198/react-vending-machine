import { useParams, Link } from "react-router-dom";

/**
 * Snack:
 *
 * Props:
 *
 * State:
 *
 * VendingMachine -> Snack
 */
function Snack() {
  const { name } = useParams();
  return (
    <div className="Snack">
      <div>Your snack was {name}</div>
      <Link to="/">Go Back</Link>
    </div>
  );
}

export default Snack;
