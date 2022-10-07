import React, { useState } from "react";
import SelectBarber from "../pages/user/user_agenda/SelectBarber";
import Input from "../UI/Input";
import InputCheckbox from "../UI/InputCheckbox";
import SelectHora from "../UI/SelectHora";

function AgendaForm({ handleSubmit, barbeirosData, btnText }) {
  const [barbeiros, setBarbeiros] = useState(barbeirosData || {});
  const [especializacao1, setEspecializacao1] = useState(false);
  const [especializacao2, setEspecializacao2] = useState(false);
  const [especializacao3, setEspecializacao3] = useState(false);
  const [especializacao4, setEspecializacao4] = useState(false);
  const [especializacao5, setEspecializacao5] = useState(false);
  const [especializacao6, setEspecializacao6] = useState(false);
  const [barbeiro, setBarbeiro] = useState({});

  function handleChange(e) {
    console.log(e.target);
    setBarbeiro(barbeiros.filter((b) => b._id == e.target.value)[0]);
    console.log(barbeiros);
    console.log(barbeiro);

    if (barbeiro.especializacao1 == "true") {
      setEspecializacao1(true);
    } else {
      setEspecializacao1(false);
    }
    if (barbeiro.especializacao2 == "true") {
      setEspecializacao2(true);
    } else {
      setEspecializacao2(false);
    }
    if (barbeiro.especializacao3 == "true") {
      setEspecializacao3(true);
    } else {
      setEspecializacao3(false);
    }
    if (barbeiro.especializacao4 == "true") {
      setEspecializacao4(true);
    } else {
      setEspecializacao4(false);
    }
    if (barbeiro.especializacao5 == "true") {
      setEspecializacao5(true);
    } else {
      setEspecializacao5(false);
    }
    if (barbeiro.especializacao6 == "true") {
      setEspecializacao6(true);
    } else {
      setEspecializacao6(false);
    }
  }

  function handleChangeCheck(e) {
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setBarbeiros({
      ...barbeiros,
      [e.target.name]: value,
    });
  }

  function submit(e) {
    e.preventDefault();
    console.log(barbeiros);
    handleSubmit({
      name: barbeiro.name,
      especializacao1,
      especializacao2,
      especializacao3,
      especializacao4,
      especializacao5,
      especializacao6,
    });
  }

  function barber(e) {
    setBarbeiros(e);
  }

  return (
    <section className="max-w-[350px] mx-auto">
      <form onSubmit={submit}>
        <SelectBarber
          handleOnChange={handleChange}
          Barber={barber}
          name={"barbeiro"}
          text="Selecione um barbeiro"
          value={barbeiros.name || ""}
        />
        <SelectHora text="Horários" />

        <p className="text-[#d6a77a] font-bold">Especialidades :</p>
        <div className="flex flex-wrap justify-between mt-[20px]">
          <InputCheckbox
            text="Corte de tesoura"
            type="checkbox"
            name="especializacao1"
            disabled={!especializacao1}
            handleOnChange={handleChangeCheck}
            // value={barbeiros.especializacao1 || false}
          />
          <InputCheckbox
            text="Corte Social"
            type="checkbox"
            name="especializacao6"
            disabled={!especializacao6}
            handleOnChange={handleChangeCheck}
          />
          <InputCheckbox
            text="Pezinho"
            type="checkbox"
            name="especializacao3"
            disabled={!especializacao3}
            handleOnChange={handleChangeCheck}
          />
          <InputCheckbox
            text="Corte de máquina"
            type="checkbox"
            name="especializacao2"
            disabled={!especializacao2}
            handleOnChange={handleChangeCheck}
          />
          <InputCheckbox
            text="Sobrancelha"
            type="checkbox"
            name="especializacao4"
            disabled={!especializacao4}
            handleOnChange={handleChangeCheck}
          />
          <InputCheckbox
            text="Barba"
            type="checkbox"
            name="especializacao5"
            disabled={!especializacao5}
            handleOnChange={handleChangeCheck}
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
