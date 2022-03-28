import logo from "./logo.svg";
import "./App.css";
import "./index.css";
import { Routes, Route } from "react-router-dom";
import Detail from "./components/Detail";
import Home from "./components/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:productName" element={<Detail />} />
    </Routes>
  );
}
export default App;
