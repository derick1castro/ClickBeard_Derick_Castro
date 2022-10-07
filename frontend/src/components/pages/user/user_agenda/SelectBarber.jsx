import api from "../../../../utils/api";
import { useState, useEffect } from "react";

function SelectBarber({ text, name, options, handleOnChange, value, Barber }) {
  const [barber, setBarber] = useState([]);
  const [token] = useState(localStorage.getItem("token") || "");

  useEffect(() => {
    api.get("/barbeiros/allbarbers").then((response) => {
      setBarber(response.data.barber)
      Barber(response.data.barber);
    });
  }, [token]);

  return (
    <div className="flex flex-col mb-4">
      <label className="mb-2 font-bold text-sm text-[#d6a77a]" htmlFor={name}>
        {text}:
      </label>
      <select
        className="p-3 border rounded"
        name={name}
        id={name._id}
        onChange={handleOnChange}
      >
        <option>Selecione um barbeiro</option>
        {barber.map((barber) => (
          <option key={barber._id} value={barber._id}>
            {barber.name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default SelectBarber;
