import { Routes, Route } from "react-router-dom";
import AllPlayers from "./components/AllPlayers";
import SinglePlayer from "./components/SinglePlayer";
import NewPlayerForm from "./components/NewPlayerForm";

import "./App.css";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <NavBar />

      <Routes>
        <Route path="/" element={<AllPlayers />} />
        <Route path="/players/:id" element={<SinglePlayer />} />
        <Route path="/form" element={<NewPlayerForm />} />
      </Routes>
    </>
  );
}

export default App;
