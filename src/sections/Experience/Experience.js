import React, {Component} from 'react';
import {StyledContainer, StyledHeader, StyledHeaderWrapper} from "../../res/styles";
import Work from "../../components/Work/Work";
import strings from "../../res/strings";

class Experience extends Component {
  render() {
    return (
      <StyledContainer id="experience" name="experience">
        <StyledHeaderWrapper>
          <StyledHeader>
            {strings.sections.experience}
          </StyledHeader>
        </StyledHeaderWrapper>
        <Work/>
      </StyledContainer>
    )
  }
}

export default Experience;