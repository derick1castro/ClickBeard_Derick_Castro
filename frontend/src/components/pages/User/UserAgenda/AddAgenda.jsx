import React from "react";
import AgendaForm from "../../../form/AgendaForm";

function AddAgenda() {

  return (
    <section className="max-w-[350px] mx-auto">
      <h1 className="text-borrow text-3xl font-bold my-10">
        Agendar horário
      </h1>
      <AgendaForm btnText='Agendar horário'/>
    </section>
  );
}

export default AddAgenda;
