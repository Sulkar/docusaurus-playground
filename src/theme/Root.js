import React, { useState } from "react";
import { MyContext } from "../components/MyContext";

// Default implementation, that you can customize
function Root({ children }) {
  const [myValues, setMyValues] = useState({
    counter: 0,
    user: "Richi",
    loggedIn: false,
  });

  return (
    <MyContext.Provider value={[myValues, setMyValues]}>
      <>{children}</>
    </MyContext.Provider>
  );
}
export default Root;
