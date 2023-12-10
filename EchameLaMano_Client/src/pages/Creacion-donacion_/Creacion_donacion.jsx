import React, { useState } from "react";
import { postDon } from "../../services/auth.services"
import { Link } from "react-router-dom";
import { Header } from "../Header_/Header";
import { Footer } from "../Footer_/Footer";
import Flecha from "../../assets/Creacion-donacionIMG/IMG/volver-1.png"
import comprobar from "../../assets/Creacion-donacionIMG/IMG/comprobar-1-1.png"
import foto2 from "../../assets/Creacion-donacionIMG/IMG/foto-2.png"
import foto3 from "../../assets/Creacion-donacionIMG/IMG/foto-3.png"
import foto4 from "../../assets/Creacion-donacionIMG/IMG/foto-4.png"
import foto5 from "../../assets/Creacion-donacionIMG/IMG/foto-5.png"
import foto6 from "../../assets/Creacion-donacionIMG/IMG/foto-6.png"
import fotosolicitud from "../../assets/Creacion-donacionIMG/IMG/foto-solicitud.png"
import cantidadimg from "../../assets/Creacion-donacionIMG/IMG/cantidad.png"
import tipoimg from "../../assets/Creacion-donacionIMG/IMG/foto 6.png"
import { useNavigate } from 'react-router-dom';
import { useDonaciones } from '../Cards-donaciones_/DonacionesContext';


export const Creacion_donacion = () => {

  const { agregarDonacion } = useDonaciones();
  const [isChecked, setChecked] = useState(false);

  const [titulo, setTitulo] = useState('');
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [direccion, setDireccion] = useState('');
  const [tel, setTel] = useState('');
  const [tipo, setTipo] = useState('');
  const [cantidad, setCantidad] = useState('');
  const [adicional, setAdicional] = useState('');
  const navigate = useNavigate();

  const handleTelChange = (e) => {
    let inputValue = e.target.value;
    inputValue = inputValue.replace(/[^0-9]/g, '');
    if (inputValue.length > 8) {
      inputValue = inputValue.substring(0, 8);
    }
    setTel(inputValue);
  };

  const handleCanChange = (e) => {
    let inputValue = e.target.value;
    inputValue = inputValue.replace(/[^0-9]/g, '');

    if (inputValue.length > 5) {
      inputValue = inputValue.substring(0, 5);
    }
    setCantidad(inputValue);
  };


  // Función para manejar el clic en el botón
  const handleClick = async (e) => {
    e.preventDefault();
    // Verificar si los campos están vacíos
    if (titulo.trim() === '' || nombre.trim() === '' || email.trim() === '' || direccion.trim() === ''
      | tipo.trim() === '' || cantidad.trim() === '' || adicional.trim() === '' || !isChecked) {
      // Mostrar una alerta 
      alert('Por favor, completa todos los campos.');
      return; // Detenemos la ejecución si algún campo está vacío
    }
    else {
      const nuevaDonacion = {
        titulo,
        nombre,
        email,
        direccion,
        tel,
        tipo,
        cantidad,
        adicional,
        isChecked,
      };

      agregarDonacion(nuevaDonacion);
      navigate('/Participa');

      const formDataString = {
        title_don: titulo,
        Nombre_Don: nombre,
        Email_Don: email,
        telefono_don: tel,
        description_don: direccion,
        Tipo_don: tipo,
        Cantidad_don: cantidad,
        adicional_don: adicional,

      };
      console.log(formDataString);

      const formDataJSON = JSON.stringify(formDataString);
      console.log(formDataJSON);

      try {
        await postDon(formDataJSON);
        console.log("Datos enviados a la API");

      } catch (error) {
        console.log("No se mandó :(");
        console.log(error);
      }

      // Almacenando datos, de acá mandaremos a la API
      const tituloValue = titulo.trim();
      const nombreValue = nombre.trim();
      const emailValue = email.trim();
      const direccionValue = direccion.trim();
      const telValue = tel.trim();
      const tipoValue = tipo.trim();
      const cantidadValue = cantidad.trim();
      const adicionalValue = adicional.trim();

      console.log('titulo', tituloValue);
      console.log('nombre:', nombreValue);
      console.log('email:', emailValue);
      console.log('direccion:', direccionValue);
      console.log('tel:', telValue);
      console.log('tipo:', tipoValue);
      console.log('cantidad:', cantidadValue);
      console.log("adicional:", adicionalValue);
      console.log("estado:", isChecked);

    };


  };


  const handleCheckboxClick = () => {
    setChecked(!isChecked);
  };

  return (
    <div>



      <div className="bg-[#113946] flex flex-col w-full">
        <Header />
        <div className="flex flex-col items-center">

          <div className="lg:w-[612px] w-[450px] m-10 [font-family:'Quando-Regular'] font-normal text-white lg:text-[96px] text-[56px] text-center tracking-[0] leading-[normal]">
            Dona tu <br />
            Ayuda
          </div>
        </div>

        <div className="flex items-center">
          <Link to="/Solicitudes_donaciones">
            <button className="scale-[90%] py-1 px-2 bg-white text-B2-Blue py-2 px-4 rounded flex items-center m-10 mr-0 transition-all duration-300 ease-in-out transform hover:scale-110 hover:bg-[#BCA37F] hover:text-white">
              <span className="text-[15px] sm:text-[30px] mr-7 hover:text-B2-Blue">Volver</span>
              <img className="w-7 h-7 sm:w-10 h-10 transition-all duration-300 ease-in-out transform hover:scale-110 hover:filter hover:brightness-110" src={Flecha} alt="Avión" />
            </button>
          </Link>
        </div>

        <div className="flex flex-col items-center justify-center">
          <div className="w-full flex flex-col items-center justify-center m-5 max-w-[1350px] sm:w-[80%] md:w-[70%] lg:w-[80%] xl:w-[80%] h-auto bg-[#EAD7BB] rounded-[25px] overflow-hidden border-8 border-[#BCA37F]">


            <div className="m-5 flex flex-col items-center justify-center">
              <div className="m-10 w-[450px] top-[71px] left-[412px] [font-family:'Quando-Regular',Helvetica] font-normal text-black text-center lg:text-[50px] text-[30px] tracking-[0] leading-[20px] whitespace-nowrap">
                Título de tu donacion:
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
                <input
                  className="lg:w-[457px] w-[90%]  h-[58px] bg-[#fff2d8] rounded-[15px] p-2 outline-none resize-none"
                  placeholder="Escribe aquí..."
                  value={titulo}
                  onChange={(e) => setTitulo(e.target.value)}
                />
              </div>
            </div>




            <div className="flex lg:w-full w-[100%] lg:flex-row flex-col-reverse gap-22">
              <div className="relative left-0">

                <div className="relative m-5 lg:w-[657px] w-[95%] h-[41px]">
                  <textarea
                    className="lg:w-[390px] w-[55%] bg-[#fff2d8] absolute h-[41px] top-0 left-[270px] rounded-[15px] p-2 outline-none resize-none"
                    placeholder="Escribe aqui"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                  />
                  <div className="absolute lg:w-[370px] w-[95%] top-[10px] left-0 [font-family:'Quando-Regular',Helvetica] font-normal text-black text-[20px] tracking-[0] leading-[20px] whitespace-nowrap">
                    Nombre Completo:
                  </div>
                  <div className="w-[63px] bg-white absolute h-[41px] top-0 left-[211px] rounded-[15px]" />
                  <img className="w-[45px] h-[35px] top-0 left-[220px] absolute object-cover" alt="Foto" src={foto6} />

                </div>

                <div className="relative m-5 lg:w-[657px] w-[95%] h-[41px]">
                  <input
                    className="lg:w-[390px] w-[55%] bg-[#fff2d8] absolute h-[41px] top-0 left-[270px] rounded-[15px] p-2 outline-none resize-none"
                    placeholder="Escribe aqui"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <div className="absolute lg:w-[370px] w-[95%] top-[10px] left-0 [font-family:'Quando-Regular',Helvetica] font-normal text-black text-[20px] tracking-[0] leading-[20px] whitespace-nowrap">
                    Email:
                  </div>
                  <div className="w-[63px] bg-white absolute h-[41px] top-0 left-[211px] rounded-[15px]" />
                  <img className="w-[45px] h-[35px] top-0 left-[220px] absolute object-cover" alt="Foto" src={foto3} />
                </div>

                <div className="relative m-5 lg:w-[657px] w-[95%] h-[41px]">
                  <input
                    className="lg:w-[390px] w-[55%] bg-[#fff2d8] absolute h-[41px] top-0 left-[270px] rounded-[15px] p-2 outline-none resize-none"
                    placeholder="Escribe aqui"
                    value={tel}
                    onChange={handleTelChange}

                  />
                  <div className="absolute lg:w-[370px] w-[95%] top-[10px] left-0 [font-family:'Quando-Regular',Helvetica] font-normal text-black text-[20px] tracking-[0] leading-[20px] whitespace-nowrap">
                    Telefono:
                  </div>
                  <div className="w-[63px] bg-white absolute h-[41px] top-0 left-[211px] rounded-[15px]" />
                  <img className="w-[45px] h-[35px] top-0 left-[220px] absolute object-cover" alt="Foto" src={foto4} />
                </div>

                <div className="relative m-5 lg:w-[657px] w-[95%] h-[41px]">
                  <input
                    className="lg:w-[390px] w-[55%] bg-[#fff2d8] absolute h-[41px] top-0 left-[270px] rounded-[15px] p-2 outline-none resize-none"
                    placeholder="Escribe aqui"
                    value={direccion}
                    onChange={(e) => setDireccion(e.target.value)}

                  />
                  <div className="absolute lg:w-[370px] w-[95%] top-[10px] left-0 [font-family:'Quando-Regular',Helvetica] font-normal text-black text-[20px] tracking-[0] leading-[20px] whitespace-nowrap">
                    Direccion:
                  </div>
                  <div className="w-[63px] bg-white absolute h-[41px] top-0 left-[211px] rounded-[15px]" />
                  <img className="w-[45px] h-[35px] top-0 left-[220px] absolute object-cover" alt="Foto" src={foto5} />
                </div>

                <div className="relative m-5 lg:w-[657px] w-[95%] h-[41px]">
                  <input
                    className="lg:w-[390px] w-[55%] bg-[#fff2d8] absolute h-[41px] top-0 left-[270px] rounded-[15px] p-2 outline-none resize-none"
                    placeholder="Escribe aqui"
                    value={tipo}
                    onChange={(e) => setTipo(e.target.value)}
                  />
                  <div className="absolute lg:w-[370px] w-[95%] top-[10px] left-0 [font-family:'Quando-Regular',Helvetica] font-normal text-black text-[20px] tracking-[0] leading-[20px] whitespace-nowrap">
                    Tipo de donacion:
                  </div>
                  <div className="w-[63px] bg-white absolute h-[41px] top-0 left-[211px] rounded-[15px]" />
                  <img className="w-[45px] h-[35px] top-0 left-[220px] absolute object-cover" alt="Foto" src={tipoimg} />
                </div>

                <div className="relative m-5 lg:w-[657px] w-[95%] h-[41px]">
                  <input
                    className="lg:w-[390px] w-[55%] bg-[#fff2d8] absolute h-[41px] top-0 left-[270px] rounded-[15px] p-2 outline-none resize-none"
                    placeholder="Escribe aqui"
                    value={cantidad}
                    onChange={handleCanChange}
                  />
                  <div className="absolute lg:w-[370px] w-[95%] top-[10px] left-0 [font-family:'Quando-Regular',Helvetica] font-normal text-black text-[20px] tracking-[0] leading-[20px] whitespace-nowrap">
                    Cantidad:
                  </div>
                  <div className="w-[63px] bg-white absolute h-[41px] top-0 left-[211px] rounded-[15px]" />
                  <img className="w-[45px] h-[35px] top-0 left-[220px] absolute object-cover" alt="Foto" src={cantidadimg} />
                </div>

                <div className="m-5 relative w-[657px] h-[161px]">
                  <textarea className="absolute resize-none outline-none border-none p-4 lg:w-[657px] w-[65%] h-[129px] top-[32px] left-0 bg-[#fff2d8] rounded-[15px]"
                    value={adicional}
                    onChange={(e) => setAdicional(e.target.value)}
                  />

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
              <div className="flex items-center justify-center w-[372px] h-[20px] top-[10px] left-0">
                <div className=" w-[170px] top-0 left-0 [font-family:'Quando-Regular',Helvetica] font-normal text-black text-[20px] tracking-[0] leading-[20px] whitespace-nowrap">
                  Aceptar términos y condiciones:
                </div>
                <div className="w-[40px] h-[40px] bg-[url(rectangle-615.svg)] bg-[100%_100%]" />
              </div>


              <div
                style={{
                  width: '40px',
                  height: '40px',
                  backgroundColor: '#FFF2D8',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  borderRadius: '10px'
                }}
                onClick={handleCheckboxClick}
              >
                {isChecked && (
                  <span style={{ fontSize: '20px', color: 'green' }}>
                    &#10003; {/* Marca de verificación */}
                  </span>
                )}
              </div>
            </div>


            <button className="scale-[90%] py-1 px-2  sm: bg-[#113946] text-B2-white py-2 px-4 rounded flex items-center m-10 transition-all duration-300 ease-in-out transform hover:scale-110 hover:bg-[#BCA37F] hover:text-white"
              onClick={handleClick}
            >
              <span className="text-[15px] sm:text-[30px] mr-7 hover:text-B2-white text-white">Listo</span>
              <img className="w-7 h-7 sm:w-10 h-10 transition-all duration-300 ease-in-out transform hover:scale-110 hover:filter hover:brightness-110" src={comprobar} alt="cheque" />
            </button>

          </div>


        </div>
        <Footer />
      </div>



    </div>
  );
};

export default Creacion_donacion;
