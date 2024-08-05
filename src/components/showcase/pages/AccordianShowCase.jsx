import React from "react";
import ShowCaseLayout from "../../ShowCaseLayout";
import Accordian from "../components/Accordian";
import { AccordianCode } from "../../code/AccordianCode";
import { BasicButtonsCode } from "../../code/ButtonsCode";
import CodeComponent from "../../code/CodeComponent";

function AccordianShowCase() {
  return (
    <div>
      <ShowCaseLayout code=<CodeComponent /> classes="mt-40" maintitle="Accordian" component=<Accordian /> />
    </div>
  );
}

export default AccordianShowCase;
