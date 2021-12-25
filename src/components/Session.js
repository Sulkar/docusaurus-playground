import React, { useContext } from "react";
import axios from "axios";
import Login from "./Login";
import Logout from "./Logout";
import { MyContext } from "./MyContext";

export default function Session() {
  const [myValues, setMyValues] = useContext(MyContext);
  const urlSession = "https://test.sqlverine.org/php/session.php";

  React.useEffect(() => {
    axios.get(urlSession).then((response) => {
      if (response.data == 1) {
        setMyValues((oldValues) => ({ ...oldValues, loggedIn: true }));
      }
    });
  }, []);

  return (
    <div>
      <div>{myValues.loggedIn ? <Logout /> : <Login />}</div>
    </div>
  );
}
