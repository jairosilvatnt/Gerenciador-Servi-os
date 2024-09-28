import { BrowserRouter, Routes, Route } from "react-router-dom";
import AgenciList from "./pages/AgenciaList";
import UpdateAgencia from "./pages/UpdateAgencia";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";


function App() {

  return (
    <>
      <NavBar />
      <Home />
    </>
  )
}

export default App
