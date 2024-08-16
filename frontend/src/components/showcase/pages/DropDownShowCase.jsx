import React from "react";
import ShowCaseLayout from "../../ShowCaseLayout";
import Sidebar from "../../Sidebar";
import Dropdown from "../components/DropDown";
import DropDownCloudCode from "../../code/DropDownCode";

function DropDownShowCase() {
  return (
    <div>
      <Sidebar />
      <ShowCaseLayout code=<DropDownCloudCode /> classes="mt-40" maintitle="Drop Down" component=<Dropdown /> />;
    </div>
  );
}

export default DropDownShowCase;
