import React, { useState } from "react";
import { MyContextProvider } from "../components/MyContext";

// Default implementation, that you can customize
function Root({ children }) {
  return (
    <MyContextProvider>
      <>{children}</>
    </MyContextProvider>
  );
}
export default Root;
