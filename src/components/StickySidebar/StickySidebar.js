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
  StyledImage,
  StyledImageContainer,
  StyledLabelIcon,
  StyledMenu,
  StyledNameHeader,
  StyledNavList,
  StyledSocialMediaButtons
} from "./styles";
import {Link} from "react-scroll";
import strings from "../../res/strings";
import sidebarprofile from '../../res/images/sidebarprofile.png';

class StickySidebar extends Component {
  state = {
    darkMode: false
  };

  handleDarkMode = () => {
    this.setState((prevState) =>
      ({ darkMode: !prevState.darkMode })
    )
  };

  render() {
    return (
      <StyledMenu
        darkMode={this.state.darkMode}
        className='vertical left fixed'>
        <StyledNameHeader>
          {strings.sidebar.name}
        </StyledNameHeader>
        <StyledImageContainer>
          <StyledImage src={sidebarprofile} circular/>
        </StyledImageContainer>
        <StyledSocialMediaButtons circular icon='linkedin' size='medium' href="https://www.linkedin.com/in/lindaayangg/"
                                  target="_blank"/>
        <StyledSocialMediaButtons circular icon='github alternate' size='medium' href="https://github.com/lindaayangg"
                                  target="_blank"/>
        <StyledSocialMediaButtons circular icon='mail' size='medium' href='mailto:xiaoling.yang@uwaterloo.ca'/>
        <StyledSocialMediaButtons circular icon='google play' size='medium'
                                  href='https://play.google.com/store/apps/details?id=com.waveitover.waveit&rdid=com.waveitover.waveit'
                                  target="_blank"/>
        <StyledSocialMediaButtons circular icon='facebook' size='medium' href='https://www.facebook.com/lindayanggg'
                                  target="_blank"/>
        <StyledDivider/>
        <StyledNavList>
          <div>
            <StyledHeaderContainer as='h5'>
              <StyledLabelIcon name='user'/>
              <StyledHeaderLabel
                darkMode={this.state.darkMode}
                as={Link}
                to="about"
                spy={true}
                smooth={true}
                duration={500}>
                {strings.sidebar.about}
              </StyledHeaderLabel>
            </StyledHeaderContainer>
            <StyledHeaderContainer as='h5'>
              <StyledLabelIcon name='pencil alternate'/>
              <StyledHeaderLabel
                darkMode={this.state.darkMode}
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
                darkMode={this.state.darkMode}
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
                darkMode={this.state.darkMode}
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
                darkMode={this.state.darkMode}
                href="https://devlinda.com/assets/Resume_Linda_Yang.pdf"
                target='_blank'
              >
                {strings.sidebar.resume}
              </StyledHeaderLabel>
            </StyledHeaderContainer>
            <StyledHeaderContainer as='h5'>
              <StyledLabelIcon name='thumbs up'/>
              <StyledHeaderLabel
                darkMode={this.state.darkMode}
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
        <StyledDivider/>
        <StyledDarkModeContainer>
          <StyledDarkModeHeaderContainer as='h6'>
            <Icon name='power off'/>
            <StyledDarkModeContent>
              {strings.sidebar.darkMode}
            </StyledDarkModeContent>
          </StyledDarkModeHeaderContainer>
          <Radio
            toggle
            onClick={this.handleDarkMode}
          />
        </StyledDarkModeContainer>
        <StyledCopyRightWrapper>
          {strings.copyright}
        </StyledCopyRightWrapper>
      </StyledMenu>
    )
  }
}

export default StickySidebar;