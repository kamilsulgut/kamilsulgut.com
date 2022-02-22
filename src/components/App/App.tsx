import React, { FC } from "react";
import "./App.css";
import Layout from "../../hoc/Layout";
import AboutMe from "../AboutMe/AboutMe";
import Techstack from "../Techstack/Techstack";
import Portfolio from "../Portfolio/Portfolio";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import NavBar from "../NavBar/NavBar";

const App: FC = () => (
  <Layout>
    <NavBar />
    <Header />
    <AboutMe />
    <Techstack />
    <Portfolio />
    <Contact />
    <Footer />
  </Layout>
);

export default App;
