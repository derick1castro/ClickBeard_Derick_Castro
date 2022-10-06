import React, {useContext} from "react";
import Navbar from "../../../../UI/Navbar";
import Wrapper from "../../../../UI/Wrapper";
import ComAgenda from "../ComAgenda";
import SemAgenda from "../SemAgenda";
import {Context} from '../../../../../context/UserContext'

function MainAgenda() {
  const { authenticated } = useContext(Context);

  return (
    <Wrapper>
      {authenticated && (
        <div>
          <Navbar />
          {/* <ComAgenda /> */}
          <SemAgenda />
        </div>
      )}
      {!authenticated === null}
    </Wrapper>
  );
}

export default MainAgenda;
