import React from "react";
import styled from "styled-components";
import { Card } from "./components/Card";
import { Navigation } from "./components/Navigation/Navigation";
import { Banner } from "./components/Banner";
import { About } from "./components/About/About";
import { Project } from "./components/Project/Project";
import { Tools } from "./components/Tools/Tools";
import { Contact } from "./components/Contact/Contact";
import { Footer } from "./components/Footer/Footer";

const StyledMainDiv = styled.div`
  margin-left: 200px;
`;

const StyledDesktopNav = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 225px;
  height: 100vh;
  min-height: 100vh;
  padding-left: 25px;
  padding-top: 25px;
  background-color: #1f1f1f;

  @media (max-width: 992px) {
    display: none;
  }
`;

const App = () => {
  return (
    <div style={{ margin: "25px" }}>
      <StyledDesktopNav>
        <Navigation />
      </StyledDesktopNav>
      <StyledMainDiv>
        <Card height="100vh">
          <Banner />
        </Card>
        <About />
        <Card>
          <Tools />
        </Card>
        <Project />
        <Card>
          <Contact />
        </Card>
        <Footer />
      </StyledMainDiv>
    </div>
  );
};

export default App;
