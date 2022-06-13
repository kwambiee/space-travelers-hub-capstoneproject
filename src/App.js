import "./App.css";
import { Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import HomePage from "./components/pages/Home";
import Missions from "./components/pages/Mission";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/missions" element={<Missions />} />
      </Routes>
    </div>
  );
}

export default App;
