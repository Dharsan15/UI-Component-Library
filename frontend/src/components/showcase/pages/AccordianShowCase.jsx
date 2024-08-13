import ShowCaseLayout from "../../ShowCaseLayout";
import Accordian from "../components/Accordian";

import CodeComponent from "../../code/CodeComponent";

function AccordianShowCase() {
  return (
    <div>
      <ShowCaseLayout code=<CodeComponent /> classes="mt-20" maintitle="Accordian" component=<Accordian /> />
    </div>
  );
}

export default AccordianShowCase;
