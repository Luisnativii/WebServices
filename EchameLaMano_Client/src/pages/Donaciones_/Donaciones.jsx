import React, { useState } from "react";
import { Header } from "../Header_/Header";
import { Footer } from "../Footer_/Footer";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import Casa from "../../assets/DonacionesIMG/img/casa 1.png"
import Añadir from "../../assets/DonacionesIMG/img/anadir 2.png"
import { useDonaciones } from '../Cards-donaciones_/DonacionesContext';
import Cards_donaciones from '../Cards-donaciones_/Cards_donaciones';

export const Donaciones = () => {

  const { donaciones } = useDonaciones();

  return (
    <div className="flex flex-col">
      <div className=" top-0 w-full flex flex-col bg-[#fff2d8]">
        <Header />
        <div className="flex flex-col items-center">
          <div className="text-[10px] sm:w-[600px] m-10 [font-family:'Quando-Regular'] font-normal text-black lg:text-[96px] text-[56px] text-center tracking-[0] leading-[normal]">
            Participa por tu donacion
          </div>
          <p className=" m-10 [font-family:'Quando-Regular'] font-normal text-[#00000080] lg:text-[24px] text-[20px]text-center traking-[0] leading-[normal]">
            Tu ayuda marca la diferencia
          </p>

          <p className="p-10 max-w-screen-xl mx-auto [font-family:'Quando-Regular'] text-black lg:text-4xl text-2xl text-left tracking-normal leading-normal">
          En esta sección, te invitamos a participar en cualquiera de las rifas de donaciones disponibles, brindándote la oportunidad de ganar el valioso premio en juego. Sin embargo, es importante tener en cuenta que solo puedes participar en una rifa a la vez. 

          Esta medida se implementa para asegurar que cada participante tenga una oportunidad justa de ganar y para que la distribución de donaciones sea equitativa. Así, garantizamos que cada contribución tenga un impacto significativo y que más personas tengan la oportunidad de recibir ayuda cuando más la necesitan.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center">
          <Link to="/Home">
          <button className="scale-[90%] py-1 px-2  sm: bg-white lg:mr-96 text-B2-Blue py-2 px-4 rounded flex items-center m-5 transition-all duration-300 ease-in-out transform hover:scale-110 hover:bg-[#BCA37F] hover:text-white">
            <span className="text-[15px] sm:text-[30px] [font-family:'Quando-Regular'] mr-7 hover:text-B2-Blue">Home</span>
            <img className="w-7 h-7 sm:w-10 h-10 transition-all duration-300 ease-in-out transform hover:scale-110 hover:filter hover:brightness-110" src={Casa} alt="Avión" />
          </button>
          </Link>

          <Link to="/Creacion_donacion">
          <button className="scale-[90%] py-1 px-2  sm: bg-[#113946] lg:ml-96 text-B2-white py-2 px-4 rounded flex items-center m-5 transition-all duration-300 ease-in-out transform hover:scale-110 hover:bg-[#BCA37F] hover:text-white">
            <span className="text-[15px] sm:text-[30px] [font-family:'Quando-Regular'] mr-7 hover:text-B2-white text-white">Crear Donacion</span>
            <img className="w-7 h-7 sm:w-10 h-10 transition-all duration-300 ease-in-out transform hover:scale-110 hover:filter hover:brightness-110" src={Añadir} alt="Avión" />
          </button>
          </Link>
        </div>
      </div>

      <div className=" w-full bg-[#BCA37F] flex flex-wrap items-center justify-center ">
          
      {donaciones.map((donacion) => (
        <Cards_donaciones key={donacion.id} donacion={donacion} />
      ))}
          

      </div>

      <Footer/>

      
    </div>
  );
};



export default Donaciones;