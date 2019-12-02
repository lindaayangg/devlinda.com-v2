import styled from "styled-components";
import {Grid, Header} from "semantic-ui-react";

export const StyledContainer = styled.div`
  &&& {
    margin-top: 60px;
    @media (max-width: 450px) {
      padding: 5px;
      margin-top: 30px;
    }
  }
`;

export const StyledHeaderWrapper = styled.div`
  &&& {
    width: fit-content;
    border-bottom-style: solid;
    border-bottom-color: #54B689;
    padding-bottom: 5px;
  }
`;

export const StyledHeader = styled(Header)`
  &&& {
    font-size: 25px;
    color: #54B689;
  }
`;

export const StyledGlobalGridContainer = styled(Grid)`
  &&& {
    margin-top: 10px;
  }
`;
