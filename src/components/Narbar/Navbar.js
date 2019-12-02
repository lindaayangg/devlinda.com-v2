import React, {Component} from 'react';
import {
  StyledDivider,
  StyledDropdownNavWrapper, StyledMenuWrapper,
  StyledName,
  StyledNavbar,
  StyledNavbarWrapper,
  StyledSidebarButton,
  StyledSidebarIcon
} from "./styles";
import {StyledHeaderContainer, StyledHeaderLabel, StyledLabelIcon} from "../StickySidebar/styles";
import {Link} from "react-scroll";
import strings from "../../res/strings";

class Navbar extends Component {
  state = {
    navOpen: false,
  };

  handleNavClick = () => {
    const {navOpen} = this.state;
    this.setState({
      navOpen: !navOpen,
    })
  };

  handleCloseNav = () => {
    this.setState({
      navOpen: false,
    })
  };

  renderNavbarItems = () => {
    return (
      <StyledDropdownNavWrapper>
        <StyledDivider/>
        <StyledMenuWrapper>
          <StyledHeaderContainer as='h5'>
            <StyledLabelIcon name='user'/>
            <StyledHeaderLabel
              darkMode={this.state.darkMode}
              onClick={this.handleCloseNav}
              as={Link}
              to="home"
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
              onClick={this.handleCloseNav}
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
              onClick={this.handleCloseNav}
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
              onClick={this.handleCloseNav}
              as={Link}
              to="projects"
              spy={true}
              smooth={true}
              duration={500}>
              {strings.sidebar.projects}
            </StyledHeaderLabel>
          </StyledHeaderContainer>
          <StyledHeaderContainer as='h5'>
            <StyledLabelIcon name='thumbs up'/>
            <StyledHeaderLabel
              darkMode={this.state.darkMode}
              onClick={this.handleCloseNav}
              as={Link}
              to="fun"
              spy={true}
              smooth={true}
              duration={500}>
              {strings.sidebar.fun}
            </StyledHeaderLabel>
          </StyledHeaderContainer>
          <StyledHeaderContainer as='h5'>
            <StyledLabelIcon name='file text'/>
            <StyledHeaderLabel
              darkMode={this.state.darkMode}
              onClick={this.handleCloseNav}
              href="https://devlinda.com/assets/Resume_Linda_Yang.pdf"
              target='_blank'
            >
              {strings.sidebar.resume}
            </StyledHeaderLabel>
          </StyledHeaderContainer>
        </StyledMenuWrapper>
      </StyledDropdownNavWrapper>
    )
  };

  render() {
    const {navOpen} = this.state;
    return (
      <StyledNavbar
        navOpen={navOpen}
        fixed='top'
      >
        <StyledNavbarWrapper>
          <StyledSidebarButton
            icon
            onClick={this.handleNavClick}>
            <StyledSidebarIcon name='sidebar'/>
          </StyledSidebarButton>
          <StyledName
            as={Link}
            to="home"
            spy={true}
            smooth={true}
            duration={500}>
            LINDA YANG
          </StyledName>
        </StyledNavbarWrapper>
        {navOpen ? this.renderNavbarItems()
          : null
        }
      </StyledNavbar>
    )
  }
}

export default Navbar;