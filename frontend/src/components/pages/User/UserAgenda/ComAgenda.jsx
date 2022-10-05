import React from "react";
import Modal from '../../../UI/Modal/Modal'
import AddAgenda from "./AddAgenda";

function ComAgenda() {
  return (
    <div className="bg-[#d6a77a] flex justify-end px-[60px]">
      <Modal btnText="Agendar horário">
        <AddAgenda />
      </Modal>
    </div>
  );
}

export default ComAgenda;
