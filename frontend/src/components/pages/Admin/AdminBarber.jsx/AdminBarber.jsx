import React, { useContext } from "react";
import AdminNavbar from "../../../UI/AdminNavbar";
import ComBarber from "./ComBarber";
import SemBarber from "./SemBarber";
import { Context } from "../../../../context/AdminContext";

function AdminBarber() {
  const { authenticated } = useContext(Context);

  return (
    <section>
      {authenticated ? (
        <>
          <AdminNavbar />
          {/* <ComBarber /> */}
          <SemBarber />
        </>
      ) : null}
    </section>
  );
}

export default AdminBarber;
