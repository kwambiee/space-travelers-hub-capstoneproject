import "./App.css";
import { Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import HomePage from "./components/pages/Home";
import Missions from "./components/pages/Mission";
import Profile from "./components/pages/Profile";

function App() {
  return (
    <div className='App'>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/missions' element={<Missions />} />
        <Route path='/profile' element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
