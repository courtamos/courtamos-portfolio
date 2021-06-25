import React from "react";
import { Container } from "reactstrap";
import { Navigation } from "./components/Navigation/Navigation";
import { Banner } from "./components/Banner";
import { About } from "./components/About/About";
import { Project } from "./components/Project/Project";
import { Tools } from "./components/Tools/Tools";
import { Contact } from "./components/Contact/Contact";

const App = () => {
  return (
    <Container>
      <Navigation />
      <Banner />
      <About />
      <Project />
      <Tools />
      <Contact />
    </Container>
  );
};

export default App;
