import React, { useState, useContext } from "react";
import Input from "../../../UI/Input";
import { Link } from "react-router-dom";
import LoginSection from "../LoginSection";
import Logo from "../../../../assets/Click-logo.svg";
import { Context } from "../../../../context/UserContext";
import Message from "../../../UI/Message/Message";

function Register() {
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
    <main>
      <section className="h-screen flex justify-center items-center">
        <div className="sm:border border-[#d6a77a] sm:rounded-lg md:rounded-r-none w-[550px] h-[700px] items-center flex flex-col">
          <div className="py-[25px]">
            <img className="w-[180px]" src={Logo} alt="" />
          </div>
          <div className="p-6 w-[332px] pb-[30px] border border-[#d6a77a] rounded-lg">
            <h1 className="text-3xl font-bold pb-5 text-[#d6a77a]">
              Registre-se aqui!
            </h1>
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
          </div>
        </div>
        <div className="hidden md:flex">
          <LoginSection />
        </div>
      </section>
    </main>
  );
}

export default Register;
