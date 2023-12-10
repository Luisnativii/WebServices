import { useState } from 'react'
import './App.css'
import { Routes, Route} from 'react-router-dom'
import Home from "./pages/Home_/Home"
import Inicio from './pages/Inicio_/Inicio'
import Registro from './pages/Registro_/Registro'
import Login from './pages/Login_/Login'
import Solicitudes_donaciones from "./pages/solicitudes_/Solicitudes_donaciones"
import Creacion_donacion from "./pages/Creacion-donacion_/Creacion_donacion"
import Participa from "./pages/Donaciones_/Donaciones"
import Creacion_solicitud from "./pages/Creacion-solicitud/solicita_donacion"
import Info_Solicitudes from "./pages/Info_Solicitudes/Info_Solicitudes"
import Info_donaciones from "./pages/info_donaciones_/Info_donaciones"


function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
            <Routes>
                <Route path ="/" element = {<Inicio/>} /> {/*Establecemos una ruta por defecto*/}
                <Route path ="/Inicio" element = {<Inicio/>} />
                <Route path ="Registro" element = {<Registro/>} />
                <Route path ="Login" element = {<Login/>} />
                <Route path ="Home" element = {<Home/>} />
                <Route path ="Solicitudes_donaciones" element = {<Solicitudes_donaciones/>} />
                <Route path ="Creacion_donacion" element = {<Creacion_donacion/>} />
                <Route path ="Participa" element = {<Participa/>} />
                <Route path ="Creacion_solicitud" element = {<Creacion_solicitud/>} />
                <Route path ="Solicitudes_donaciones/Info_Solicitudes/:titulo/:nombre/:tel/:email/:motivo/:adicional/:direccion" element = {<Info_Solicitudes/>} />
                <Route path ="Participa/Info_donaciones/:titulo/:nombre/:tel/:email/:adicional/:direccion/:tipo/:cantidad" element = {<Info_donaciones/>} />
                <Route path ="Info_Solicitudes" element = {<Info_Solicitudes/>} />
               
              </Routes>
    </div>

  );
}

export default App
