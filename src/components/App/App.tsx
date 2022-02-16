import React from "react";
import "./App.css";
import Layout from "../../hoc/Layout";
import AboutMe from "../AboutMe/AboutMe";
import Techstack from "../Techstack/Techstack";
import Portfolio from "../Portfolio/Portfolio";

function App() {
  return (
    <div className="App">
      <Layout>
        <AboutMe />
        <Techstack />
        <Portfolio />
      </Layout>
    </div>
  );
}

export default App;
