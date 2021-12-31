import React, { useState, useContext } from "react";
import axios from "axios";
import { MyContext } from "../MyContext";
import Alert from "../Alert";

export default function DatabaseUpload(props) {
  const [myValues, setMyValues] = useContext(MyContext);
  const [selectedFile, setSelectedFile] = useState(null);
  const urlFileUpload = "https://test.sqlverine.org/php/upload_file.php";
  const [alert, setAlert] = useState("");

  function handleFileChange(event) {
    // Update the state
    setSelectedFile(event.target.files[0]);
  }

  async function handleFileUpload() {
    // Create an object of formData
    const formData = new FormData();
    formData.append("myFile", selectedFile, selectedFile.name);
    formData.append("database_folder", myValues.database_folder);

    axios
      .post(urlFileUpload, formData)
      .then(function (response) {
        if (response.data == 1) {
          props.getDatabases();
          setAlert("");
        } else if (response.data == 2) {
          setAlert(
            <Alert alert="Sie können keine weitere Datenbank hochladen. Löschen Sie eine vorhandene, um eine neue Datenbank hochzuladen. " />
          );
        } else {
          setAlert(
            <Alert alert="Die Datei konnte nicht hochgeladen werden!" />
          );
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  return (
    <div className="row">
      <h3>Datenbank (.db) hochladen</h3>
      <div className="col-md-6 mt-1">
        <input
          className="form-control"
          type="file"
          id="formFile"
          onChange={handleFileChange}
        />
        <div className="mt-1">{alert}</div>
      </div>
      <div className="col-md-6 mt-1">
        <button
          type="button"
          className="btn btn-primary"
          onClick={handleFileUpload}
        >
          Upload
        </button>
      </div>
    </div>
  );
}
