import styled from "styled-components";
import {Button, Divider, Header, HeaderContent, Menu, MenuItem} from "semantic-ui-react";

export const StyledArticle = styled.div`
  &&& {
    margin-left: 300px;
  }
`;

export const StyledMenu = styled(Menu)`
  &&& {
    width: 280px !important;
    background-color: #DB1793 !important;
    border-right: none;
    text-align: center;
  }
`;

export const StyledMenuItem = styled(MenuItem)`
  &&& {
    font-size:32px;
    font-weight: 900 !important;
    color: #fff !important; 
  }
`;

export const StyledSocialMediaButtons = styled(Button)`
  &&& {
    background-color: #fff !important;
    color: #DB1793;
    margin: 0px 3px;
  }
`;

export const StyledDivider = styled(Divider)`
  &&& {
    margin-top: 30px;
  }
`;

export const StyledNavList = styled.div`
  &&& {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 30px;
  }
`;

export const StyledHeaderContainer = styled(Header)`
  &&& {
    text-align: left;
    display: flex;
    flex-direction: row;
    color: #fff;
    font-size: 15px;
    font-weight: 700;
  }
`;

export const StyledHeaderLabel = styled(HeaderContent)`
  &&& {
    margin-left: 10px;
  }
`;