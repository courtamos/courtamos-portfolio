import React from "react";
import { Card } from "./components/Card";
import { Navigation } from "./components/Navigation/Navigation";
import { Banner } from "./components/Banner";
import { About } from "./components/About/About";
import { Project } from "./components/Project/Project";
import { Tools } from "./components/Tools/Tools";
import { Contact } from "./components/Contact/Contact";
import { Footer } from "./components/Footer/Footer";

const App = () => {
  return (
    <div style={{ margin: "0px 50px" }}>
      <Navigation />
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
    </div>
  );
};

export default App;
