import React, {Component} from 'react';
import {Icon, Radio} from "semantic-ui-react";
import {
  StyledCopyRightWrapper,
  StyledDarkModeContainer,
  StyledDarkModeContent,
  StyledDarkModeHeaderContainer,
  StyledDivider,
  StyledHeaderContainer,
  StyledHeaderLabel,
  StyledHireMeButton,
  StyledImage,
  StyledImageContainer,
  StyledLabelIcon,
  StyledMenuItem,
  StyledNavList,
  StyledSocialMediaButtons
} from "./styles";
import {Link} from "react-scroll";
import strings from "../../res/strings";
import sidebarprofile from '../../res/images/sidebarprofile.png';

class StickySidebar extends Component {
  render() {
    return (
      <div>
        <StyledMenuItem>
          {strings.sidebar.name}
        </StyledMenuItem>
        <StyledImageContainer>
          <StyledImage src={sidebarprofile} circular/>
        </StyledImageContainer>
        <StyledSocialMediaButtons circular icon='linkedin' size='large' href="https://www.linkedin.com/in/lindaayangg/"
                                  target="_blank"/>
        <StyledSocialMediaButtons circular icon='github alternate' size='large' href="https://github.com/lindaayangg"
                                  target="_blank"/>
        <StyledSocialMediaButtons circular icon='mail' size='large' href='mailto:xiaoling.yang@uwaterloo.ca'/>
        <StyledSocialMediaButtons circular icon='google play' size='large'
                                  href='https://play.google.com/store/apps/details?id=com.waveitover.waveit&rdid=com.waveitover.waveit'
                                  target="_blank"/>
        <StyledSocialMediaButtons circular icon='facebook' size='large' href='https://www.facebook.com/lindayanggg'
                                  target="_blank"/>
        <StyledDivider/>
        <StyledNavList>
          <div>
            <StyledHeaderContainer as='h5'>
              <StyledLabelIcon name='user'/>
              <StyledHeaderLabel
                as={Link}
                to="about"
                spy={true}
                smooth={true}
                duration={500}>
                {strings.sidebar.about}
              </StyledHeaderLabel>
            </StyledHeaderContainer>
            <StyledHeaderContainer as='h5'>
              <StyledLabelIcon name='graduation'/>
              <StyledHeaderLabel
                as={Link}
                to="knowledge"
                spy={true}
                smooth={true}
                duration={500}>
                {strings.sidebar.skills}
              </StyledHeaderLabel>
            </StyledHeaderContainer>
            <StyledHeaderContainer as='h5'>
              <StyledLabelIcon name='briefcase'/>
              <StyledHeaderLabel
                as={Link}
                to="experience"
                spy={true}
                smooth={true}
                duration={500}>
                {strings.sidebar.experience}
              </StyledHeaderLabel>
            </StyledHeaderContainer>
            <StyledHeaderContainer as='h5'>
              <StyledLabelIcon name='lightbulb'/>
              <StyledHeaderLabel
                as={Link}
                to="projects"
                spy={true}
                smooth={true}
                duration={500}>
                {strings.sidebar.projects}
              </StyledHeaderLabel>
            </StyledHeaderContainer>
            <StyledHeaderContainer as='h5'>
              <StyledLabelIcon name='file text'/>
              <StyledHeaderLabel
                href="https://devlinda.com/assets/Resume_Linda_Yang.pdf"
                target='_blank'
              >
                {strings.sidebar.resume}
              </StyledHeaderLabel>
            </StyledHeaderContainer>
            <StyledHeaderContainer as='h5'>
              <StyledLabelIcon name='thumbs up'/>
              <StyledHeaderLabel
                as={Link}
                to="fun"
                spy={true}
                smooth={true}
                duration={500}>
                {strings.sidebar.fun}
              </StyledHeaderLabel>
            </StyledHeaderContainer>
          </div>
        </StyledNavList>
        <StyledHireMeButton href='mailto:xiaoling.yang@uwaterloo.ca'>
          <Icon name='send'/>
          {strings.sidebar.hire}
        </StyledHireMeButton>
        <StyledDivider/>
        <StyledDarkModeContainer>
          <StyledDarkModeHeaderContainer as='h6'>
            <Icon name='power off'/>
            <StyledDarkModeContent>
              {strings.sidebar.darkMode}
            </StyledDarkModeContent>
          </StyledDarkModeHeaderContainer>
          <Radio toggle/>
        </StyledDarkModeContainer>
        <StyledCopyRightWrapper>
          {strings.copyright}
        </StyledCopyRightWrapper>
      </div>
    )
  }
}

export default StickySidebar;