import { useParams, Link } from "react-router-dom";

/**
 * Snack: returns snack details and link to return to main page component
 *        -- takes in a parameter of snack name
 * Props:
 *
 * State:
 *
 * VendingMachine -> Snack -> Link
 */

function Snack() {
  const { name } = useParams();

  return (
    <div className="Snack">
      <div>Your snack was {name}</div>
      <img src={`/${name}.png`} alt={name} />
      <Link to="/">Go Back</Link>
    </div>
  );
}

export default Snack;
