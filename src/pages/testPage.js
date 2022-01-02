import React, { useContext, useState } from "react";
import Layout from "@theme/Layout";
import { MyContext } from "../components/MyContext";
import Loader from "../components/Loader";

export default function testPage() {
  const [myValues, setMyValues] = useContext(MyContext);

  //Modal
  const [showModal, setShowModal] = useState(false);
  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  return (
    <Layout>
      <main>
        <h1>Test Page</h1>


      <Loader/>


        <button onClick={handleShow}>open Modal</button>
        <div
          id="myModal"
          className="verineModal"
          style={{ display: showModal ? "block" : "none" }}
        >
          <div className="verineModalContent">
            <span className="verineModalClose" onClick={handleClose}>
              &times;
            </span>
            <h3>Header</h3>
            <p> Wollen Sie wirklich die Datenbank: xxx löschen?</p>
            <div className="text--right">
              <button
                className="button button--outline button--active button--secondary"
                onClick={handleClose}
              >
                abbrechen
              </button>
              <button className="button button--outline button--active button--danger margin-left--xs">
                löschen
              </button>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
