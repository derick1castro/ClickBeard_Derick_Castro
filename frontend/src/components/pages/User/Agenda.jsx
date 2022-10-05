import React from "react";
import Navbar from "../../UI/Navbar";
import SemAgenda from "./SemAgenda";
import ComAgenda from "./UserAgenda/ComAgenda";

function Agenda() {
  return (
    <div>
      <Navbar />
      {/* <ComAgenda /> */}
      <SemAgenda />
    </div>
  );
}

export default Agenda;
