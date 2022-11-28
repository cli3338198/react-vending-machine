import { Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Snack from "./Snack";
import MainPage from "./MainPage";

/**
 * VendingMachine: 
 *
 * Props:
 *
 * State:
 *
 * VendingMachine -> Snack
 */
function VendingMachine() {
  return (
    <div className="VendingMachine">
      {/* <Navbar /> */}
      <Routes>
        <Route path="/:name" element={<Snack />} />
        <Route path="*" element={<MainPage />} />
      </Routes>
    </div>
  );
}

export default VendingMachine;
