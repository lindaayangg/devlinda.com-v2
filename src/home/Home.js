import React from 'react';
import StickySidebar from "../components/StickySidebar/StickySidebar";
import About from "../sections/About/About";
import Knowledge from "../sections/Knowledge/Knowledge";
import {StyledArticle} from "./styles";
import Experience from "../sections/Experience/Experience";
import Projects from "../sections/Projects/Project";
import {Responsive} from "semantic-ui-react";
import Navbar from "../components/Narbar/Navbar";
import CopyRight from "../sections/CopyRight/CopyRight";

function Home() {
  return (
    <div>
      <Responsive maxWidth={1183}>
        <Navbar/>
      </Responsive>
      <Responsive minWidth={1184}>
        <StickySidebar/>
      </Responsive>
      <StyledArticle>
        <About/>
        <Knowledge/>
        <Experience/>
        <Projects/>
        <Responsive maxWidth={1183}>
          <CopyRight/>
        </Responsive>
      </StyledArticle>
    </div>
  );
}

export default Home;
