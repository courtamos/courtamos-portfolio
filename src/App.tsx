import React from "react";
import { Container } from "reactstrap";
import { Banner } from "./components/Banner";
import { Navigation } from "./components/Navigation/Navigation";

const App = () => {
  return (
    <Container>
      <Navigation />
      <Banner />
    </Container>
  );
};

export default App;
