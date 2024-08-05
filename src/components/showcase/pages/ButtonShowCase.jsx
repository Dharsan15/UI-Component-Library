import React from "react";
import ShowCaseLayout from "../../ShowCaseLayout";
import { BasicButtons, ButtonsWithIcons, ButtonWithAnimation } from "../components/Buttons";
import { BasicButtonsCode, ButtonWithIconsCode, ButtonsWithAnimationsCode } from "../../code/ButtonsCode";

const ButtonShowCase = () => {
  return (
    <div>
      <ShowCaseLayout
        code=<BasicButtonsCode />
        classes="mt-40"
        title="Basic Buttons"
        maintitle="Buttons"
        component=<BasicButtons />
      />
      <ShowCaseLayout
        code=<ButtonWithIconsCode />
        classes="mt-0"
        title="Buttons With Icons"
        component=<ButtonsWithIcons />
      />
      <ShowCaseLayout
        code=<ButtonsWithAnimationsCode />
        classes="mb-40"
        title="Buttons With Animations"
        component=<ButtonWithAnimation />
      />
    </div>
  );
};

export default ButtonShowCase;
