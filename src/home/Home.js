import React from 'react';
import StickySidebar from "../components/StickySidebar/StickySidebar";
import About from "../sections/About/About";
import Knowledge from "../sections/Knowledge/Knowledge";
import {StyledArticle, StyledMenu} from "./styles";
import Experience from "../sections/Experience/Experience";
import Projects from "../sections/Projects/Project";
import {Responsive} from "semantic-ui-react";

function Home() {
  return (
    <div>
      <Responsive {...Responsive.onlyLargeScreen}>
        <StyledMenu className='vertical left fixed'>
          <StickySidebar/>
        </StyledMenu>
      </Responsive>
      <StyledArticle>
        <About/>
        <Knowledge/>
        <Experience/>
        <Projects/>
      </StyledArticle>
    </div>
  );
}

export default Home;
