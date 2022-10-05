import React from "react";
import LoginSection from "./LoginSection";
import Input from "../../UI/Input";
import { Link } from "react-router-dom";
import Logo from "../../../assets/Click-logo.svg";

function Login() {
  function handleChange(e) {}

  return (
    <main>
      <section className="w-screen h-screen flex justify-center items-center">
        <div className="sm:border border-[#d6a77a] sm:rounded-lg md:rounded-r-none w-[550px] h-[700px] items-center flex flex-col">
          <div className="py-[25px]">
            <img className="w-[180px]" src={Logo} alt="" />
          </div>
          <div className="p-6 w-[332px] pb-[30px] border border-[#d6a77a] rounded-lg">
            <h1 className="text-3xl font-bold pb-2 text-[#d6a77a]">Login</h1>
            <p className="pb-5 text-[#d6a77a]">
              Faça seu login e agende um horário!
            </p>
            <form className="flex flex-col w-[100%]">
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
              <div className="flex justify-between text-sm">
                <div className="pb-5 flex items-center">
                  <input type="radio" id="radio" />
                  <label className="pl-1 text-[#d6a77a]" htmlFor="radio">
                    Lembrar acesso
                  </label>
                </div>

                <div>
                  <Link
                    className="text-[#d6a77a] hover:text-[#775533] transition ease-out duration-400"
                    to="/"
                  >
                    Esqueceu a senha ?
                  </Link>
                </div>
              </div>
              <input
                className="rounded-lg font-bold text-white py-3 w-[100%] bg-[#d6a77a] hover:bg-[#775533] transition ease-out duration-400 cursor-pointer"
                type="submit"
                value="Login"
              />
              <div className="flex items-center justify-center pt-3 text-sm text-[#d6a77a] hover:text-[#775533] ">
                <Link to="/register">Ainda não sou cliente!</Link>
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

export default Login;
