import React from "react";
import { useState } from "react";
import { createContext } from "react";
import Login from "../components/Login";

const userContext = createContext();

function UserContextProvider({ children }) {
  const [userName, setUserName] = useState(null);

  return <userContext.Provider value={{ userName, setUserName }}>{children} </userContext.Provider>;
}

export { userContext, UserContextProvider };
