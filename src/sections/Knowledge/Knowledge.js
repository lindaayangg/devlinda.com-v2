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
      <StyledContainer id='knowledge' name='knowledge'>
        <StyledHeaderWrapper>
          <StyledHeader>
            What I know
          </StyledHeader>
        </StyledHeaderWrapper>
        <Grid columns={2}>
          <GridColumn mobile={16} computer={8}>
            <StyledWrapper columns={2}>
              <GridRow>
                <Education/>
              </GridRow>
              <GridRow>
                <Awards/>
              </GridRow>
            </StyledWrapper>
          </GridColumn>
          <GridColumn mobile={16} computer={7}>
            <Skills/>
          </GridColumn>
        </Grid>
      </StyledContainer>
    )
  }
}

export default Knowledge;