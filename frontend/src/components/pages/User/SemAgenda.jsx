import React from "react";
import Modal from '../../UI/Modal/Modal'
import AddAgenda from "./UserAgenda/AddAgenda";

function SemAgenda() {
  return (
    <section className="h-[90vh]">
      <div className="flex flex-col items-center justify-center h-full space-y-2 text-[#d6a77a]">
        <p>Ainda não existe um horário cadastrado no sistema.</p>
        <p>Deseja agendar um horário?</p>
        <div>
          <Modal btnText='Agendar horário'>
            <AddAgenda />
          </Modal>
        </div>
      </div>
    </section>
  );
}

export default SemAgenda;
