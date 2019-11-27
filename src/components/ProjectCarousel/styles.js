import styled from "styled-components";
import {Button, CardHeader, Icon} from "semantic-ui-react";

export const StyledLinkButton = styled(Button)`
  &&& {
    background-color: #54B689;
    color: #fff;
    &:hover {
      background-color: #54B689;
    }
  }
`;

export const StyledArrows = styled(Icon)`
  &&& {
    color: #54B689;
  }
`;

export const StyledCardWrapper = styled.div`
  &&& {
    padding: 10px 0;
    height: 550px;
    @media (max-width: 350px) {
      width: 190px;
    }
    @media (min-width: 351px) and (max-width: 400px) {
      width: 230px;
    }
    @media (min-width: 401px) and (max-width: 450px) {
      width: 250px;
    }
  }
`;

export const StyledProjectName = styled(CardHeader)`
  &&& {
    color: #54B689 !important;
  }
`;