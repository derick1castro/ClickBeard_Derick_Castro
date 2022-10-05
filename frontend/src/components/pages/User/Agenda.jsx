import React, { useContext } from "react";
import Navbar from "../../UI/Navbar";
import SemAgenda from "./SemAgenda";
import ComAgenda from "./UserAgenda/ComAgenda";
import { Context } from "../../../context/UserContext";

function Agenda() {
  const { authenticated } = useContext(Context);

  return (
    <section>
      {authenticated && (
        <div>
          <Navbar />
          {/* <ComAgenda /> */}
          <SemAgenda />
        </div>
      )}
      {!authenticated === null}
    </section>
  );
}

export default Agenda;
