import React from "react";
import "./App.css";
import Layout from "../../hoc/Layout";
import AboutMe from "../AboutMe/AboutMe";
import Techstack from "../Techstack/Techstack";
import Portfolio from "../Portfolio/Portfolio";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Nav from "../Nav/Nav";

function App() {
  return (
    <Layout>
      <Nav />
      <Header />
      <AboutMe />
      <Techstack />
      <Portfolio />
      <Contact />
      <Footer />
    </Layout>
  );
}

export default App;
