import React, {Component} from 'react';
import {StyledContainer, StyledHeader, StyledHeaderWrapper} from "../../res/styles";
import strings from "../../res/strings";

class Fun extends Component {
  render() {
    return(
      <StyledContainer id="fun" name="fun">
        <StyledHeaderWrapper>
          <StyledHeader>
            {strings.sections.fun}
          </StyledHeader>
        </StyledHeaderWrapper>
        <p>I can play 4 instruments: piano, cello, flute, and saxophone - I've been playing piano for 15 years.</p>
        <p>I entered university as a life science student wanting to become a medical doctor.</p>
        <p>If you asked me what I want to do in the future two years ago, I would've said "anything, but computers".</p>
        <p>I went to a hackathon by accident without knowing what a hackathon is. I was fascinated by a button which directed me to somewhere that my friend created in simple HTML/CSS. I then decided I want to pursue this field.</p>
      </StyledContainer>
    )
  }
}

export default Fun;