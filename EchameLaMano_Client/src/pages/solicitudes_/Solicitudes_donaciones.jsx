import React from "react";
import { Header } from "../Header_/Header";
import { Footer } from "../Footer_/Footer";
import { Link } from "react-router-dom";
import anadir from "../../assets/SolicitudesIMG/img/anadir-1.png";
import casa from "../../assets/SolicitudesIMG/img/casa 1.png";
import { Cardsolicitudes } from "../Cards_solicitudes_/cardsolicitudes";
import { useSolicitudes } from '../Cards_solicitudes_/SolicitudesContex';
import Cards_solicitudes from '../Cards_solicitudes_/cardsolicitudes';




export const Solicitudes_donaciones = () => {

  const { solicitudes } = useSolicitudes();

  return (
    <div className="flex flex-col">
      <div className=" top-0 w-full flex flex-col bg-[#fff2d8]">
        <Header />
        <div className="flex flex-col items-center">
          <div className="text-[10px] sm:w-[600px] m-10 [font-family:'Quando-Regular'] font-normal text-black lg:text-[96px] text-[56px] text-center tracking-[0] leading-[normal]">
            Solicitudes de donaciones
          </div>
          <p className=" m-10 [font-family:'Quando-Regular'] font-normal text-[#00000080] lg:text-[24px] text-[20px]text-center traking-[0] leading-[normal]">
            Tu ayuda marca la diferencia
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center">
          <Link to="/Home">
          <button className="scale-[90%] py-1 px-2  sm: bg-white lg:mr-96 text-B2-Blue py-2 px-4 rounded flex items-center m-5 transition-all duration-300 ease-in-out transform hover:scale-110 hover:bg-[#BCA37F] hover:text-white">
            <span className="text-[15px] sm:text-[30px] [font-family:'Quando-Regular'] mr-7 hover:text-B2-Blue">Home</span>
            <img className="w-7 h-7 sm:w-10 h-10 transition-all duration-300 ease-in-out transform hover:scale-110 hover:filter hover:brightness-110" src={casa} alt="Avión" />
          </button>
          </Link>

          <Link to= "/Creacion_solicitud">
          <button className="scale-[90%] py-1 px-2  sm: bg-[#113946] lg:ml-96 text-B2-white py-2 px-4 rounded flex items-center m-5 transition-all duration-300 ease-in-out transform hover:scale-110 hover:bg-[#BCA37F] hover:text-white">
            <span className="text-[15px] sm:text-[30px] [font-family:'Quando-Regular'] mr-7 hover:text-B2-white text-white">Crear Solicitud</span>
            <img className="w-7 h-7 sm:w-10 h-10 transition-all duration-300 ease-in-out transform hover:scale-110 hover:filter hover:brightness-110" src={anadir} alt="Avión" />
          </button>
          </Link>
        </div>
      </div>

      <div className=" w-full bg-[#BCA37F] flex flex-wrap items-center justify-center ">

      {solicitudes.map((solicitud) => (
        <Cards_solicitudes key={solicitud.id} solicitud={solicitud} />
      ))}

      </div>

      <Footer />


    </div>
  );
};




export default Solicitudes_donaciones;