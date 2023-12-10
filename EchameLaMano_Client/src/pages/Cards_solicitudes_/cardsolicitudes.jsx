import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/RegistrioIMG/Logo.png"
import Ojo from "../../assets/Card-solicitudesIMG/img/ojo 1.png"

export const Cardsolicitudes = ({ solicitud }) => {

    if (!solicitud) {
        return null; // O manejo adecuado si donacion no está definida
    }

    const { titulo,
        nombre,
        email,
        direccion,
        tel,
        motivo,
        adicional } = solicitud;

    return (
        <div className="relative flex flex-col items-center justify-between w-[427px] h-[364px] bg-[#ead7bb] m-3 mt-5 rounded-[20.18px] overflow-hidden border-[8.07px] border-solid border-transparent">
            <div className="flex flex-col"></div>
            <div className="w-[161px] top-[14px] left-[131px] [font-family:'Quando-Regular'] font-normal text-[#113946] text-[32.3px] text-center tracking-[0] leading-[normal] whitespace-nowrap">
                {titulo}
            </div>
            <div className="items-center justify-center w-[168px] h-[181px] top-[90px] left-[25px] bg-[#bca37f] rounded-[10px]">
                <img src={Logo} alt="Logo" />
            </div>

            <div className="w-[211px] h-[181px] top-[90px] left-[193px] bg-[#fff2d8] rounded-[10px] overflow-hidden">
                <div className="w-[111px] top-[75px] left-[51px] [font-family:'Quando-Regular'] font-normal text-[#00000080] text-[19.4px] text-center tracking-[0] leading-[normal]">
                    {motivo}
                </div>
            </div>

            <div className="flex items-center justify-center flex-col">
                <Link to={`Info_Solicitudes/${titulo}/${nombre}/${tel}/${email}/${motivo}/${encodeURIComponent(adicional)}/${direccion}`}>
                <button className="w-30 scale-[90%] py-1 px-2 bg-[#113946] text-white py-2 px-4 rounded flex items-center transition-all duration-300 ease-in-out transform hover:scale-110 hover:bg-[#BCA37F] hover:text-white">
                    <span className="text-[15px] [font-family:'Quando-Regular'] sm:text-[30px] mr-7 hover:text-B2-blue">Ver</span>
                    <img className="w-7 h-7 sm:w-10 h-10 transition-all duration-300 ease-in-out transform hover:scale-110 hover:filter hover:brightness-110" src={Ojo} alt="Avión" />
                </button>
                </Link>

            </div>
        </div>
      
    );
  };

export default Cardsolicitudes;

