import React, { useContext, useState, useEffect } from "react";
import Navbar from "../../../../UI/Navbar";
import Wrapper from "../../../../UI/Wrapper";
import ComAgenda from "../ComAgenda";
import SemAgenda from "../SemAgenda";
import { Context } from "../../../../../context/UserContext";
import api from "../../../../../utils/api";

function MainAgenda() {
  const [agenda, setAgenda] = useState([]);
  const [token] = useState(localStorage.getItem("token") || "");
  const { authenticated } = useContext(Context);

  useEffect(() => {
    api.get("/agenda/all-agendas").then((response) => {
      setAgenda(response.data.agenda);
    });
  }, [token]);

  async function removeBarber(id) {
    await api
      .delete(`/barbeiros/${id}`)
      .then((response) => {
        const updatedBarber = barber.filter(
          (barbeiros) => barbeiros._id !== id
        );
        setBarber(updatedBarber);
        return response.data;
      })
      .catch((err) => {
        return err.response.data;
      });
  }

  return (
    <Wrapper>
      {authenticated ? (
        <div>
          {agenda.length > 0 ? <ComAgenda /> : <SemAgenda />}
          <div className="flex flex-col items-center mt-[20px] mb-[20px]">
            <p className="text-[42px] font-bold text-[#d6a77a]">Agendamentos</p>
            <span>
              <p className="text-[#d6a77a]">
                {agenda.length} Horários agendados
              </p>
            </span>
          </div>
          <section className=" flex flex-wrap sm:mx-[150px] justify-center sm:justify-start">
            {agenda.map((agenda) => {
              <div className="w-[400px] sm:w-[505px] border border-platinum rounded-xl m-4">
                <div className=" my-3 mx-4 space-y-3 ">
                  <p>
                    <span className="font-bold text-xl">Nome : </span>
                    {agenda.name}Dérick Castro Domingos
                    {agenda.hora} horas
                  </p>
                  <p>
                    <span className="font-bold text-xl">Horário : </span>
                    12:00 horas
                  </p>
                  <p>
                    <span className="font-bold text-xl">Especialidades :</span>{" "}
                  </p>
                  <div className="space-y-3">
                    <p>{agenda.especializacao1}</p>
                    <p>{agenda.especializacao2}</p>
                    <p>{agenda.especializacao3}</p>
                    <p>{agenda.especializacao4}</p>
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
              </div>;
            })}
          </section>
        </div>
      ) : null}
    </Wrapper>
  );
}

export default MainAgenda;
