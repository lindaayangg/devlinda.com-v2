import styled from "styled-components";
import {Grid, Icon, Segment} from "semantic-ui-react";

export const StyledGridContainer = styled(Grid)`
  &&& {
    margin-top: 20px !important;
    margin-left: 10px !important;
    padding: 20px !important;
    @media (max-width: 859px) {
      margin-top: 0px !important;
      margin-left: 0px !important;
      padding: 0px !important
    }
  }
`;

export const StyledGridContainerTablet = styled(Grid)`
  &&&{
  
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