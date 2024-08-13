import React from "react";
import ShowCaseLayout from "../../ShowCaseLayout";
import Sidebar from "../../Sidebar";
import LogoCloud from "../components/LogoCloud";
import LogoCloudCode from "../../code/LogoCloudCode";

function LogoCloudShowCasePage() {
  return (
    <div>
      <Sidebar />
      <ShowCaseLayout code=<LogoCloudCode /> classes="mt-40" maintitle="Logo Cloud" component=<LogoCloud /> />;
    </div>
  );
}

export default LogoCloudShowCasePage;
