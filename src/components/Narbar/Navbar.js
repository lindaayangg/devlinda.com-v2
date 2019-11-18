import React, {Component} from 'react';
import {StyledNavbar, StyledNavbarItem, StyledSpecialMenuItem} from "./styles";
import strings from '../../res/strings';
import {Link} from "react-scroll";

class Navbar extends Component {
  render() {
    return (
      <StyledNavbar fixed='top'>
        <StyledNavbarItem
          as={Link}
          to="about"
          spy={true}
          smooth={true}
          duration={500}>
          {strings.navbar.about}
        </StyledNavbarItem>
        <StyledNavbarItem
          as={Link}
          to="knowledge"
          spy={true}
          smooth={true}
          duration={500}>
          {strings.navbar.skills}
        </StyledNavbarItem>
        <StyledNavbarItem
          as={Link}
          to="experience"
          spy={true}
          smooth={true}
          duration={500}>
          {strings.navbar.experience}
        </StyledNavbarItem>
        <StyledNavbarItem
          as={Link}
          to="projects"
          spy={true}
          smooth={true}
          duration={500}>
          {strings.navbar.projects}
        </StyledNavbarItem>
        <StyledSpecialMenuItem
          href="https://devlinda.com/assets/Resume_Linda_Yang.pdf"
          target='_blank'>
          {strings.navbar.resume}
        </StyledSpecialMenuItem>
      </StyledNavbar>
    )
  }
}

export default Navbar;