import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AgenciList from "./pages/AgenciaList";
import UpdateAgencia from "./pages/UpdateAgencia";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import CadastrarAgencia from "./pages/CadastrarAgencia";


function App() {

  return (     
    <div>
      <NavBar />
      <Routes>      
        <Route path="/" element={ <Home />}/>
        <Route path="/agenciaList" element={ <AgenciList />}/>
        <Route path="/cadastrarAgencia" element={ <CadastrarAgencia />}/>
        <Route path="/updateAgencia" element={ <UpdateAgencia />}/>
      </Routes>
    </div>

  )
}

export default App
