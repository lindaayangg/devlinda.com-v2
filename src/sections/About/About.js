import React, {Component} from 'react';
import {
  StyledAboutContainer,
  StyledEducationWrapper,
  StyledIcon,
  StyledImage,
  StyledInfoGridWrapper,
  StyledIntro,
  StyledLocationWrapper,
  StyledNameHeader,
  StyledSubHeaderRole
} from "./styles";
import strings from "../../res/strings";
import {GridColumn} from "semantic-ui-react";
import {StyledGlobalGridContainer} from "../../res/styles";
import profile from '../../res/images/profile1.jpg';

class About extends Component {

  renderDescription() {
    return (
      <StyledAboutContainer id="about" name="about">
        <StyledGlobalGridContainer columns={2} relaxed='very'>
          <GridColumn mobile={16} tablet={10} computer={10}>
            <StyledNameHeader>
              {strings.intro.name}
            </StyledNameHeader>
            <StyledSubHeaderRole>
              {strings.intro.title}
            </StyledSubHeaderRole>
            <StyledIntro>
              {strings.description.intro}<br/><br/>
              {strings.description.hobby}
            </StyledIntro>
            <StyledLocationWrapper>
              <StyledIcon size='large' name='map marker alternate'/>
              {strings.location}
            </StyledLocationWrapper>
            <StyledEducationWrapper>
              <StyledIcon size='large' name='graduation'/>
              {strings.education.school}
              {strings.dot}
              {strings.education.degree}
              {strings.divider}
              {strings.education.date}
            </StyledEducationWrapper>
          </GridColumn>
          <StyledInfoGridWrapper mobile={16} tablet={6} computer={6}>
            <StyledImage src={profile} size='medium'/>
          </StyledInfoGridWrapper>
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