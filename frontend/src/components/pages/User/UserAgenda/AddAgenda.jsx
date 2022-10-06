import React, { useState, useEffect } from "react";
import Button from "../../../UI/Button";
import Input from "../../../UI/Input";
import Select from "./SelectBarber";

function AddAgenda() {
  function handleSubmit(e) {
    e.preventDefault();
  }
  function handleChange(e) {}

  return (
    <section className="max-w-[350px] mx-auto">
      <h1 className="text-borrow text-3xl font-bold my-10">
        Agendar novo horário
      </h1>
      <form onSubmit={handleSubmit}>
        <Select
          text="Barbeiros"
          name="barbeiros"
          handleOnChange={handleChange}
        />
        <Input
          text="Horário"
          type="text"
          name="horario"
          placeholder="Escolha a hora desejada"
          handleOnChange={handleChange}
        />
        <Input
          text="Especialidade"
          type="text"
          name="especialidade"
          placeholder="Escolha a especialidade desejada"
          handleOnChange={handleChange}
        />

        <Button>Agendar novo horário</Button>
      </form>
    </section>
  );
}

export default AddAgenda;
