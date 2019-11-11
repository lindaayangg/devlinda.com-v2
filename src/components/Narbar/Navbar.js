import React, {Component} from 'react';
import {StyledNavbar, StyledNavbarItem} from "./styles";
import strings from '../../res/strings';

class Navbar extends Component {
  render() {
    return (
      <StyledNavbar fixed='top'>
        <StyledNavbarItem name={strings.navbar.home}/>
        <StyledNavbarItem name={strings.navbar.skills}/>
        <StyledNavbarItem name={strings.navbar.experience}/>
        <StyledNavbarItem name={strings.navbar.projects}/>
        <StyledNavbarItem name={strings.navbar.resume}/>
      </StyledNavbar>
    )
  }
}

export default Navbar;