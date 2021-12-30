import React, { useState, useContext } from "react";
import axios from "axios";
import DatabaseItem from "./DatabaseItem";
import DatabaseUpload from "./DatabaseUpload";
import { MyContext } from "./MyContext";

export default function HandleDatabases() {
  const [myValues, setMyValues] = useContext(MyContext);
  const [databases, setDatabases] = useState([]);
  const urlFileUpload = "https://test.sqlverine.org/php/get_files.php";

  async function getDatabases() {
    if (myValues.loggedIn) {
      axios
        .post(urlFileUpload, {
          database_folder: myValues.database_folder,
        })
        .then(function (response) {
          setDatabases(Object.values(response.data));
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  }

  React.useEffect(() => {
    getDatabases();
    console.log("database")
    console.log(myValues.loggedIn)
    console.log(myValues.database_folder)
  }, [myValues.loggedIn]);

  return (
    <div>
      {myValues.loggedIn ? (
        <div>
          <DatabaseUpload getDatabases={getDatabases} />
          <h3>Datenbanken</h3>
          <div>
            <ul className="list-group">
              {databases.map((database) => (
                <DatabaseItem
                  name={database}
                  getDatabases={getDatabases}
                  key={database}
                />
              ))}
            </ul>
          </div>
        </div>
      ) : (
        <div>logged out</div>
      )}
    </div>
  );
}
