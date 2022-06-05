import ReactDOM from "react-dom/client";
import App from "views/App/App";
import "style.scss";
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(<App />);
