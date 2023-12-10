import React from "react";
import { Header } from "../Header_/Header";
import { Footer } from "../Footer_/Footer";
import { Link } from "react-router-dom";
import Btn1 from "../../assets/InicioIMG/img/Btn1.png";
import Btn2 from "../../assets/InicioIMG/img/Btn2.png";
import I1 from "../../assets/InicioIMG/img/Inicio1.png";
import I2 from "../../assets/InicioIMG/img/Inicio2.png";
import I3 from "../../assets/InicioIMG/img/Inicio3.png";
import I4 from "../../assets/InicioIMG/img/Inicio4.png";

export const Inicio = () => {
    return (
        <>

            <div className="bg-B1-Crema ">
           
                <div className="flex flex-col sm:flex-row bg-B1-Crema w-full h-[800px] text-center items-center justify-center">
                    <div className="order-2 sm:order-1 w-full sm:w-[50%] mt-4 sm:mt-0">
                        <p className="text-[40px] lg:text-[110px] [font-family:'Quando-Regular'] sm:text-[70px]">
                            ¡Bienvenido a <br />
                            Échame la Mano!
                        </p>
                        <p className="text-[20px] lg:text-[24px] [font-family:'Quando-Regular'] opacity-60 sm:text-[22px]">
                            Tu ayuda marca la diferencia
                        </p>
                        <div className="flex justify-center mt-4 gap-10">
                            <Link to="/Login">
                            <button className="scale-[90%] py-1 px-2 sm:border bg-B2-Blue text-white font-bold py-2 px-4 rounded flex items-center transition-all duration-300 ease-in-out transform hover:scale-110 hover:bg-[#bca37f] hover:text-[#113946]">
                                <span className="text-[15px] sm:text-[30px] mr-7 hover:text-B2-Blue">Donar</span>
                                <img className="w-7 h-7 sm:w-10 h-10 transition-all duration-300 ease-in-out transform hover:scale-110 hover:filter hover:brightness-110" src={Btn1} alt="Avión" />
                            </button>
                            </Link>

                            <Link to="/Login">
                            <button className="scale-[90%] py-1 px-2  sm: bg-white text-B2-Blue font-bold py-2 px-4 rounded flex items-center transition-all duration-300 ease-in-out transform hover:scale-110 hover:bg-[#bca37f] hover:text-white">
                                <span className="text-[15px] sm:text-[30px] mr-7 hover:text-B2-Blue">Solicitar</span>
                                <img className="w-7 h-7 sm:w-10 h-10 transition-all duration-300 ease-in-out transform hover:scale-110 hover:filter hover:brightness-110" src={Btn2} alt="Avión" />
                            </button>
                            </Link>
                        </div>

                    </div>
                    <div className="order-1 sm:order-2 w-full sm:w-[50%] mt-4 sm:mt-0 flex items-center justify-center">
                        <img
                            className="scale-[90%] max-w-full max-h-full"
                            alt="Image"
                            src={I1}
                        />
                    </div>
                </div>


                
                <div className="flex flex-col sm:flex-row bg-white w-full h-[950px] text-center items-center justify-center">
                    <div className="order-1 sm:order-2  w-full sm:w-[50%] mt-20 sm:mt-0 text-center sm:text-left">
                        <div className="mx-auto max-w-[80%]">
                            <section id="conocenos">
                            <p className="text-[40px]  lg:text-[80px] text-B2-Blue [font-family:'Quando-Regular'] sm:text-[60px]">
                                Conócenos
                            </p>
                            <p className="text-[15px]  lg:text-[30px] text-B2-Blue [font-family:'Quando-Regular'] sm:text-[20px]">
                                Nuestro objetivo es conectar a personas interesadas <br />
                                en donar productos de alta calidad y no perecederos <br />
                                con aquellas que los necesitan y recurren a nuestra <br />
                                plataforma en busca de ayuda. La inspiración para <br />
                                crear esta iniciativa, proviene de la voluntad de llevar a cabo un proyecto con un impacto social significativo. <br />
                                Con esta plataforma, buscamos abordar desafíos <br />
                                sociales actuales, como la pobreza, el desempleo, <br />
                                la discriminación, la falta de vivienda, entre otros.
                            </p>

                            </section>


                        </div>

                    </div>
                    
                    <div className="order-1 sm:order-2 w-full sm:w-[50%] mt-4 sm:mt-0 flex items-center justify-center">
                        <img
                            className="scale-[90%] max-w-full max-h-full"
                            alt="Image"
                            src={I2}
                        />
                    </div>
                </div>


                <div className="flex flex-col sm:flex-row bg-B2-Blue w-full h-[200px] text-center items-center justify-center">
                <p className="text-[40px]  lg:text-[80px] text-white [font-family:'Quando-Regular'] sm:text-[60px]">
                                Formas de ayudar
                            </p>
                </div>

                <div className="flex flex-col sm:flex-row bg-B2-Blue w-full h-[950px] text-center items-center justify-center">
                    <div className="order-2 sm:order-1 w-full sm:w-[50%] mt-4 sm:mt-0 flex items-center justify-center">
                        <img
                            className="scale-[90%] max-w-full max-h-full"
                            alt="Image"
                            src={I3}
                        />
                    </div>
                    <div className="order-1 sm:order-2  w-full sm:w-[50%] mt-20 sm:mt-0 text-center sm:text-right">
                        <div className="mx-auto max-w-[80%]">
                            <p className="text-[40px]  lg:text-[80px] text-white [font-family:'Quando-Regular'] sm:text-[60px]">
                                Donar
                            </p>
                            <p className="text-[15px]  lg:text-[30px] text-white [font-family:'Quando-Regular'] sm:text-[20px]">
                                En nuestra plataforma, brindamos a las personas <br />
                                la oportunidad de realizar donaciones<br />
                                significativas. Aquí, los usuarios pueden<br />
                                contribuir con productos de alta calidad y no<br />
                                perecederos, ya sea alimentos, artículos de<br />
                                higiene, ropa o cualquier otro producto<br />
                                esencial. Cada acto de generosidad cuenta y, a través de<br />
                                nuestra plataforma, facilitamos el proceso de<br />
                                donación, asegurando que su ayuda llegue a las
                                manos adecuadas.
                            </p>


                        </div>

                    </div>
                </div>

                <div className="flex flex-col sm:flex-row bg-B2-Blue w-full h-[950px] text-center items-center justify-center">
                    
                    <div className="order-1 sm:order-2  w-full sm:w-[50%] mt-20 sm:mt-0 text-center sm:text-left">
                        <div className="mx-auto max-w-[80%]">
                            <p className="text-[40px]  lg:text-[80px] text-white [font-family:'Quando-Regular'] sm:text-[60px]">
                                Solicitar
                            </p>
                            <p className="text-[15px]  lg:text-[30px] text-white [font-family:'Quando-Regular'] sm:text-[20px]">
                            Nuestra plataforma no solo permite donar, sino <br />
                            también solicitar donaciones en momentos de <br />
                            necesidad. Ofrecemos un espacio donde los <br />
                            usuarios pueden expresar sus necesidades y <br />
                            recibir apoyo de la comunidad. Si atraviesas <br />
                            dificultades y necesitas alimentos, ropa u otros <br />
                            productos esenciales, puedes utilizar nuestra <br />
                            plataforma. Buscamos fomentar la solidaridad y <br />
                            conectar a quienes pueden ayudar con quienes <br />
                            necesitan asistencia, marcando una diferencia <br />
                            positiva en sus vidas.
                            </p>


                        </div>

                    </div>

                    <div className="order-1 sm:order-2 w-full sm:w-[50%] mt-4 sm:mt-0 flex items-center justify-center">
                        <img
                            className="scale-[90%] max-w-full max-h-full"
                            alt="Image"
                            src={I4}
                        />
                    </div>
                    
                    
                </div>

                
               
            </div>
            <Footer />
        </>
    );
};


export default Inicio;