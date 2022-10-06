import React from "react";
import Wrapper from "../../../../UI/Wrapper";
import MainAddBarber from "./MainAddBarber";

function AddBarber() {
  return (
    <Wrapper>
      <h1 className="text-borrow text-3xl font-bold ml-7 my-10">
        Cadastrar barbeiro
      </h1>
      <MainAddBarber />
    </Wrapper>
  );
}

export default AddBarber;
