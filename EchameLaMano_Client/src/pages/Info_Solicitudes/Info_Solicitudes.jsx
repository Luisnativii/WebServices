import React from "react";
import { Link } from "react-router-dom";
import { Header } from "../Header_/Header";
import { Footer } from "../Footer_/Footer";
import { useParams } from 'react-router-dom';
import comprobar from "../../assets/Creacion-donacionIMG/IMG/comprobar-1-1.png"
import foto2 from "../../assets/Creacion-donacionIMG/IMG/foto-2.png"
import foto3 from "../../assets/Creacion-donacionIMG/IMG/foto-3.png"
import foto4 from "../../assets/Creacion-donacionIMG/IMG/foto-4.png"
import foto5 from "../../assets/Creacion-donacionIMG/IMG/foto-5.png"
import foto6 from "../../assets/Creacion-donacionIMG/IMG/foto-6.png"
import fotosolicitud from "../../assets/Creacion-donacionIMG/IMG/foto-solicitud.png"




export const Info_Solicitudes = () => {

    const { titulo, nombre, tel, email, motivo, adicional, direccion } = useParams();

    console.log("direccion:",direccion);
    console.log("email",email);
    
  return (
    <div>
      <div className="bg-[#113946] flex flex-col w-full">
        <Header />
        <div className="flex flex-col items-center">

          <div className="lg:w-[612px] w-[450px] m-10 [font-family:'Quando-Regular'] font-normal text-white lg:text-[96px] text-[56px] text-center tracking-[0] leading-[normal]">
            Informacion de la Solicitud
          </div>
        </div>


        <div className="flex flex-col items-center justify-center">
          <div className="w-full flex flex-col items-center justify-center m-5 max-w-[1350px] sm:w-[80%] md:w-[70%] lg:w-[80%] xl:w-[80%] h-auto bg-[#EAD7BB] rounded-[25px] overflow-hidden border-8 border-[#BCA37F]">


            <div className="m-5 flex flex-col items-center justify-center">
              <div className="m-10 w-[450px] top-[71px] left-[412px] [font-family:'Quando-Regular'] font-normal text-black text-center lg:text-[50px] text-[30px] tracking-[0] leading-[20px] whitespace-nowrap">
                Titulo de la Solicitud:
              </div>

              <div className="flex flex-row items-center justify-center">

                <div className="m-5 w-[37px] lg:h-[58px]  top-[137px] left-[327px]">
                  <div className=" w-[58px] h-[58px] top-0 left-0 bg-white rounded-[15px]">
                    <img
                      className=" w-[34px] h-[33px] top-[12px] left-[12px] object-cover"
                      alt="Foto"
                      src={foto2}
                    />
                  </div>
                </div>
                <div className="lg:w-[457px] w-[90%]  h-full bg-[#fff2d8] rounded-[15px] p-2 outline-none resize-none">
                  {titulo}
                </div>
              </div>
            </div>




            <div className="flex lg:w-full w-[100%] lg:flex-row flex-col-reverse gap-22">
              <div className="relative left-0">

                <div className="relative m-5 lg:w-[657px] w-[95%] h-[41px]">
                  <div className="lg:w-[390px] w-[55%] bg-[#fff2d8] absolute h-[41px] top-0 left-[270px] rounded-[15px] p-2 outline-none resize-none">
                    {nombre}
                    </div>
                  <div className="absolute lg:w-[370px] w-[95%] top-[10px] left-0 [font-family:'Quando-Regular',Helvetica] font-normal text-black text-[20px] tracking-[0] leading-[20px] whitespace-nowrap">
                    Nombre Completo:
                  </div>
                  <div className="w-[63px] bg-white absolute h-[41px] top-0 left-[211px] rounded-[15px]" />
                  <img className="w-[45px] h-[35px] top-0 left-[220px] absolute object-cover" alt="Foto" src={foto6} />

                </div>

                <div className="relative m-5 lg:w-[657px] w-[95%] h-[41px]">
                  <div className="lg:w-[390px] w-[55%] bg-[#fff2d8] absolute h-[41px] top-0 left-[270px] rounded-[15px] p-2 outline-none resize-none">
                    {email}
                  </div>
                  
                  <div className="absolute lg:w-[370px] w-[95%] top-[10px] left-0 [font-family:'Quando-Regular',Helvetica] font-normal text-black text-[20px] tracking-[0] leading-[20px] whitespace-nowrap">
                    Email:
                  </div>
                  <div className="w-[63px] bg-white absolute h-[41px] top-0 left-[211px] rounded-[15px]" />
                  <img className="w-[45px] h-[35px] top-0 left-[220px] absolute object-cover" alt="Foto" src={foto3} />
                </div>

                <div className="relative m-5 lg:w-[657px] w-[95%] h-[41px]">
                  <div className="lg:w-[390px] w-[55%] bg-[#fff2d8] absolute h-[41px] top-0 left-[270px] rounded-[15px] p-2 outline-none resize-none">
                        {tel}
                  </div>
                  <div className="absolute lg:w-[370px] w-[95%] top-[10px] left-0 [font-family:'Quando-Regular',Helvetica] font-normal text-black text-[20px] tracking-[0] leading-[20px] whitespace-nowrap">
                    Telefono:
                  </div>
                  <div className="w-[63px] bg-white absolute h-[41px] top-0 left-[211px] rounded-[15px]" />
                  <img className="w-[45px] h-[35px] top-0 left-[220px] absolute object-cover" alt="Foto" src={foto4} />
                </div>

                <div className="relative m-5 lg:w-[657px] w-[95%] h-[41px]">
                  <div className="lg:w-[390px] w-[55%] bg-[#fff2d8] absolute h-[41px] top-0 left-[270px] rounded-[15px] p-2 outline-none resize-none">
                     {direccion}
                  </div>
                  <div className="absolute lg:w-[370px] w-[95%] top-[10px] left-0 [font-family:'Quando-Regular',Helvetica] font-normal text-black text-[20px] tracking-[0] leading-[20px] whitespace-nowrap">
                    Direccion:
                  </div>
                  <div className="w-[63px] bg-white absolute h-[41px] top-0 left-[211px] rounded-[15px]" />
                  <img className="w-[45px] h-[35px] top-0 left-[220px] absolute object-cover" alt="Foto" src={foto5} />
                </div>

                <div className="m-5 relative w-[657px] h-[161px]">
                  <div className="absolute resize-none outline-none border-none p-4 lg:w-[657px] w-[65%] h-[129px] top-[32px] left-0 bg-[#fff2d8] rounded-[15px]">
                    {motivo}
                  </div>
                  <div className="absolute w-[370px] -top-px left-0 [font-family:'Quando-Regular',Helvetica] font-normal text-black text-[20px] tracking-[0] leading-[20px] whitespace-nowrap">
                    Motivo de solicitud:
                  </div>
                </div>

                <div className="m-5 relative w-[657px] h-[161px]">
                  <div className="absolute resize-none outline-none border-none p-4 lg:w-[657px] w-[65%] h-[129px] top-[32px] left-0 bg-[#fff2d8] rounded-[15px]">
                    {adicional}
                  </div>

                  <div className="absolute w-[370px] -top-px left-0 [font-family:'Quando-Regular',Helvetica] font-normal text-black text-[20px] tracking-[0] leading-[20px] whitespace-nowrap">
                    Informacion adicional:
                  </div>
                </div>



              </div>

              <div className="relative items-center justify-center right-0 m-5">

                <div className="w-[297px] top-[258px] left-[885px] [font-family:'Quando-Regular',Helvetica] font-normal text-black text-[50px] text-center tracking-[0] leading-[20px] whitespace-nowrap">
                  Fotografía:
                </div>

                <div className="m-10 p-[100px] relative rounded-[25px] border-[5px] border-dashed border-black">
                  <img className="relative w-[267px] h-[208.43px] object-cover" alt="Rectangle" src={fotosolicitud} />
                </div>
              </div>

            </div>


            <div className="flex flex-row items-center justify-center">

            </div>


            <Link to="/Solicitudes_donaciones">
            <button className="scale-[90%] py-1 px-2  sm: bg-[#113946] text-B2-white py-2 px-4 rounded flex items-center m-10 transition-all duration-300 ease-in-out transform hover:scale-110 hover:bg-[#BCA37F] hover:text-white">
              <span className="text-[15px] sm:text-[30px] mr-7 hover:text-B2-white text-white">Volver</span>
              <img className="w-7 h-7 sm:w-10 h-10 transition-all duration-300 ease-in-out transform hover:scale-110 hover:filter hover:brightness-110" src={comprobar} alt="cheque" />
            </button>
            </Link>

          </div>


        </div>
        <Footer />
      </div>

    </div>
  );
};

export default Info_Solicitudes;