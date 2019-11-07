import React, {Component} from 'react';
import {StyledContainer, StyledHeader, StyledHeaderWrapper} from "../../res/styles";
import Education from "../../components/Education/Education";
import Skills from "../../components/Skills/Skills";

class Knowledge extends Component {
  render() {
    return (
      <StyledContainer>
        <StyledHeaderWrapper>
          <StyledHeader>
            What I know
          </StyledHeader>
        </StyledHeaderWrapper>
        <Education/>
        <Skills/>
      </StyledContainer>
    )
  }
}

export default Knowledge;