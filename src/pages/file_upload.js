import React, { useState } from "react";
import Layout from "@theme/Layout";
import HandleDatabases from "../components/HandleDatabases";

export default function file_upload() {
  
  return (
    <Layout>
      <div className="container">
        <div className="row">
          <div className="col">
            <HandleDatabases />
          </div>
        </div>
      </div>
    </Layout>
  );
}
