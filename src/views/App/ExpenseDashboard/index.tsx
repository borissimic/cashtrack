import Navigation from "components/Navigation";
import { ExpenseProvider } from "context/expense.contex";
import { ExpensesProvider } from "context/expenses.context";
import { Routes, Route, Navigate } from "react-router-dom";
import CalculationPage from "./CalculationPage";
import ListPage from "./ListPage";

const ExpenseDashboard = () => {
  const navItems = [
    { name: "ListPage", path: "all" },
    { name: "CalculationPage", path: "CalculationPage" },
  ];

  return (
    <ExpensesProvider>
      <ExpenseProvider>
        <Navigation
          className="flex flex-align-center flex-justify-center  m-t-20"
          items={navItems}
        />
        <Routes>
          <Route path="*" element={<Navigate to="all" replace />} />
          <Route path="all" element={<ListPage />} />
          <Route path="CalculationPage" element={<CalculationPage />} />
        </Routes>
      </ExpenseProvider>
    </ExpensesProvider>
  );
};

export default ExpenseDashboard;
