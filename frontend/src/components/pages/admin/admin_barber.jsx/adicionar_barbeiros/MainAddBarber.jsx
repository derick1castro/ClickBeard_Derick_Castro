import React, { useState, useEffect } from "react";
import api from "../../../../../utils/api";
import BarbeirosForm from "../../../../form/BarbeirosForm";
import Wrapper from "../../../../UI/Wrapper";

function MainAddBarber() {
  async function registerBarber(barbeiro) {
    await api
      .post("barbeiros/create", barbeiro)
      .then((response) => {
        return response.data;
      })
      .catch((err) => {
        return err.response.data;
      });
  }
  return (
    <Wrapper>
      <BarbeirosForm
        handleSubmit={registerBarber}
        btnText="Cadastrar Barbeiro"
      />
    </Wrapper>
  );
}

export default MainAddBarber;
