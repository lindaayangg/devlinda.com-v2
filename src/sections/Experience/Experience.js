import React, {Component} from 'react';
import {StyledHeader, StyledHeaderWrapper} from "../../res/styles";
import {StyledExperienceContainer} from "./styles";
import Work from "../../components/Work/Work";

class Experience extends Component {
  render() {
    return (
      <StyledExperienceContainer>
        <StyledHeaderWrapper>
          <StyledHeader>
            Where I have been
          </StyledHeader>
        </StyledHeaderWrapper>
        <Work/>
      </StyledExperienceContainer>
    )
  }
}

export default Experience;