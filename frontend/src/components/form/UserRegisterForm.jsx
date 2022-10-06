import React, { useState, useContext } from "react";
import Input from "../UI/Input";
import { Link } from "react-router-dom";
import { Context } from "../../context/UserContext";

function UserRegisterForm() {
  const [user, setUser] = useState({});
  const { register } = useContext(Context);

  function handleChange(e) {
    setUser({ ...user, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    register(user);
  }
  return (
    <form className="flex flex-col w-[100%]" onSubmit={handleSubmit}>
      <Input
        text="Nome Completo"
        type="name"
        name="name"
        placeholder="Digite o seu nome"
        handleOnChange={handleChange}
      />
      <Input
        text="E-mail"
        type="email"
        name="email"
        placeholder="Digite o seu e-mail"
        handleOnChange={handleChange}
      />
      <Input
        text="Senha"
        type="password"
        name="password"
        placeholder="Digite a sua senha"
        handleOnChange={handleChange}
      />

      <input
        className="rounded-lg font-bold text-white py-3 w-[100%] bg-[#d6a77a] hover:bg-[#775533] transition ease-out duration-400 cursor-pointer"
        type="submit"
        value="Register"
      />
      <div className="flex items-center justify-center pt-3 text-sm text-[#d6a77a]">
        <Link to="/">Já sou cliente!</Link>
      </div>
    </form>
  );
}

export default UserRegisterForm;
