import Home from "./pages/Home";
import Navbar from "./pages/Navbar";
import "./App.css";
import { Route, Routes } from "react-router";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
