import React, {Component} from 'react';
import {StyledAboutContainer, StyledEmailWrapper, StyledIcon, StyledIntro, StyledLocationWrapper} from "./styles";
import strings from "../../res/strings";
import {GridColumn, Responsive} from "semantic-ui-react";
import InfoCard from "../../components/InfoCard/InfoCard";
import {StyledGlobalGridContainer, StyledHeader, StyledHeaderWrapper} from "../../res/styles";

class About extends Component {

  renderDescription() {
    return (
      <StyledAboutContainer>
        <StyledHeaderWrapper>
          <StyledHeader>
            Get To Know Me
          </StyledHeader>
        </StyledHeaderWrapper>
        <StyledGlobalGridContainer columns={2} relaxed='very'>
          <GridColumn mobile={16} tablet={8} computer={8}>
            <StyledIntro>
              {strings.description.name}<br/><br/>
              {strings.description.story}<br/><br/>
              {strings.description.work}<br/><br/>
              {strings.description.hobby}
            </StyledIntro>
            <Responsive maxWidth={1183}>
              <StyledEmailWrapper>
                <StyledIcon name='mail'/><a href='mailto:xiaoling.yang@uwaterloo.ca'>{strings.email}</a>
              </StyledEmailWrapper>
              <StyledLocationWrapper>
                <StyledIcon name='map marker alternate'/>{strings.location}
              </StyledLocationWrapper>
            </Responsive>
          </GridColumn>
          <GridColumn mobile={16} tablet={8} computer={8}>
            <InfoCard></InfoCard>
          </GridColumn>
        </StyledGlobalGridContainer>
      </StyledAboutContainer>
    )
  }

  render() {
    return (
      this.renderDescription()
    )
  }
}

export default About;