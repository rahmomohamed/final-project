import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import "./styles/App.css";
import "font-awesome/css/font-awesome.min.css";
import HomePage from "./components/HomePage";
import PersonDetails from "./components/PersonDetails";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/person/:id" element={<PersonDetails />} />
      </Routes>
    </div>
  );
}

export default App;
