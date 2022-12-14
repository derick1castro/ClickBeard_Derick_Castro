import React, { useState, useEffect, useContext } from "react";
import api from "../../../../../utils/api";
import { Context } from "../../../../../context/AdminContext";

import ComBarber from "../ComBarber";
import SemBarber from "../SemBarber";
import Wrapper from "../../../../UI/Wrapper";

function MainAdminBarber() {
  const [barber, setBarber] = useState([]);
  const [token] = useState(localStorage.getItem("token") || "");
  const { authenticated } = useContext(Context);

  useEffect(() => {
    api.get("/barbeiros/allbarbers").then((response) => {
      setBarber(response.data.barber);
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
          {barber.length > 0 ? <ComBarber /> : <SemBarber />}
          <div className="flex flex-col items-center mt-[20px] mb-[20px]">
            <p className="text-[42px] font-bold text-[#d6a77a]">Barbeiros</p>
            <span>
              <p className="text-[#d6a77a]">
                {barber.length} barbeiros cadastrados
              </p>
            </span>
          </div>
          <section className=" flex flex-wrap sm:mx-[150px] justify-center lg:justify-center sm:justify-start">
            {barber.map((barbeiros) => (
              <div
                key={barbeiros._id}
                className="w-[400px] sm:w-[505px] xl:w-[420px] 2x:w-[600px] border border-[#d6a77a] rounded-xl m-4"
              >
                <div className=" my-3 mx-4 space-y-3 text-[#d6a77a]">
                  <p>
                    <span className="font-bold text-xl">Nome :</span>{" "}
                    {barbeiros.name}
                  </p>
                  <p>
                    <span className="font-bold text-xl">Idade :</span>{" "}
                    {barbeiros.age} anos
                  </p>
                  <p>
                    <span className="font-bold text-xl">Contratado em :</span>{" "}
                    {barbeiros.hiring}
                  </p>
                  <div className="flex flex-wrap justify-between">
                    <label className="mr-[30px] w-[148px]" htmlFor="esp">
                      <input
                        className="mr-2"
                        type="checkbox"
                        disabled={
                          barbeiros.especializacao1 == "true" ? false : true
                        }
                        id="esp"
                      />
                      {barbeiros.especializacao1 === "true"
                        ? "Corte de tesoura"
                        : "Corte de tesoura"}
                    </label>
                    <label className="mr-[30px] w-[148px]" htmlFor="esp">
                      <input
                        className="mr-2"
                        type="checkbox"
                        disabled={
                          barbeiros.especializacao2 == "true" ? false : true
                        }
                        id="esp"
                      />
                      {barbeiros.especializacao2 === "true"
                        ? "Corte de m??quina"
                        : "Corte de m??quina"}
                    </label>
                    <label className="mr-[30px] w-[148px]" htmlFor="esp">
                      <input
                        className="mr-2 "
                        type="checkbox"
                        disabled={
                          barbeiros.especializacao3 == "true" ? false : true
                        }
                        id="esp"
                      />
                      {barbeiros.especializacao3 === "true"
                        ? "Pezinho"
                        : "Pezinho"}
                    </label>
                    <label className="mr-[30px] w-[148px]" htmlFor="esp">
                      <input
                        className="mr-2"
                        type="checkbox"
                        disabled={
                          barbeiros.especializacao4 == "true" ? false : true
                        }
                        id="esp"
                      />
                      {barbeiros.especializacao4 === "true"
                        ? "Sobrancelha"
                        : "Sobrancelha"}
                    </label>
                    <label className="mr-[30px] w-[148px]" htmlFor="esp">
                      <input
                        className="mr-2"
                        type="checkbox"
                        disabled={
                          barbeiros.especializacao5 == "true" ? false : true
                        }
                        id="esp"
                      />
                      {barbeiros.especializacao5 === "true" ? "Barba" : "Barba"}
                    </label>
                    <label className="mr-[30px] w-[148px]" htmlFor="esp">
                      <input
                        className="mr-2"
                        type="checkbox"
                        disabled={
                          barbeiros.especializacao6 == "true" ? false : true
                        }
                        id="esp"
                      />
                      {barbeiros.especializacao6 === "true"
                        ? "Corte Social"
                        : "Corte Social"}
                    </label>
                  </div>
                  <div className="flex justify-between sm:space-x-10">
                    <button className="text-white bg-[#d6a77a] hover:bg-borrow duration-400 transition ease-in-out py-3 px-8 rounded-md text-md w-[150px] sm:w-[180px] md:w-[220px] ">
                      Editar
                    </button>
                    <button
                      className="text-white bg-[#4e0707] hover:bg-borrow duration-400 transition ease-in-out py-3 px-8 rounded-md text-md w-[150px] sm:w-[180px] md:w-[220px]"
                      onClick={() => {
                        removeBarber(barbeiros._id);
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
      ) : null}
    </Wrapper>
  );
}

export default MainAdminBarber;
