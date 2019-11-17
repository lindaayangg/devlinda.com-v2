import styled from "styled-components";
import {Button, Card, CardDescription} from "semantic-ui-react";

export const StyledCardDescription = styled(CardDescription)`
  &&& {
    line-height: 1.8rem;
    font-size: 14px;
  }
`;

export const StyledCard = styled(Card)`
  &&& {
    width: 235px !important;
    @media (max-width: 1183px) {
      width: 300px !important;
    }
  }
`;

export const StyledEmail = styled.a`
  &&& {
    word-break: break-all;
  }
`;

export const StyledSocialMediaButtonsWrapper = styled.div`
  &&& {
    margin-top: 8px;
  }
`;

export const StyledSocialMediaButtonsInfo = styled(Button)`
  &&& {
    background-color: #DB1793 !important;
    color: #fff;
    margin: 0px 5px 0px 0px;
  }
`;

