import styled from "styled-components";
import {Grid, Icon, LabelGroup, Segment} from "semantic-ui-react";

export const StyledGridContainer = styled(Grid)`
  &&& {
    margin-top: 30px !important;
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

export const StyledSkillsWrapper = styled(Grid)`
  &&& {
    padding: 20px 10px 10px 10px;
  }
`;

export const StyledSegmentBox = styled(Segment)`
  &&& {
    width: 350px;
  }
`;

export const StyledCheckIcon = styled(Icon)`
  &&& {
    color: #DB1793;
  }
`;