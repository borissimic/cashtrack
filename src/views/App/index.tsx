import Header from "components/Header";
import Navigation from "components/Navigation";
import { ExpensesProvider } from "context/expenses.context";
import { Route, Routes } from "react-router-dom";
import CalculationPage from "views/App/CalculationPage";
import ListPage from "views/App/ListPage";

function App() {
  const navItems = [
    { name: "ListPage", path: "/ListPage" },
    { name: "CalculationPage", path: "/CalculationPage" },
  ];

  return (
    <ExpensesProvider>
      <Header />
      <main className="flex flex-column flex-align-center m-t-20 ">
        <Navigation className="" items={navItems} />
        <Routes>
          <Route path="/Listpage" element={<ListPage />} />
          <Route path="/CalculationPage" element={<CalculationPage />} />
        </Routes>
      </main>
    </ExpensesProvider>
  );
}

export default App;
