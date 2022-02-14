import React from "react";
import "./App.css";
import Layout from "../../hoc/Layout";
import AboutMe from "../AboutMe/AboutMe";

function App() {
  return (
    <div className="App">
      <Layout>
        <AboutMe />
      </Layout>
    </div>
  );
}

export default App;
