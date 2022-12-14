import React from "react";
import ModalAgenda from "../../../UI/Modal/ModalAgenda";
import AddAgenda from "./adicionar_agenda/AddAgenda";

function SemAgenda() {
  return (
    <section className="h-[90vh]">
      <div className="flex flex-col items-center justify-center h-full space-y-2 text-[#d6a77a]">
        <p>Ainda não existe um horário cadastrado no sistema.</p>
        <p>Deseja agendar um horário?</p>
        <div>
          <ModalAgenda btnText="Agendar horário">
            <AddAgenda />
          </ModalAgenda>
        </div>
      </div>
    </section>
  );
}

export default SemAgenda;
