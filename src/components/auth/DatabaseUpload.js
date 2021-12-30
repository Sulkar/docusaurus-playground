import React, { useState, useContext } from "react";
import axios from "axios";
import { MyContext } from "../MyContext";


export default function DatabaseUpload(props) {
  const [myValues, setMyValues] = useContext(MyContext);
  const [selectedFile, setSelectedFile] = useState(null);
  const urlFileUpload = "https://test.sqlverine.org/php/upload_file.php";

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
        console.log(response);
        props.getDatabases();
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  return (
    <div className="row">
      <h3>Datenbank hochladen</h3>
      <div className="col-md-6">
      
        <input
          className="form-control"
          type="file"
          id="formFile"
          onChange={handleFileChange}
        />
      </div>
      <div className="col-md-6 mt-1">
        <button type="button" className="btn btn-primary" onClick={handleFileUpload}>Upload</button>
      </div>
    </div>
  );
}
