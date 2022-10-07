import React, { useContext, useState, useEffect } from "react";
import Wrapper from "../../../UI/Wrapper";
import ComAgenda from "../../user/user_agenda/ComAgenda";
import SemAgenda from "../../user/user_agenda/SemAgenda";
import { Context } from "../../../../context/AdminContext";
import api from "../../../../utils/api";
import AdminNavbar from "../../../UI/AdminNavbar";

function MainAdminAgenda() {
  const [agenda, setAgenda] = useState([]);
  const [token] = useState(localStorage.getItem("token") || "");
  const { authenticated } = useContext(Context);

  useEffect(() => {
    api.get("/agenda/all-agendas").then((response) => {
      setAgenda(response.data.agenda);
    });
  }, [token]);

  async function removeAgenda(id) {
    await api
      .delete(`/agenda/${id}`)
      .then((response) => {
        const updatedAgenda = agenda.filter((agenda) => agenda._id !== id);
        setAgenda(updatedAgenda);
        return response.data;
      })
      .catch((err) => {
        return err.response.data;
      });
  }

  return (
    <Wrapper>
      {authenticated ? (
        <section>
          <AdminNavbar />
          <div>
            <div className="flex flex-col items-center mt-[20px] mb-[20px]">
              <p className="text-[42px] font-bold text-[#d6a77a]">
                Agendamentos
              </p>
              <span>
                <p className="text-[#d6a77a]">
                  {agenda.length} Horários agendados
                </p>
              </span>
            </div>
            <section className=" flex flex-wrap sm:mx-[150px] justify-center sm:justify-start">
              {agenda.map((agenda) => (
                <div className="w-[400px] sm:w-[505px] border border-[#d6a77a] rounded-xl m-4">
                  <div className=" my-3 mx-4 space-y-3 text-[#d6a77a]">
                    <p>
                      <span className="font-bold text-xl">Nome : </span>
                      {agenda.name}
                    </p>
                    <p>
                      <span className="font-bold text-xl">Horário : </span>
                      12:00 horas
                    </p>
                    <p>
                      <span className="font-bold text-xl">
                        Especialidades :
                      </span>{" "}
                    </p>
                    <div className="space-y-3">
                      <p>
                        {agenda.especializacao1 === "true"
                          ? "● Corte de tesoura"
                          : ""}
                      </p>
                      <p>
                        {agenda.especializacao2 === "true"
                          ? "● Corte de máquina"
                          : ""}
                      </p>
                      <p>
                        {agenda.especializacao3 === "true" ? "● Pezinho" : ""}
                      </p>
                      <p>
                        {agenda.especializacao4 === "true"
                          ? "● Sobrancelha"
                          : ""}
                      </p>
                      <p>
                        {agenda.especializacao4 === "true" ? "● Barba" : ""}
                      </p>
                      <p>
                        {agenda.especializacao4 === "true"
                          ? "● Corte Social"
                          : ""}
                      </p>
                    </div>
                    <div className="flex justify-between">
                      <button className="text-white bg-[#d6a77a] hover:hover:bg-borrow duration-400 transition ease-in-out py-3 px-8 rounded-md text-md w-[175px] sm:w-[200px]">
                        Editar
                      </button>
                      <button
                        className="text-white bg-[#4e0707] hover:bg-borrow duration-400 transition ease-in-out py-3 px-8 rounded-md text-md w-[175px] sm:w-[200px]"
                        onClick={() => {
                          removeAgenda(agenda._id);
                        }}
                      >
                        Excluir
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </section>
          </div>
        </section>
      ) : null}
    </Wrapper>
  );
}

export default MainAdminAgenda;
