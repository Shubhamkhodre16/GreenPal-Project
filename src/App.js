import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainHomePage from "./Pages/MainHomePage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainHomePage />} />
      </Routes>
    </Router>
  );
}

export default App;
