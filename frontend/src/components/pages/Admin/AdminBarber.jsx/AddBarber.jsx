import React from "react";
import Button from "../../../UI/Button";
import Input from "../../../UI/Input";

function AddBarber() {
  function handleSubmit(e) {
    e.preventDefault();
  }
  function handleChange(e) {}

  return (
    <section className="max-w-[350px] mx-auto">
      <h1 className="text-borrow text-3xl font-bold my-10">
        Cadastrar novo barbeiro
      </h1>
      <form onSubmit={handleSubmit}>
        <Input
          text="Nome completo"
          type="text"
          name="nome"
          placeholder="Digite o nome completo"
          handleOnChange={handleChange}
        />
        <Input
          text="Idade"
          type="number"
          name="idade"
          placeholder="Digite a idade"
          handleOnChange={handleChange}
        />
        <Input
          text="Data de contratação"
          type="date"
          name="data"
          placeholder="Escolha a data de contratação"
          handleOnChange={handleChange}
        />

        <Button>Cadastrar barbeiro</Button>
      </form>
    </section>
  );
}

export default AddBarber;
