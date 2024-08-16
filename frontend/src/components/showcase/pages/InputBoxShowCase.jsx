import React from "react";
import Sidebar from "../../Sidebar";
import ShowCaseLayout from "../../ShowCaseLayout";
import PinInput from "../components/InputBox";
import PinInputCode from "../../code/PinInputCode";

function InputBoxShowCase() {
  return (
    <div>
      <Sidebar />
      <ShowCaseLayout code=<PinInputCode /> classes="mt-40" maintitle="Pin Input" component=<PinInput /> />;
    </div>
  );
}

export default InputBoxShowCase;
