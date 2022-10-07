// import api from "../../../../utils/api";
import { useState, useEffect } from "react";

function SelectHora({ text, name, options, handleOnChange, value, Barber }) {
  const [barber, setBarber] = useState([]);
  const [token] = useState(localStorage.getItem("token") || "");

  // useEffect(() => {
  //   api.get("/barbeiros/allbarbers").then((response) => {
  //     setBarber(response.data.barber);
  //     Barber(response.data.barber);
  //   });
  // }, [token]);

  return (
    <div className="flex flex-col mb-4">
      <label className="mb-2 font-bold text-sm text-[#d6a77a]" htmlFor={name}>
        {text}:
      </label>
      <select className="p-3 border rounded">
        <option>Selecione um horário</option>
        <option>
          <p>08:00h - 09:00h</p>
        </option>
        <option>
          <p>09:00h - 10:00h</p>
        </option>
        <option>
          <p>10:00h - 11:00h</p>
        </option>
        <option>
          <p>11:00h - 12:00h</p>
        </option>
        <option>
          <p>12:00h - 13:00h</p>
        </option>
        <option>
          <p>13:00h - 14:00h</p>
        </option>
        <option>
          <p>14:00h - 15:00h</p>
        </option>
        <option>
          <p>15:00h - 16:00h</p>
        </option>
        <option>
          <p>16:00h - 17:00h</p>
        </option>
        <option>
          <p>17:00h - 18:00h</p>
        </option>
      </select>
    </div>
  );
}

export default SelectHora;
