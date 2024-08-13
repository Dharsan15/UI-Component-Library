import React from "react";
import NavBar from "./NavBar";
import Sidebar from "./Sidebar";
import ButtonShowCase from "./showcase/pages/ButtonShowCase";

function ButtonShowCaseComponent() {
  return (
    <div>
      {/* <NavBar /> */}
      <Sidebar />
      <ButtonShowCase />
    </div>
  );
}

export default ButtonShowCaseComponent;
