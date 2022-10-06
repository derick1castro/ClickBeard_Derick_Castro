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
          <div>AdminAgenda</div>
        </>
      ) : null}
    </section>
  );
}

export default AdminAgenda;
