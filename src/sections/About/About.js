import React, {Component} from 'react';
import {StyledIntro} from "./styles";
import strings from "../../res/strings";
import {GridColumn} from "semantic-ui-react";
import InfoCard from "../../components/InfoCard/InfoCard";
import {StyledContainer, StyledGlobalGridContainer, StyledHeader, StyledHeaderWrapper} from "../../res/styles";

class About extends Component {

  renderDescription() {
    return (
      <StyledContainer>
        <StyledHeaderWrapper>
          <StyledHeader>
            Get To Know Me
          </StyledHeader>
        </StyledHeaderWrapper>
        <StyledGlobalGridContainer columns={2} relaxed='very'>
          <GridColumn width={8}>
            <StyledIntro>
              {strings.description.name}<br/><br/>
              {strings.description.story}<br/><br/>
              {strings.description.work}<br/><br/>
              {strings.description.hobby}
            </StyledIntro>
          </GridColumn>
          <GridColumn width={7}>
            <InfoCard></InfoCard>
          </GridColumn>
        </StyledGlobalGridContainer>
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