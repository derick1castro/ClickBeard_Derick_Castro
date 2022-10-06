import React from "react";
import LoginSection from "../../Users/LoginSection";
import Logo from "../../../../assets/Click-logo.svg";
import UserRegisterForm from "../../../form/UserRegisterForm";
import Wrapper from "../../../UI/Wrapper";

function Register() {
  return (
    <Wrapper>
      <section className="h-screen flex justify-center items-center">
        <div className="sm:border border-[#d6a77a] sm:rounded-lg md:rounded-r-none w-[550px] h-[700px] items-center flex flex-col">
          <div className="py-[25px]">
            <img className="w-[180px]" src={Logo} alt="" />
          </div>
          <div className="p-6 w-[332px] pb-[30px] border border-[#d6a77a] rounded-lg">
            <h1 className="text-3xl font-bold pb-5 text-[#d6a77a]">
              Registre-se aqui!
            </h1>
            <UserRegisterForm />
          </div>
        </div>
        <div className="hidden md:flex">
          <LoginSection />
        </div>
      </section>
    </Wrapper>
  );
}

export default Register;
