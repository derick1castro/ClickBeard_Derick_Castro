import React from "react";
import RegisterAdminForm from "../../../form/RegisterAdminForm";
import Wrapper from "../../../UI/Wrapper";
import Logo from "../../../../assets/Click-logo.svg";
import LoginAdminSection from "../../Users/LoginAdminSection";

function AdminRegister() {
  return (
    <Wrapper>
      <section className="h-screen flex justify-center items-center">
        <div className="sm:border-y sm:border-l border-[#d6a77a] sm:rounded-lg md:rounded-r-none w-[550px] h-[700px] items-center flex flex-col">
          <div className="py-[25px]">
            <img className="w-[180px]" src={Logo} alt="" />
          </div>
          <div className="p-6 w-[332px] pb-[30px] border border-[#d6a77a] rounded-lg">
            <h1 className="text-3xl font-bold pb-5 text-[#d6a77a]">
              Cadastro Admin
            </h1>
            <RegisterAdminForm />
          </div>
        </div>
        <div className="hidden md:flex">
          <LoginAdminSection />
        </div>
      </section>
    </Wrapper>
  );
}

export default AdminRegister;
