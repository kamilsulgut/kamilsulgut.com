import React from "react";
import "./App.css";
import Layout from "../../hoc/Layout";
import AboutMe from "../AboutMe/AboutMe";
import Techstack from "../Techstack/Techstack";
import Portfolio from "../Portfolio/Portfolio";
import Contact from "../Contact/Contact";

function App() {
  return (
    <div className="App">
      <Layout>
        <AboutMe />
        <Techstack />
        <Portfolio />
        <Contact />
      </Layout>
    </div>
  );
}

export default App;
