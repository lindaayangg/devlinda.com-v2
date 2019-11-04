import React, {Component} from 'react';
import {StyledContainer, StyledHeader, StyledIntro} from "./styles";
import strings from "../../res/strings";
import {Grid, GridColumn} from "semantic-ui-react";
import InfoCard from "../../components/InfoCard/InfoCard";

class About extends Component {

  renderDescription() {
    return (
      <StyledContainer>
        <StyledHeader>
          Get To Know Me
        </StyledHeader>
        <Grid columns={2} relaxed='very'>
          <GridColumn width={8}>
            <StyledIntro>
              {strings.description.name}<br/><br/>
              {strings.description.story}
              {strings.description.work}<br/><br/>
              {strings.description.hobby}
            </StyledIntro>
          </GridColumn>
          <GridColumn width={7}>
            <InfoCard></InfoCard>
          </GridColumn>
        </Grid>
      </StyledContainer>
    )
  }

  render() {
    return (
      this.renderDescription()
    )
  }
}

export default About;