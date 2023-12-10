import React, { useState } from 'react';
import {login} from "../../services/auth.services"
import Logo from "../../assets/RegistrioIMG/Logo.png";
import Btn1 from "../../assets/LoginIMG/Btn1.png";
import Btn2 from "../../assets/LoginIMG/Btn2.png";
import L1 from "../../assets/LoginIMG/Login1.png";
import L2 from "../../assets/LoginIMG/Login2.png";
import L3 from "../../assets/LoginIMG/Login3.png";
import { Header } from "../Header_/Header";
import { Footer } from "../Footer_/Footer";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';



export const Login = () => {

    // Estados para almacenar los valores de los inputs
    const [dui, setDUI] = useState('');
    const [contrasena, setContrasena] = useState('');
    const navigate = useNavigate();

    

    // Función para manejar el clic en el botón
   

        // Si todos los campos están llenos esto continua
        // Aquí podemos manejar la conexión con la API, enviar datos al servidor, etc.

        // Almacenando datos, de acá mandaremos a la API
        const handleClick = async (e) => {
            e.preventDefault();
            
            // Verificar si los campos están vacíos
            if (dui.trim() === '' || contrasena.trim() === '') {
                // Mostrar una alerta 
                alert('Por favor, completa todos los campos.');
                return; // Detenemos la ejecución si algún campo está vacío
            }
            
            // Prueba de almacenamiento de datos en arreglo
            console.log(dui, contrasena);
            
            // Hacer uso de state
            const formDataString = {
                identifire: dui,
                password: contrasena,
            };
            console.log(formDataString);
            
            const formDataJSON = JSON.stringify(formDataString);
            console.log(formDataJSON);
            
            // Tray ctach pero con función async
            try {
                await login(formDataJSON);
                console.log("Datos enviados a la API");
                
                // Limpiar las variables después de un envío exitoso
                setDUI('');  // Si estás utilizando React y `setDui` es tu función para actualizar el estado de `dui`
                setContrasena('');  // Si estás utilizando React y `setContrasena` es tu función para actualizar el estado de `contrasena`
                navigate('/Home');
            } catch (error) {
                console.log("No se mandó :(");
            }
        };
        
    

    return (
        <>

            <div className="bg-B1-Crema flex flex-col">

                <div className="scale-[80%] flex flex-col lg:flex-row bg-B1-Crema  w-full h-auto text-center items-center justify-center">

                    <div className="flex flex-col rounded-bl-[5%] rounded-br-[5%] rounded-tr-[0] rounded-tl-[0] order-2 lg:order-1 flex-row bg-[#bca37f] w-full h-[1100px] text-center items-center justify-center rounded-bl-[5%] rounded-br-[0] rounded-tr-[0] rounded-tl-[5%]">
                        <div className=" scale-[90%] flex flex-col sm: flex-row bg-[#bca37f] w-full h-[1000px] text-center items-center justify-center gap-[50px]">
                            <img
                                className=" max-w-full max-h-full"
                                alt="Image"
                                src={L1}
                            />

                            <div className="flex flex-col justify-right">
                                <p className="text-[25px] lg:text-[35px] sm:text-[40px] [font-family:'Quando-Regular'] text-black top-[-20px] left-8 font-bold">Usuario o DUI (Sin guión):</p>
                                <div className="flex items-center">
                                    <div className="flex">
                                        <img
                                            className="w-[65px] h-[65px] ml-8"
                                            alt="Image"
                                            src={L2}
                                        />
                                    </div>
                                    <div>
                                        <input
                                            type="text"
                                            className="w-full h-16 p-4 bg-B1-Crema text-[20px] [font-family:'Quando-Regular']"
                                            placeholder="Ingrese su DUI"
                                            value={dui}
                                            onChange={(e) => setDUI(e.target.value)}
                                        />
                                    </div>
                                </div>
                            </div>




                            <div className="flex flex-col justify-right">
                                <p className="text-[25px] lg:text-[35px] sm:text-[40px] [font-family:'Quando-Regular'] text-black top-[-20px] left-8 font-bold">Contraseña:</p>
                                <div className="flex items-center">
                                    <div className="flex">
                                        <img
                                            className="w-[65px] h-[65px] ml-8"
                                            alt="Image"
                                            src={L3}
                                        />
                                    </div>
                                    <div>
                                        <input
                                            type="password"
                                            className="w-full h-16 p-4 bg-B1-Crema text-[20px] [font-family:'Quando-Regular']"
                                            placeholder="Ingrese su contraseña"
                                            value={contrasena}
                                            onChange={(e) => setContrasena(e.target.value)}
                                        />
                                    </div>
                                </div>
                            </div>



                            <div className="flex flex-col sm:flex-row items-center gap-10">
                                <Link to="/Solicitudes_donaciones">
                                <button
                                    className="bg-B2-Blue text-white font-bold py-2 px-4 rounded flex items-center transition-all duration-300 ease-in-out transform hover:scale-110 hover:bg-[#ead7bb] hover:text-[#113946]"
                                    onClick={handleClick}
                                >
                                    <span className="text-[30px] mr-7 hover:text-B2-Blue">Ingresar</span>
                                    <img
                                        className="w-10 h-10 transition-all duration-300 ease-in-out transform hover:scale-110 hover:filter hover:brightness-110"
                                        src={Btn2}
                                        alt="Avión"
                                    />
                                </button>
                                </Link>
                                <Link to="/Registro">
                                <button className="bg-white text-B2-Blue font-bold py-2 px-4 rounded flex items-center transition-all duration-300 ease-in-out transform hover:scale-110 hover:bg-[#ead7bb] hover:text-[#113946]">
                                    <span className="text-[30px] mr-7 hover:text-B2-Blue">Registrarse</span>
                                    <img className="w-10 h-10 transition-all duration-300 ease-in-out transform hover:scale-110 hover:filter hover:brightness-110" src={Btn1} alt="Avión" />
                                </button>
                                </Link>
                            </div>

                        </div>
                    </div>



                    <div className="rounded-bl-[0] rounded-br-[0] rounded-tr-[5%] rounded-tl-[5%] order-1 lg:order-2 relative flex flex-col sm:flex-row bg-gradient-to-r from-[#ead8bb] via-[#ead7bb] to-[#bca37f] w-full h-[1100px] text-center items-center justify-center rounded-bl-[0] rounded-br-[5%] rounded-tr-[5%] rounded-tl-[0]">
                        <div className=" scale-[60%] bg-[#bca37f] sm: relative z-10 px-[150px] py-10 rounded-[5%]">
                            <div className="sm:flex flex-col items-center justify-center mt-4">
                                <img className="max-w-full h-auto" src={Logo} alt="Imagen del cuadro" />
                                <p className="text-[35px] lg:text-[120px] [font-family:'Quando-Regular'] sm:text-[80px] text-left text-white font-bold">
                                    Échame <br />
                                    La <br />
                                    Mano
                                </p>
                            </div>

                        </div>
                    </div>


                </div>

                <Footer />

            </div>

        </>
    );
};


export default Login;