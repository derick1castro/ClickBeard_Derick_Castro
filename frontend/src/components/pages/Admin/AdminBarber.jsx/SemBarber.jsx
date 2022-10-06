import React from "react";
import Modal from "../../../UI/Modal/Modal";
import AddBarber from "./AddBarber";

function SemBarber() {
  return (
    <section className="h-[90vh]">
      <div className="flex flex-col items-center justify-center h-full space-y-2 text-[#d6a77a]">
        <p>Ainda não há barbeiros cadastrados.</p>
        <p>Deseja cadastrar um barbeiro?</p>
        <div>
          <Modal btnText="Cadastrar barbeiro">
            <AddBarber />
          </Modal>
        </div>
      </div>
    </section>
  );
}

export default SemBarber;
