import React from "react";
import Sidebar from "../../Sidebar";
import ShowCaseLayout from "../../ShowCaseLayout";
import Tabs from "../components/Tabs";
import Tabscode from "../../code/TabsCode";

function TabsShowCase() {
  return (
    <div>
      <div>
        <Sidebar />
        <ShowCaseLayout code=<Tabscode /> classes="mt-40" maintitle="Tabs" component=<Tabs /> />;
      </div>
    </div>
  );
}

export default TabsShowCase;
