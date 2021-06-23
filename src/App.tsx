import React from "react";
import { Container } from "reactstrap";
import { Navigation } from "./components/Navigation/Navigation";
import { Banner } from "./components/Banner";
import { About } from "./components/About/About";

const App = () => {
  return (
    <Container>
      <Navigation />
      <Banner />
      <About />
    </Container>
  );
};

export default App;
