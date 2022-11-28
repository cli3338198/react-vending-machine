import { useParams, Link } from "react-router-dom";

/**
 * Snack: returns snack details and link to return to main page component
 *        -- takes in a parameter of snack name
 * Props:
 *
 * State:
 *
 * VendingMachine -> Snack
 */
const snacks = ["chips", "soda", "pretzels"];

function Snack() {
  const { name } = useParams();
  let img = null;
  if(snacks.includes(name)){

  }

  return (
    <div className="Snack">
      <div>Your snack was {name}</div>
      <img src={`/${name}.png`} />
      <Link to="/">Go Back</Link>
    </div>
  );
}

export default Snack;
