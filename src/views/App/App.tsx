import Header from "components/Header";
import Navigation from "components/Navigation";
import { Route, Routes } from "react-router-dom";
import CalculationPage from "views/CalculationPage";
import ListPage from "views/ListPage";

function App() {
  const navItems = [
    { name: "ListPage", path: "/ListPage" },
    { name: "CalculationPage", path: "/CalculationPage" },
  ];

  return (
    <>
      <Header />
      <main className="flex flex-column flex-align-center m-t-20 ">
        <Navigation className="" items={navItems} />
        <Routes>
          <Route path="/ListPage" element={<ListPage />} />
          <Route path="/CalculationPage" element={<CalculationPage />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
