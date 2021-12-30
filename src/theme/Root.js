import React, { useState } from "react";
import { MyContextProvider } from "../components/MyContext";
import Session from "../components/Session";

// Default implementation, that you can customize
function Root({ children }) {
  return (
    <MyContextProvider>
      <Session />
      <>{children}</>
    </MyContextProvider>
  );
}
export default Root;
