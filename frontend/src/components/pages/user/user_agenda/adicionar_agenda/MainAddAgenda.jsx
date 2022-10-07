import React from "react";
import AgendaForm from "../../../../form/AgendaForm";
import Wrapper from "../../../../UI/Wrapper";
import api from '../../../../../utils/api'

function MainAddAgenda() {
  async function registerAgenda(agenda) {
    await api
      .post("/agenda/create", agenda)
      .then((response) => {
        return response.data;
      })
      .catch((err) => {
        return err.response.data;
      });
  }

  return (
    <Wrapper>
      <AgendaForm handleSubmit={registerAgenda} btnText="Agendar horário" />
    </Wrapper>
  );
}

export default MainAddAgenda;
