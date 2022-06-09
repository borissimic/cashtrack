import Header from "components/Header";
import Navigation from "components/Navigation";
import { ExpensesProvider } from "context/expenses.context";
import { Navigate, Route, Routes } from "react-router-dom";
import CalculationPage from "views/App/CalculationPage";
import ListPage from "views/App/ListPage";
import EditPage from "./EditPage";

function App() {
  const navItems = [
    { name: "ListPage", path: "/ListPage" },
    { name: "CalculationPage", path: "/CalculationPage" },
  ];

  return (
    <ExpensesProvider>
      <Header />
      <Navigation
        className="flex flex-align-center flex-justify-center  m-t-20"
        items={navItems}
      />
      <main className="flex flex-column flex-align-center m-t-20">
        <Routes>
          <Route path="/" element={<ListPage />} />
          <Route path="/CalculationPage" element={<CalculationPage />} />
          <Route path="/create" element={<EditPage />} />
          <Route path="/edit/:id" element={<EditPage />} />
        </Routes>
      </main>
    </ExpensesProvider>
  );
}

export default App;
