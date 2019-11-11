import React, {Component} from 'react';
import {Icon, Radio} from "semantic-ui-react";
import {
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

class StickySidebar extends Component {
  render() {
    return (
      <div>
        <StyledMenuItem>
          LINDA YANG
        </StyledMenuItem>
        <StyledImageContainer>
          <StyledImage src='https://react.semantic-ui.com/images/wireframe/square-image.png' circular/>
        </StyledImageContainer>
        <StyledSocialMediaButtons circular icon='linkedin' size='large'/>
        <StyledSocialMediaButtons circular icon='github alternate' size='large'/>
        <StyledSocialMediaButtons circular icon='mail' size='large'/>
        <StyledSocialMediaButtons circular icon='google play' size='large'/>
        <StyledSocialMediaButtons circular icon='facebook' size='large'/>
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
                About Me
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
                Skills & Education
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
                Experience
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
                Projects
              </StyledHeaderLabel>
            </StyledHeaderContainer>
            <StyledHeaderContainer as='h5'>
              <StyledLabelIcon name='file text'/>
              <StyledHeaderLabel
                as={Link}
                to="https://devlinda.com/assets/Resume_Linda_Yang.pdf"
                spy={true}
                smooth={true}
                duration={500}>
                Resume
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
                Fun Facts & Stuff
              </StyledHeaderLabel>
            </StyledHeaderContainer>
          </div>
        </StyledNavList>
        <StyledHireMeButton>
          <Icon name='send'/> Hire Me
        </StyledHireMeButton>
        <StyledDivider/>
        <StyledDarkModeContainer>
          <StyledDarkModeHeaderContainer as='h6'>
            <Icon name='power off'/>
            <StyledDarkModeContent>Dark Mode</StyledDarkModeContent>
          </StyledDarkModeHeaderContainer>
          <Radio toggle/>
        </StyledDarkModeContainer>
      </div>
    )
  }
}

export default StickySidebar;