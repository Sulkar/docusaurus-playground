import React, { useState, useContext } from "react";
import axios from "axios";
import { Button } from "react-bootstrap";
import { Modal } from "react-bootstrap";
import { MyContext } from "./MyContext";

export default function DatabaseItem(props) {
  const [myValues, setMyValues] = useContext(MyContext);
  const [database, setDatabase] = useState(props);
  const urlFileUpload = "https://test.sqlverine.org/php/delete_file.php";

  async function handleRemove(name) {
    setShow(false);
    axios
      .post(urlFileUpload, {
        fileToDelete: name,
        database_folder: myValues.database_folder,
      })
      .then(function (response) {
        props.getDatabases();
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  //Modal
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <li
        className="list-group-item d-flex justify-content-between align-items-center"
        key={database.name}
      >
        {database.name}

        <span
          className=""
          onClick={() => handleShow()}
          style={{ cursor: "pointer" }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="red"
            className="bi bi-trash"
            viewBox="0 0 16 16"
          >
            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
            <path
              fillRule="evenodd"
              d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
            />
          </svg>
        </span>
      </li>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Datenbank löschen</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Wollen Sie wirklich die Datenbank: {database.name} löschen?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            abbrechen
          </Button>
          <Button variant="danger" onClick={() => handleRemove(database.name)}>
            löschen
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
