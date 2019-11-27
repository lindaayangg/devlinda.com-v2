import React, {Component} from 'react';
import {StyledContainer, StyledHeader, StyledHeaderWrapper} from "../../res/styles";
import Skills from "../../components/Skills/Skills";
import strings from "../../res/strings";

class Knowledge extends Component {
  render() {
    return (
      <StyledContainer id='knowledge' name='knowledge'>
        <StyledHeaderWrapper>
          <StyledHeader>
            {strings.sections.knowledge}
          </StyledHeader>
        </StyledHeaderWrapper>
        <Skills/>
      </StyledContainer>
    )
  }
}

export default Knowledge;