import React from 'react';
import StickySidebar from "../components/StickySidebar/StickySidebar";
import About from "../sections/About/About";
import Knowledge from "../sections/Knowledge/Knowledge";
import {StyledArticle, StyledMenu} from "./styles";

function Home() {
  return (
    <div>
      <StyledMenu className='vertical left fixed'>
        <StickySidebar/>
      </StyledMenu>
      <StyledArticle>
        <About/>
        <Knowledge/>
      </StyledArticle>
    </div>
  );
}

export default Home;
