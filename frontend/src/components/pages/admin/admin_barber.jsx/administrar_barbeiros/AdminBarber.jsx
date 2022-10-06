import React from "react";
import AdminNavbar from "../../../../UI/AdminNavbar";

import Wrapper from "../../../../UI/Wrapper";
import MainAdminBarber from "./MainAdminBarber";

function AdminBarber() {
  return (
    <Wrapper>
      <AdminNavbar />
      <MainAdminBarber />
    </Wrapper>
  );
}

export default AdminBarber;
