import styled from "styled-components";
import {Card, CardDescription} from "semantic-ui-react";

export const StyledCardDescription = styled(CardDescription)`
  &&& {
    line-height: 1.8rem;
    font-size: 14px;
  }
`;

export const StyledCard = styled(Card)`
  &&& {
    width: 225px !important;
    @media (max-width: 991px) {
      width: 300px !important;
    }
  }
`;

export const StyledEmail = styled.a`
  &&& {
    word-break: break-all;
  }
`;

