import React, {Component} from 'react';
import {StyledContainer, StyledHeader, StyledHeaderWrapper} from "../../res/styles";
import Education from "../../components/Education/Education";
import Skills from "../../components/Skills/Skills";
import {Grid, GridColumn} from "semantic-ui-react";

class Knowledge extends Component {
  render() {
    return (
      <StyledContainer>
        <StyledHeaderWrapper>
          <StyledHeader>
            What I know
          </StyledHeader>
        </StyledHeaderWrapper>
        <Grid columns={2}>
          <GridColumn width={7}>
            <Education/>
          </GridColumn>
          <GridColumn width={6}>
            <Skills/>
          </GridColumn>
        </Grid>
      </StyledContainer>
    )
  }
}

export default Knowledge;