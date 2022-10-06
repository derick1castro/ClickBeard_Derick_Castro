import api from "../../../../utils/api";
import { useState, useEffect } from "react";

function Select({ text, name, options, handleOnChange, value }) {
  const [barber, setBarber] = useState([]);
  const [token] = useState(localStorage.getItem("token") || "");

  useEffect(() => {
    api.get("/barbeiros/allbarbers").then((response) => {
      setBarber(response.data.barber);
    });
  }, [token]);

  return (
    <div className="flex flex-col mb-4">
      <label className="mb-2 font-bold text-sm text-[#68787b]" htmlFor={name}>
        {text}:
      </label>
      <select
        className="p-3 border rounded"
        name={name}
        id={name}
        onChange={handleOnChange}
      >
        <option>Selecione um barbeiro</option>
        {barber.map((barber) => (
          <option value={barber.name}>{barber.name}</option>
        ))}
      </select>
    </div>
  );
}

export default Select;
