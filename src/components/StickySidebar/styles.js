import styled from "styled-components";
import {Button, Divider, Header, HeaderContent, Image, MenuItem} from "semantic-ui-react";

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
    margin-bottom: 30px;
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
