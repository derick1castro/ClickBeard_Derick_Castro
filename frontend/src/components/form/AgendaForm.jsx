import React, { useState } from "react";
import SelectBarber from "../pages/User/UserAgenda/SelectBarber";
import Input from "../UI/Input";
import InputCheckbox from "../UI/InputCheckbox";

function AgendaForm({ handleSubmit, barbeirosData, btnText }) {
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
      <form>
        <SelectBarber text="Selecione um barbeiro" />
        <SelectBarber text="Selecione um hórario" />
        <p>Especialidades</p>
        <div className="flex flex-wrap justify-between mt-[20px]">
          <InputCheckbox
            text="Corte de tesoura"
            type="checkbox"
            name="especializacao1"
            placeholder="Escolha a data de contratação"
          />
          <InputCheckbox
            text="Corte Social"
            type="checkbox"
            name="especializacao6"
            placeholder="Escolha a data de contratação"
          />
          <InputCheckbox
            text="Pezinho"
            type="checkbox"
            name="especializacao3"
            placeholder="Escolha a data de contratação"
          />
          <InputCheckbox
            text="Corte de máquina"
            type="checkbox"
            name="especializacao2"
            placeholder="Escolha a data de contratação"
          />
          <InputCheckbox
            text="Sobrancelha"
            type="checkbox"
            name="especializacao4"
            placeholder="Escolha a data de contratação"
          />
          <InputCheckbox
            text="Barba"
            type="checkbox"
            name="especializacao5"
            placeholder="Escolha a data de contratação"
          />
        </div>

        <input
          className="text-white bg-[#d6a77a] hover:bg-borrow duration-400 transition ease-in-out py-3 px-8 rounded-md text-md"
          type="submit"
          value={btnText}
        />
      </form>
    </section>
  );
}

export default AgendaForm;
