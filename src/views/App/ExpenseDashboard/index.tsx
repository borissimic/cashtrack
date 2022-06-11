import Navigation from "components/Navigation";
import { Routes, Route, Navigate } from "react-router-dom";
import CalculationPage from "../CalculationPage";
import ListPage from "./ListPage";

const ExpenseDashboard = () => {
  const navItems = [
    { name: "ListPage", path: "all" },
    { name: "CalculationPage", path: "CalculationPage" },
  ];

  return (
    <>
      <Navigation
        className="flex flex-align-center flex-justify-center  m-t-20"
        items={navItems}
      />
      <Routes>
        <Route path="*" element={<Navigate to="all" replace />} />
        <Route path="all" element={<ListPage />} />
        <Route path="CalculationPage" element={<CalculationPage />} />
      </Routes>
    </>
  );
};

export default ExpenseDashboard;
