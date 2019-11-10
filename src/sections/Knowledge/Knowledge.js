import React, {Component} from 'react';
import {StyledContainer, StyledHeader, StyledHeaderWrapper} from "../../res/styles";
import Education from "../../components/Education/Education";
import Skills from "../../components/Skills/Skills";
import Awards from "../../components/Awards/Awards";
import {GridColumn} from "semantic-ui-react";
import {StyledWrapper} from "./styles";

class Knowledge extends Component {
  render() {
    return (
      <StyledContainer>
        <StyledHeaderWrapper>
          <StyledHeader>
            What I know
          </StyledHeader>
        </StyledHeaderWrapper>
        <StyledWrapper columns={2}>
          <GridColumn width={7}>
            <Education/>
          </GridColumn>
          <GridColumn width={7}>
            <Awards/>
          </GridColumn>
        </StyledWrapper>
        <Skills/>
      </StyledContainer>
    )
  }
}

export default Knowledge;