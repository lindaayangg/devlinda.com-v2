import React, {Component} from 'react';
import {StyledContainer, StyledHeader, StyledHeaderWrapper} from "../../res/styles";
import Skills from "../../components/Skills/Skills";

class Knowledge extends Component {
  render() {
    return (
      <StyledContainer id='knowledge' name='knowledge'>
        <StyledHeaderWrapper>
          <StyledHeader>
            What I know
          </StyledHeader>
        </StyledHeaderWrapper>
        <Skills/>
      </StyledContainer>
    )
  }
}

export default Knowledge;