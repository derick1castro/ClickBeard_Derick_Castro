import React, { useState, useContext } from "react";
import Input from "../UI/Input";
import { Link } from "react-router-dom";
import { Context } from "../../context/AdminContext";

function LoginAdminForm() {
  const [admin, setAdmin] = useState({});
  const { loginAdmin } = useContext(Context);

  function handleChange(e) {
    setAdmin({ ...admin, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    loginAdmin(admin);
  }
  return (
    <form className="flex flex-col w-[100%]" onSubmit={handleSubmit}>
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
          <Link className="text-[#d6a77a] hover:text-[#775533] transition ease-out duration-400">
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
        <Link to="/register-admin">Ainda não possuo acesso!</Link>
      </div>
    </form>
  );
}

export default LoginAdminForm;
