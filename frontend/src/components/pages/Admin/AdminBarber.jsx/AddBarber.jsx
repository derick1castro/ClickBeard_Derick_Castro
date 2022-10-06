import React, { useState, useEffect } from "react";
import api from "../../../../utils/api";
import BarbeirosForm from "../../../form/BarbeirosForm";

function AddBarber() {
  const [token] = useState(localStorage.getItem("token") || "");

  async function registerBarber() {
    await api
      .post("barbeiros/create")
      .then((response) => {
        return response.data;
      })
      .catch((err) => {
        return err.response.data;
      });
  }
  return (
    <section>
      <h1 className="text-borrow text-3xl font-bold ml-7 my-10">
        Cadastrar barbeiro
      </h1>
      <BarbeirosForm
        handleSubmit={registerBarber}
        btnText="Cadastrar Barbeiro"
      />
    </section>
  );
}

export default AddBarber;
