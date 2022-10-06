import React from "react";
import Modal from "../../../UI/Modal/Modal";
import AddBarber from "./AddBarber";

function ComBarber() {
  return (
    <div className="bg-[#d6a77a] flex justify-end px-[60px]">
      <Modal btnText="Cadastrar barbeiro">
        <AddBarber />
      </Modal>
    </div>
  );
}

export default ComBarber;
