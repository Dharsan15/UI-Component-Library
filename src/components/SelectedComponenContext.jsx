import React, { useState } from "react";
import { createContext } from "react";

//const values = ["Accordian", "Alert Box", "Buttons", "Cards", "Notification", "Input", "component7"];

const SelectedComponent = createContext("Accordian");

function SelectedComponenContext({ children }) {
  const [selectedComp, setselectedComp] = useState("Accordian");

  return <SelectedComponent.Provider value={{ selectedComp, setselectedComp }}>{children}</SelectedComponent.Provider>;
}

export default SelectedComponenContext;
