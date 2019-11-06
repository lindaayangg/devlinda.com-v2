import React from 'react';
import StickySidebar from "../components/StickySidebar/StickySidebar";
import About from "../sections/About/About";
import Skills from "../sections/Skills/Skills";
import {StyledArticle, StyledMenu} from "./styles";

function Home() {
  return (
    <div>
      <StyledMenu className='vertical left fixed'>
        <StickySidebar/>
      </StyledMenu>
      <StyledArticle>
        <About/>
        <Skills/>
      </StyledArticle>
    </div>
  );
}

export default Home;
