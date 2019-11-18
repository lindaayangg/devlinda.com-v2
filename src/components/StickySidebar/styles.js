import styled from "styled-components";
import {Button, Divider, Header, HeaderContent, Icon, Image, Menu, MenuItem} from "semantic-ui-react";

export const StyledMenu = styled(Menu)`
  &&& {
    overflow-y: auto;
    width: 280px !important;
    border-right: none;
    text-align: center;
    background-color: ${props => props.darkMode ? '#000 !important' : '#DB1793 !important'}
  }
`;

export const StyledMenuItem = styled(MenuItem)`
  &&& {
    font-size:32px;
    font-weight: 900 !important;
    color: #fff !important; 
  }
`;

export const StyledImageContainer = styled.div`
  &&& {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: -10px;
    margin-bottom: 20px;
  }
`;

export const StyledImage = styled(Image)`
  &&& {
    width: 100px !important;
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
    margin-top: 24px;
    margin-bottom: 24px;
  }
`;

export const StyledNavList = styled.div`
  &&& {
    display: flex;
    align-items: center;
    justify-content: center;
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
    color: #fff;
    cursor: pointer;
    &:hover {
      color: rgba(0,0,0,0.8);
    }
  }
`;

export const StyledLabelIcon = styled(Icon)`
  &&& {
    cursor: pointer;
  }
`;

export const StyledHireMeButton = styled(Button)`
  &&& {
    margin-top: 30px;
    color: #fff;
    background-color: #C71F7E;
  }
`;

export const StyledDarkModeContainer = styled.div`
  &&& {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: -30px;
    margin-bottom: 20px;
  }
`;

export const StyledDarkModeHeaderContainer = styled(Header)`
  &&& {
    text-align: left;
    display: flex;
    flex-direction: row;
    color: #fff;
    font-size: 14px;
    font-weight: 700;
    margin-bottom: 10px;
  }
`;

export const StyledDarkModeContent = styled(HeaderContent)`
  &&& {
    margin-left: 5px;
  }
`;

export const StyledCopyRightWrapper = styled.div`
  &&& {
    padding: 10px;
    color: #fff;
  }
`;
