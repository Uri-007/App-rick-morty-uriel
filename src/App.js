import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import { Inicio } from "./pages/Inicio";
import { Nosotros } from "./pages/Nosotros";
import { Contacto } from "./pages/Contacto";


function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Inicio/>}/>
        <Route path="/nosotros" element={<Nosotros/>}/>
        <Route path="/contacto" element={<Contacto/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
