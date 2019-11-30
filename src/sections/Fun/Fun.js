import React, {Component} from 'react';
import {StyledContainer, StyledHeader, StyledHeaderWrapper} from "../../res/styles";
import strings from "../../res/strings";
import {StyledBodyContainer, StyledFact, StyledFactWrapper, StyledIcon} from "./styles";

class Fun extends Component {
  render() {
    return (
      <StyledContainer id="fun" name="fun">
        <StyledHeaderWrapper>
          <StyledHeader>
            {strings.sections.fun}
          </StyledHeader>
        </StyledHeaderWrapper>
        <StyledBodyContainer>
          <StyledFactWrapper>
            <StyledIcon name='music' size='large'/>
            <StyledFact>{strings.fun.instrument}</StyledFact>
          </StyledFactWrapper>
          <StyledFactWrapper>
            <StyledIcon name='dont' size='large'/>
            <StyledFact>{strings.fun.computer}</StyledFact>
          </StyledFactWrapper>
          <StyledFactWrapper>
            <StyledIcon name='dna' size='large'/>
            <StyledFact>{strings.fun.doctor}</StyledFact>
          </StyledFactWrapper>
          <StyledFactWrapper>
            <StyledIcon name='code' size='large'/>
            <StyledFact>{strings.fun.hackathon}</StyledFact>
          </StyledFactWrapper>
        </StyledBodyContainer>
      </StyledContainer>
    )
  }
}

export default Fun;