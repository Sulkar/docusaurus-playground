import React, { useContext } from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import styles from "./index.module.css";
import HomepageFeatures from "../components/HomepageFeatures";
import TestContext from "../components/TestContext";
import { MyContext } from "../components/MyContext";
import CodeSearch from "../components/CodeSearch";
import Loader from "../components/Loader";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  const [myValues, setMyValues] = useContext(MyContext);

  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">
          Dinosaurs {myValues.loggedin ? " and " + myValues.username : ""} are cool
        </p>
        <div className="row">
          <div className="col col--4"></div>
          <div className="col col--4"></div>
          <div className="col col--4">
            <CodeSearch />
            {myValues.loader ? <Loader /> : <></>}
          </div>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <HomepageHeader />
      <main>
        <TestContext></TestContext>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
