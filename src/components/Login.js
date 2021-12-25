import React, { useContext, useState } from "react";
import { MyContext } from "./MyContext";
import axios from "axios";
import Alert from "./Alert";

export default function Login() {
  const [myValues, setMyValues] = useContext(MyContext);
  const urlSession = "https://test.sqlverine.org/php/session.php";
  const urlLogin = "https://test.sqlverine.org/php/login.php";
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [alert, setAlert] = useState("");

  // Login
  async function handleLogin(event) {
    axios
      .post(urlLogin, {
        name: name,
        password: password,
      })
      .then(function (response) {
        if (response.data == 1) {
          setMyValues((oldValues) => ({ ...oldValues, loggedIn: true }));
        }else{
          setAlert(<Alert alert="Benutzername oder Password sind nicht korrekt!" />);          
        }
      })
      .catch(function (error) {
        console.log(error);
        setAlert(<Alert alert={error.toString()} />);
      });
  }

  // check Session
  async function handleSession(event) {
    axios.get(urlSession).then((response) => {
      console.log(response.data);
    });
  }

  return (
    <div>
      <div className="row">
        <div className="col">
          <p>Benutzername:</p>
        </div>
        <div className="col">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <p> Passwort:</p>
        </div>
        <div className="col">
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
      </div>
      <div>
        {alert}
      </div>
      <div className="row">
        <div className="col">
          <button className="button button--success" onClick={handleLogin}>
            Login
          </button>
          <button className="button button--info  margin-left--xs" onClick={handleSession}>
            Session
          </button>
        </div>
      </div>
    </div>
  );
}
