import React, { useState } from "react";
import Input from "../UI/Input";
import InputCheckbox from "../UI/InputCheckbox";

function BarbeirosForm({ handleSubmit, barbeirosData, btnText }) {
  const [barbeiros, setBarbeiros] = useState(barbeirosData || {});

  function handleChange(e) {
    setBarbeiros({ ...barbeiros, [e.target.name]: e.target.value });
  }

  function submit(e) {
    e.preventDefault();
    console.log(barbeiros);
    handleSubmit(barbeiros);
  }

  return (
    <section className="max-w-[350px] mx-auto">
      <form onSubmit={submit}>
        <Input
          text="Nome completo"
          type="text"
          name="name"
          placeholder="Digite o nome completo"
          handleOnChange={handleChange}
          value={barbeiros.name || ""}
        />
        <Input
          text="Idade"
          type="number"
          name="age"
          placeholder="Digite a idade"
          handleOnChange={handleChange}
          value={barbeiros.age || ""}
        />
        <Input
          text="Data de contratação"
          type="date"
          name="hiring"
          placeholder="Escolha a data de contratação"
          handleOnChange={handleChange}
          value={barbeiros.hiring || ""}
        />
        <div className="flex flex-wrap justify-between mt-[20px]">
          <InputCheckbox
            text="Corte de tesoura"
            type="checkbox"
            name="especializacao1"
            placeholder="Escolha a data de contratação"
            handleOnChange={handleChange}
            value={barbeiros.especializacao1 || ""}
          />
            <InputCheckbox
              text="Corte Social"
              type="checkbox"
              name="especializacao6"
              placeholder="Escolha a data de contratação"
              handleOnChange={handleChange}
              value={barbeiros.especializacao6 || ""}
            />
            <InputCheckbox
              text="Pezinho"
              type="checkbox"
              name="especializacao3"
              placeholder="Escolha a data de contratação"
              handleOnChange={handleChange}
              value={barbeiros.especializacao3 || ""}
            />
          <InputCheckbox
            text="Corte de máquina"
            type="checkbox"
            name="especializacao2"
            placeholder="Escolha a data de contratação"
            handleOnChange={handleChange}
            value={barbeiros.especializacao2 || ""}
          />
          <InputCheckbox
            text="Sobrancelha"
            type="checkbox"
            name="especializacao4"
            placeholder="Escolha a data de contratação"
            handleOnChange={handleChange}
            value={barbeiros.especializacao4 || ""}
          />
          <InputCheckbox
            text="Barba"
            type="checkbox"
            name="especializacao5"
            placeholder="Escolha a data de contratação"
            handleOnChange={handleChange}
            value={barbeiros.especializacao5 || ""}
          />
        </div>

        <input
          className="text-white bg-[#d6a77a] hover:bg-borrow duration-400 transition ease-in-out py-3 px-8 rounded-md text-md"
          type="submit"
          value={btnText}
        />
        {/* <Button>Cadastrar barbeiro</Button> */}
      </form>
    </section>
  );
}

export default BarbeirosForm;
