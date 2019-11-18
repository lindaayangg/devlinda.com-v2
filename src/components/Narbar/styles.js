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
    padding: 20px;
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
    margin-left: 10px;
    margin-right: 10px;
    cursor: pointer;
    &:before { 
      background: none !important;
    }
  }
`;

export const StyledSpecialMenuItem = styled(MenuItem)`
  &&& {
    color: #fff !important;
    font-size: 15px;
    font-weight: 800 !important;
    margin-top: -4px;
    margin-left: -8px;
    margin-right: -8px;
    cursor: pointer;
    &:hover {
      background: none !important;
    }
    &:before { 
      background: none !important;
    }
  }
`;