import React, { useContext } from "react";
import AdminNavbar from "../../../UI/AdminNavbar";
import { Context } from "../../../../context/AdminContext";

function AdminAgenda() {
  const { authenticated } = useContext(Context);

  return (
    <section>
      {authenticated ? (
        <>
          <AdminNavbar />
          <div className="flex flex-col items-center mt-[20px] mb-[20px]">
            <p className="text-[42px] font-bold text-[#d6a77a]">Agendamentos</p>
            <span>
              <p className="text-[#d6a77a]">0 Horários agendados</p>
            </span>
          </div>
        </>
      ) : null}
    </section>
  );
}

export default AdminAgenda;
