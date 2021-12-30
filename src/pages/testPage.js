import React, { useContext } from "react";
import Layout from "@theme/Layout";
import { MyContext } from "../components/MyContext";


export default function testPage() {
  const [myValues, setMyValues] = useContext(MyContext);
  return (
    <Layout>
      <main>
        <h1>Test Page</h1>
      </main>
    </Layout>
  );
}
