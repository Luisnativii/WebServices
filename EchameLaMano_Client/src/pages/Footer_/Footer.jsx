import PropTypes from "prop-types";
import React from "react";
import Logo from "../../assets/FooterIMG/el-salvador-3.png"
import { Link } from "react-router-dom";

export const Footer = ({ property1, className }) => {
  return (
    <div>
      <div className="bottom-0 w-full bg-[#898b8a] flex flex-col ">
        <div className="flex flex-col space-x-14 md:flex-row items-center">
          <div className=" w-[278px] h-[242px] top-3 left-[47px]">
          
              <img
                className=" w-[136px] h-[148px] top-[8px] object-cover"
                alt="El salvador"
                src={Logo}
              />
            

            <p className=" w-[274px] top-[167px] left-[2px] [font-family:'Quando-Regular',Helvetica] font-normal text-black text-[20px] tracking-[0] leading-[normal]">
              Entidad sin fines de lucro registrada en El Salvador
            </p>

          </div>

          <div className="flex w-auto h-[181px] left-0 gap-[10px] p-[10px] border-l-2 [border-left-style:solid] border-black">
            <p className="relative w-auto mt-[-13.50px] mb-[-9.50px] [font-family:'Quando-Regular',Helvetica] font-normal text-black text-[27px] tracking-[0] leading-[normal]">
              <span className="[font-family:'Quando-Regular',Helvetica] font-normal text-black lg:text-[27px] text-[50%] tracking-[0]">
                Nuestros Proyectos :<br />
              </span>
              <span className="lg:text-[24px] text-[10px]">
                <br />
                Ayuda solidaria <br />
                <br />
                Recibe tu ayuda <br />
              </span>
            </p>
          </div>


          <div className="flex w-auto h-[107px] items-center justify-center gap-[10px] p-[10px] left-[371px] border-l-2 [border-left-style:solid] border-black">
            <p className="relative w-auto mt-[-7.58px] mb-[-3.58px] [font-family:'Quando-Regular',Helvetica] font-normal text-black text-[27px] tracking-[0] leading-[normal]">
              <span className="[font-family:'Quando-Regular',Helvetica] font-normal text-black lg:text-[27px] text-[50%] tracking-[0]">
                Contáctanos :<br />
                <br />
              </span>
              <span className="lg:text-[24px] text-[10px]">echamelamano@gmail.com</span>
            </p>
          </div>

        </div>
        <div className=" flex items-center w-full h-[104px] bg-black p-2">
          <p className="font-sans text-white text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">
            © 2023 Échame la Mano. All Rights Reserved.
          </p>
        </div>

      </div>


    </div>
  );
};

Footer.propTypes = {
  property1: PropTypes.oneOf(["default"]),
};