import styled from "styled-components";
import {Button, Divider, Header, Icon, Menu} from "semantic-ui-react";

export const StyledNavbar = styled(Menu)`
  &&& {
    border: none;
    box-shadow: none;
    background-color: #54B689;
    height: ${props => props.navOpen ? 'fit-content' : '55px'}
    border-radius: 0;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    @media (max-width: 767px) {
      padding-right: 0px;
    }
  }
`;

export const StyledSidebarIcon = styled(Icon)`
  &&& {
    color: #fff !important;
    cursor: pointer;
    &:before { 
      background: none !important;
    }
  }
`;

export const StyledDropdownNavWrapper = styled.div`
  &&& {
    background: #54B689;
  }
`;

export const StyledName = styled(Header)`
  &&& {
    color: #FFF;
    margin: 0;
    cursor: pointer;
    font-size: 20px;
    font-weight: 600;
  }
`;

export const StyledSidebarButton = styled(Button)`
  &&& {
    background: none;
    padding: 4px 20px !important;
    &:hover {
      background: none;
    }
    &:focus {
      background: none;
    }
  }
`;

export const StyledNavbarWrapper = styled.div`
  &&& {
    display: flex;
    flex-direction: row;
    padding: 15px 0;
  }
`;

export const StyledDivider = styled(Divider)`
  &&& {
    margin-top: 0;
    width: 100vw;
  }
`;

export const StyledMenuWrapper = styled.div`
  &&& {
    padding: 0 20px 20px 20px;
  }
`;