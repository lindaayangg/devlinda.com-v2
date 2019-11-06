import React, {Component} from 'react';
import {Icon, Radio} from "semantic-ui-react";
import About from "../../sections/About/About";
import {
  StyledArticle,
  StyledDarkModeContainer,
  StyledDarkModeContent,
  StyledDarkModeHeaderContainer,
  StyledDivider,
  StyledHeaderContainer,
  StyledHeaderLabel,
  StyledHireMeButton,
  StyledMenu,
  StyledMenuItem,
  StyledNavList,
  StyledSocialMediaButtons
} from "./styles";
import Skills from "../../sections/Skills/Skills";

class StickySidebar extends Component {
  render() {
    return (
      <div>
        <StyledMenu className='vertical left fixed'>
          <StyledMenuItem>
            LINDA YANG
          </StyledMenuItem>
          <StyledSocialMediaButtons circular icon='linkedin' size='large'/>
          <StyledSocialMediaButtons circular icon='github alternate' size='large'/>
          <StyledSocialMediaButtons circular icon='mail' size='large'/>
          <StyledSocialMediaButtons circular icon='google play' size='large'/>
          <StyledSocialMediaButtons circular icon='facebook' size='large'/>
          <StyledDivider/>
          <StyledNavList>
            <div>
              <StyledHeaderContainer as='h5'>
                <Icon name='user'/>
                <StyledHeaderLabel>About Me</StyledHeaderLabel>
              </StyledHeaderContainer>
              <StyledHeaderContainer as='h5'>
                <Icon name='graduation'/>
                <StyledHeaderLabel>Skills & Education</StyledHeaderLabel>
              </StyledHeaderContainer>
              <StyledHeaderContainer as='h5'>
                <Icon name='briefcase'/>
                <StyledHeaderLabel>Experience</StyledHeaderLabel>
              </StyledHeaderContainer>
              <StyledHeaderContainer as='h5'>
                <Icon name='lightbulb'/>
                <StyledHeaderLabel>Projects</StyledHeaderLabel>
              </StyledHeaderContainer>
              <StyledHeaderContainer as='h5'>
                <Icon name='file text'/>
                <StyledHeaderLabel>Resume</StyledHeaderLabel>
              </StyledHeaderContainer>
              <StyledHeaderContainer as='h5'>
                <Icon name='thumbs up'/>
                <StyledHeaderLabel>Fun Facts & Stuff</StyledHeaderLabel>
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
        </StyledMenu>
        <StyledArticle>
          <About/>
          <Skills/>
        </StyledArticle>
      </div>
    )
  }
}

export default StickySidebar;