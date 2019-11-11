import styled from "styled-components";
import {Menu, MenuItem} from "semantic-ui-react";

export const StyledNavbar = styled(Menu)`
  &&& {
    border: none;
    box-shadow: none;
    height: 55px;
    background-color: #DB1793;
    border-radius: 0;
    justify-content: flex-end;
    padding-right: 15px;
    @media (max-width: 767px) {
      padding-right: 0px;
    }
  }
`;

export const StyledNavbarItem = styled(MenuItem)`
  &&& {
    color: #fff !important;
    font-size: 15px;
    font-weight: 800;
    cursor: pointer;
    &:before { 
      background: none !important;
    }
  }
`;