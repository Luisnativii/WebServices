import React from "react";
import { Header } from "../Header_/Header";
import { Footer } from "../Footer_/Footer";
import { Link } from "react-router-dom";
import avion1 from "../../assets/HomeIMG/img/avion-de-papel-1-1.png";
import DH from "../../assets/HomeIMG/img/Home1.png";
import DH2 from "../../assets/HomeIMG/img/Home2.png";
import DH3 from "../../assets/HomeIMG/img/Home3.png";
import DH4 from "../../assets/HomeIMG/img/Home4.png";
import DH5 from "../../assets/HomeIMG/img/Home5.png";
import DH6 from "../../assets/HomeIMG/img/Home6.png";
import DH7 from "../../assets/HomeIMG/img/Home7.png";


export const Home = () => {
  return (
    <>

      <div className="bg-B1-Crema ">
      <Header />
        <div className="flex flex-col sm:flex-row bg-B1-Crema  w-full h-[800px] text-center items-center justify-center">
          <div className="order-2 sm:order-1  w-full sm:w-[50%] mt-4 sm:mt-0">

            <p className="text-[80px] lg:text-[128px] [font-family:'Quando-Regular'] sm:text-[100px]">
              Home
            </p>
            <p className="text-[20px] lg:text-[24px] [font-family:'Quando-Regular'] opacity-60 sm:text-[22px]">
              Tu ayuda marca la diferencia
            </p>

          </div>
          <div className="order-1 sm:order-2  w-full sm:w-[50%] mt-4 sm:mt-0 flex items-center justify-center">
            <img
              className="scale-[90%] max-w-full max-h-full"
              alt="Image"
              src={DH}
            />
          </div>
        </div>



        <div className="flex flex-col sm:flex-row bg-white  w-full h-[800px] text-left items-center justify-center">

          <div className="order-1 sm:order-2  w-full sm:w-[50%] mt-20 sm:mt-0 text-center sm:text-left">
            <div className="mx-auto max-w-[80%]">
              <p className="text-[55px] lg:text-[80px] [font-family:'Quando-Regular'] sm:text-[75px]">
                Solicitudes
              </p>
              <p className="text-[25px] lg:text-[40px] [font-family:'Quando-Regular'] sm:text-[30px]">
                Descubre los perfiles de <br />
                aquellos que buscan tu apoyo <br />
                y obtén más información <br />
                sobre sus solicitudes.
              </p>
              <div className="flex justify-center sm:justify-start mt-4">
                <Link to="/Solicitudes_donaciones">
                <button className="bg-B2-Blue text-white font-bold py-2 px-4 rounded flex items-center transition-all duration-300 ease-in-out transform hover:scale-110 hover:bg-[#bca37f] hover:text-[#113946]">
                  <span className="text-[30px] mr-7 hover:text-B2-Blue">Click</span>
                  <img className="w-10 h-10 transition-all duration-300 ease-in-out transform hover:scale-110 hover:filter hover:brightness-110" src={avion1} alt="Avión" />
                </button>
                </Link>
              </div>

            </div>

          </div>
          <div className="order-1 sm:order-2  w-full sm:w-[50%] mt-4 sm:mt-0 flex items-center justify-center">
            <img
              className="scale-[80%] max-w-full max-h-full"
              alt="Image"
              src={DH2}
            />
          </div>
        </div>



        <div className="flex flex-col sm:flex-row bg-white  w-full h-[750px] text-left items-center justify-center">
          <div className="order-1 sm:order-2  w-full sm: mt-4 sm:mt-0 flex items-center justify-center">
            <img
              className="scale-[90%] max-w-full max-h-full"
              alt="Image"
              src={DH3}
            />
          </div>
        </div>

        <div className="flex flex-col sm:flex-row bg-white  w-full h-[800px] text-left items-center justify-center">


          <div className="order-2 sm:order-1  w-full sm:w-[50%] mt-4 sm:mt-0 flex items-center justify-center">
            <img
              className="scale-[80%] max-w-full max-h-full"
              alt="Image"
              src={DH4}
            />
          </div>

          <div className="order-1 sm:order-2  w-full sm:w-[50%] mt-20 sm:mt-0 text-center sm:text-right">
            <div className="mx-auto max-w-[80%]">
              <p className="text-[55px] lg:text-[80px] [font-family:'Quando-Regular'] sm:text-[75px]">
                Donativos
              </p>
              <p className="text-[25px] lg:text-[40px] [font-family:'Quando-Regular'] sm:text-[30px]">
                Únete a nuetra<br />
                iniciativa "Dona tu <br />
                ayuda", donde <br />
                descrubrirás artículos <br />
                que otras personas <br />
                están donando con el <br />
                propósito de ayudar.
              </p>
              <div className="flex justify-center sm:justify-end mt-4">
                <Link to="/Participa">
                <button className="bg-B2-Blue text-white font-bold py-2 px-4 rounded flex items-center transition-all duration-300 ease-in-out transform hover:scale-110 hover:bg-[#bca37f] hover:text-[#113946]">
                  <span className="text-[30px] mr-7 hover:text-B2-Blue">Click</span>
                  <img className="w-10 h-10 transition-all duration-300 ease-in-out transform hover:scale-110 hover:filter hover:brightness-110" src={avion1} alt="Avión" />
                </button>
                </Link>
              </div>

            </div>

          </div>
        </div>

        <div className="flex flex-col sm:flex-row bg-white  w-full h-[750px] text-left items-center justify-center">
          <div className="order-1 sm:order-2  w-full sm: mt-4 sm:mt-0 flex items-center justify-center">
            <img
              className="scale-[90%] max-w-full max-h-full"
              alt="Image"
              src={DH5}
            />
          </div>
        </div>

        <div className="flex flex-col sm:flex-row bg-B2-Blue  w-full h-[900px] text-left items-center justify-center">


          <div className="order-2 sm:order-1  w-full sm:w-[50%] mt-4 sm:mt-0 flex items-center justify-center">
            <img
              className="scale-[90%] max-w-full max-h-full"
              alt="Image"
              src={DH6}
            />
          </div>

          <div className="order-1 sm:order-2  w-full sm:w-[50%] mt-20 sm:mt-0 text-center sm:text-right">
            <div className="mx-auto max-w-[80%]">
              <p className="text-[65px] lg:text-[80px] text-white [font-family:'Quando-Regular'] sm:text-[75px]">
                Perfil de Ayuda
              </p>
              <p className="text-[25px] lg:text-[40px] text-white [font-family:'Quando-Regular'] sm:text-[30px]">
                Crear tu perfil para que más<br />
                personas puedan ofrecerte el <br />
                apoyo que necesitas. Puedes <br />
                describir tu situación y cómo te<br />
                pueden contactar para ayudarte<br />
                a avanzar.
              </p>

              <div className="flex justify-center sm:justify-end mt-4">
                <Link to="/Creacion_solicitud">
                <button className="bg-white text-B2-Blue font-bold py-2 px-4 rounded flex items-center transition-all duration-300 ease-in-out transform hover:scale-110 hover:bg-[#bca37f] hover:text-[#113946]">
                  <span className="text-[30px] mr-7 hover:text-B2-Blue">Click</span>
                  <img className="w-10 h-10 transition-all duration-300 ease-in-out transform hover:scale-110 hover:filter hover:brightness-110" src={avion1} alt="Avión" />
                </button>
                </Link>
              </div>

            </div>

          </div>
        </div>

        <div className="flex flex-col sm:flex-row bg-B2-Blue  w-full h-[1060px] text-left items-center justify-center">

          <div className="order-1 sm:order-2  w-full sm:w-[50%] mt-20 sm:mt-0 text-center sm:text-left">
            <div className="mx-auto max-w-[80%]">
              <p className="text-[65px] lg:text-[80px] text-white [font-family:'Quando-Regular'] sm:text-[75px]">
                Dona tu Ayuda
              </p>
              <p className="text-[25px] lg:text-[40px] text-white [font-family:'Quando-Regular'] sm:text-[30px]">
                Crea un anuncio de donación <br />
                para dar lo que no usas y <br />
                brindar a otros una segunda <br />
                oportunidad, recordando que <br />
                tu donación puede marcar la <br />
                diferencia. 
              </p>
              <div className="flex justify-center sm:justify-start mt-4">
                <Link to="/Creacion_donacion">
                <button className="bg-white text-B2-Blue font-bold py-2 px-4 rounded flex items-center transition-all duration-300 ease-in-out transform hover:scale-110 hover:bg-[#bca37f] hover:text-[#113946]">
                  <span className="text-[30px] mr-7 hover:text-B2-Blue">Click</span>
                  <img className="w-10 h-10 transition-all duration-300 ease-in-out transform hover:scale-110 hover:filter hover:brightness-110" src={avion1} alt="Avión" />
                </button>
                </Link>
              </div>

            </div>

          </div>
          <div className="order-1 sm:order-2  w-full sm:w-[50%] mt-4 sm:mt-0 flex items-center justify-center">
            <img
              className="scale-[90%] max-w-full max-h-full"
              alt="Image"
              src={DH7}
            />
          </div>
        </div>

        <Footer />

      </div>

    </>
  );
};


export default Home;