import React from "react";
import ModalAgenda from "../../../UI/Modal/ModalAgenda";
import AddAgenda from "./adicionar_agenda/AddAgenda";

function ComAgenda() {
  return (
    <div className="bg-[#d6a77a] flex justify-end md:px-[60px]">
      <ModalAgenda btnText="Agendar horário">
        <AddAgenda />
      </ModalAgenda>
    </div>
  );
}

export default ComAgenda;
