import React, {Component} from 'react';
import {StyledContainer, StyledHeader, StyledHeaderWrapper} from "../../res/styles";
import Education from "../../components/Education/Education";
import Skills from "../../components/Skills/Skills";
import Awards from "../../components/Awards/Awards";
import {Grid, GridColumn, GridRow} from "semantic-ui-react";
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
        <Grid columns={2}>
          <GridColumn>
            <StyledWrapper columns={2}>
              <GridRow width={7}>
                <Education/>
              </GridRow>
              <GridRow width={7}>
                <Awards/>
              </GridRow>
            </StyledWrapper>
          </GridColumn>
          <GridColumn>
            <Skills/>
          </GridColumn>
        </Grid>
      </StyledContainer>
    )
  }
}

export default Knowledge;