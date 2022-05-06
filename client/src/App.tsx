import { Routes, Route } from "react-router-dom";
import { Customers } from "./components/Customers";
import { Requests } from "./components/Requests";

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/customers" element={<Customers />} />
        <Route path="/requests" element={<Requests />} />
      </Routes>
    </>
  );
};
