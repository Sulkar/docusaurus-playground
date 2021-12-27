import React, {useState} from "react";

const MyContext = React.createContext({});

function MyContextProvider(props) {
  const [myValues, setMyValues] = useState({
    counter: 0,
    user: "Richi",
    loggedIn: false,
  });

  return (
    <MyContext.Provider value={[myValues, setMyValues]}>
      {props.children}
    </MyContext.Provider>
  );
}

export { MyContext, MyContextProvider };

