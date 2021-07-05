import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Card } from "./components/Card";
import { Sidebar } from "./components/Navigation/Sidebar";
import { ToggleButton } from "./components/Navigation/ToggleButton";
import { Banner } from "./components/Banner";
import { About } from "./components/About/About";
import { Project } from "./components/Project/Project";
import { Tools } from "./components/Tools/Tools";
import { Contact } from "./components/Contact/Contact";
import { Footer } from "./components/Footer/Footer";
import { MobileMenu } from "./components/Navigation/MobileMenu";
import AOS from "aos";
import "aos/dist/aos.css";

const StyledAppDiv = styled.div`
  margin: 25px;

  @media (max-width: 992px) {
    margin: 10px;
  } ;
`;

const StyledMainDiv = styled.div`
  margin-left: 200px;

  @media (max-width: 992px) {
    margin-left: 0px;
  }
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
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    window.addEventListener("load", function () {
      AOS.init();
    });
  }, []);

  return (
    <StyledAppDiv>
      <StyledDesktopNav>
        <Sidebar />
      </StyledDesktopNav>
      <MobileMenu isOpen={isOpen} setIsOpen={setIsOpen} />
      <ToggleButton setIsOpen={setIsOpen} />
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
    </StyledAppDiv>
  );
};

export default App;
