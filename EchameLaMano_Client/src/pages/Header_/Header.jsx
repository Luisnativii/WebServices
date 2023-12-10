import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/HeaderIMG/Logo+ 1.svg"


export const Header = () => {


  const [menu, setMenu] = useState(false);
  const handleChange = () => {
    setMenu(!menu);
  }
    return (
      <div className="relative z-10">
        <div className=" flex flex-row w-full justify-between style={{ backgroundColor: B1-Crema  }} p-10 md:px-32">
          <div >
            <img
            className="w-[141px] left-[14px] top-0 object-cover h-[144px] absolute"
            alt="Logo"
            src= {Logo}
            />
            <div className="[font-family:'Quando-Regular'] w-auto left-[170px] tracking-[0] lg:text-[24px] text-[10px] top-[57px] text-[#113946] absolute font-normal leading-[normal]">
              Echame la mano
              </div>
          </div>
          <nav className="hidden md:flex gap-10 font-medium p-1 cursor-pointer">
            <Link to="/Home" spy ={true} smooth={true} duration={500} className="hover:text-brightGreen hover:underline transition-all cursor-pointer">Home</Link>
            <Link to="/Solicitudes_donaciones" spy ={true} smooth={true} duration={500} className="hover:text-brightGreen hover:underline transition-all cursor-pointer">Solicitudes</Link>
            <Link to="/Participa" spy ={true} smooth={true} duration={500} className="hover:text-brightGreen hover:underline transition-all cursor-pointer">Participa</Link>
            <Link to="/Creacion_donacion" spy ={true} smooth={true} duration={500} className="hover:text-brightGreen hover:underline transition-all cursor-pointer">Crea tu donacion</Link>
            <Link to="/Creacion_solicitud" spy ={true} smooth={true} duration={500} className="hover:text-brightGreen hover:underline transition-all cursor-pointer">Crea tu solicitud</Link>
          </nav>
          <div className=" flex md:hidden" onClick={handleChange}>
            <div className=" p-2 ">
            </div>
          </div>
        </div>

        <div className={` ${
          menu ? "translate-x-0" : "-translate-x-full"
        } md:hidden flex flex-col absolute bg-B1-Crema border border-black left-0 top-20 font-medium text-2xl text-center pt-8 pb-4 gap-8 w-full h-fit transition-transform duration-300 z-20`} >
        <Link to="/Home" spy ={true} smooth={true} duration={500} className="hover:text-brightGreen hover:underline transition-all cursor-pointer">Home</Link>
            <Link to="/Solicitudes_donaciones" spy ={true} smooth={true} duration={500} className="hover:text-brightGreen hover:underline transition-all cursor-pointer">Solicitudes</Link>
            <Link to="/Participa" spy ={true} smooth={true} duration={500} className="hover:text-brightGreen hover:underline transition-all cursor-pointer">Participa</Link>
            <Link to="/Creacion_donacion" spy ={true} smooth={true} duration={500} className="hover:text-brightGreen hover:underline transition-all cursor-pointer">Crea tu donacion</Link>
            <Link to="/Creacion_solicitud" spy ={true} smooth={true} duration={500} className="hover:text-brightGreen hover:underline transition-all cursor-pointer">Crea tu solicitud</Link>
        </div>

      </div>
    );
  };  

export default Header;