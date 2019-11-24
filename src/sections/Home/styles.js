import styled from "styled-components";
import {Button, Header, Image} from "semantic-ui-react";

export const StyledArticle = styled.div`
  &&& {
    margin-left: 300px;
    @media (max-width: 1183px) {
      margin-left: 20px;
    }
  }
`;

export const StyledLandingWrapper = styled.div`
  &&& {
    background-color: #000000;
  }
`;

export const StyledContentWrapper = styled.div`
  &&& {
    position: fixed;
    top: 50%;
    left: 50%;
    width: 500px;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    color: #FFFFFF;
    text-align: -webkit-center;
  }
`;

export const StyledImage = styled(Image)`
  &&& {
    border: 15px solid #ffffff;
    width: 230px;
    border-radius: 25px !important;
  }
`;

export const StyledHeader = styled(Header)`
  &&& {
    color: #fff;
    margin-top: 15px;
    font-size: 35px;
    @media (max-width: 450px) {
      font-size: 30px;
    }
    @media (max-width: 400px) {
      font-size: 25px;
    }
  }
`;

export const StyledEnterButton = styled(Button)`
  &&& {
    background-color: #DB1793 !important;
    color: #fff;
    width: 100px;
    margin-top: 10px;
  }
`;