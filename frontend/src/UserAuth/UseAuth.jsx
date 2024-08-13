import React, { Children, createContext, useState } from "react";

const LoginContext = createContext();

function UseAuth({ Children }) {
  const [isUserSignedIn, setUserSignedIn] = useState(false);

  return <LoginContext.Provider value={{ isUserSignedIn, setUserSignedIn }}>{Children}</LoginContext.Provider>;
}

export default UseAuth;
export { LoginContext }
