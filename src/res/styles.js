import styled from "styled-components";
import {Grid, Header} from "semantic-ui-react";

export const StyledContainer = styled.div`
  &&& {
    padding: 20px;
    margin-top: 10px;
    margin-bottom: 10px;
  }
`;

export const StyledHeader = styled(Header)`
  &&& {
    font-size: 30px;
    color: #DB1793;
  }
`;

export const StyledGridContainer = styled(Grid)`
  &&& {
    margin-top: 10px;
  }
`;
