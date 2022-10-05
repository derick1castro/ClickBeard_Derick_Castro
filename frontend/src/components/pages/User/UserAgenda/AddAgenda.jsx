import React from "react";
import Button from "../../../UI/Button";
import Input from "../../../UI/Input";

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
        <Input
          text="Barbeiro"
          type="text"
          name="barbeiro"
          placeholder="Escolha um barbeiro de sua preferência"
          handleOnChange={handleChange}
        />
        {/* <Select text="Empresa" name="empresa" handleOnChange={handleChange} /> */}
        <Button>Agendar novo horário</Button>
      </form>
    </section>
  );
}

export default AddAgenda;
