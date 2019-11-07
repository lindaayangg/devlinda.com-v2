import styled from "styled-components";
import {Grid, LabelGroup} from "semantic-ui-react";

export const StyledGridContainer = styled(Grid)`
  &&& {
    margin-top: 30px;
  }
`;

export const StyledLabelGroup = styled(LabelGroup)`
  &&& {
    margin-top: 20px;
  }
`;

export const StyledSpan = styled.span`
  &&& {
    font-size: 18px;
    font-weight: 700;
    color: #E03997;
  }
`;