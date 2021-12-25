import React, { useContext } from "react";
import axios from "axios";
import { MyContext } from "./MyContext";

export default function Logout() {
  const urlLogout = "https://test.sqlverine.org/php/logout.php";
  const [myValues, setMyValues] = useContext(MyContext);

  // Login
  async function handleLogout(event) {
    axios.get(urlLogout).then((response) => {
      setMyValues((oldValues) => ({ ...oldValues, loggedIn: false }));
    });
  }

  return <button class="button button--danger" onClick={() => handleLogout()}>Logout</button>;
}
