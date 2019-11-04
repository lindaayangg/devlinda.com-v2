import React, {Component} from 'react';
import {Menu} from "semantic-ui-react";
import About from "../../sections/About/About";
import {StyledArticle, StyledMenu} from "./styles";

class StickySidebar extends Component {
  render() {
    return (
      <div>
        <StyledMenu className='vertical left fixed'>
          <Menu.Item>
            LINDA YANG
          </Menu.Item>
        </StyledMenu>
        <StyledArticle>
          <About/>
          <About/>
        </StyledArticle>
      </div>

    )
  }
}

export default StickySidebar;