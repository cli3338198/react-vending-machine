import { BrowserRouter } from "react-router-dom";
import VendingMachine from "./VendingMachine";

/**
 * App:
 *
 * Props:
 *
 * State:
 *
 * App -> VendingMachine
 */
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <VendingMachine />
      </BrowserRouter>
    </div>
  );
}

export default App;
