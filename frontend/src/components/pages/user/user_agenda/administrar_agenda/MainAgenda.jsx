import React, { useContext } from "react";
import Navbar from "../../../../UI/Navbar";
import Wrapper from "../../../../UI/Wrapper";
import ComAgenda from "../ComAgenda";
import SemAgenda from "../SemAgenda";
import { Context } from "../../../../../context/UserContext";

function MainAgenda() {
  const { authenticated } = useContext(Context);

  return (
    <Wrapper>
      <Navbar />
      <div>
        <div className="flex flex-col items-center mt-[20px] mb-[20px]">
          <p className="text-[42px] font-bold text-[#d6a77a]">Agendamentos</p>
          <span>
            <p className="text-[#d6a77a]"> 1 Horários agendados</p>
          </span>
        </div>
        <section className=" flex flex-wrap sm:mx-[150px] justify-center sm:justify-start">
          <div className="w-[400px] sm:w-[505px] border border-platinum rounded-xl m-4">
            <div className=" my-3 mx-4 space-y-3 ">
              <p>
                <span className="font-bold text-xl">Nome : </span>
                Dérick Castro Domingos
              </p>
              <p>
                <span className="font-bold text-xl">Horário : </span>
                12:00 horas
              </p>
              <p>
                <span className="font-bold text-xl">Especialidades :</span>{" "}
              </p>
              <div className="space-y-3">
                <p>Corte de tesoura</p>
                <p>Corte Social</p>
                <p>Corte de Máquina</p>
                <p>Pezinho</p>
                <p>Sobrancelha</p>
                <p>Barba</p>
              </div>
              <div className="flex justify-between">
                <button className="text-richBlack bg-platinum hover:bg-[#353535] duration-400 transition ease-in-out py-3 px-8 rounded-md text-md w-[175px] sm:w-[200px]">
                  Editar
                </button>
                <button className="text-white bg-[#4e0707] hover:bg-borrow duration-400 transition ease-in-out py-3 px-8 rounded-md text-md w-[175px] sm:w-[200px]">
                  Excluir
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Wrapper>
  );
}

export default MainAgenda;
