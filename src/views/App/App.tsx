import Header from "components/Header";
import CalculationPage from "views/CalculationPage";
import ListPage from "views/ListPage";

function App() {
  return (
    <div className="App">
      <Header />
      <ListPage />
      <CalculationPage />
    </div>
  );
}

export default App;
