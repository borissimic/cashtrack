import Header from "components/Header";

import { Navigate, Route, Routes } from "react-router-dom";
import EditPage from "./EditPage";
import ExpenseDashboard from "./ExpenseDashboard";

function App() {
  return (
    <>
      <Header />

      <main className="flex flex-column flex-align-center m-t-20">
        <Routes>
          <Route path="*" element={<Navigate to="/expenses/all" replace />} />
          <Route path="/expenses/*" element={<ExpenseDashboard />} />
          <Route path="/create" element={<EditPage />} />
          <Route path="/edit/:id" element={<EditPage />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
