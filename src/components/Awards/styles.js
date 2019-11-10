import styled from "styled-components";
import {HeaderContent, Icon} from "semantic-ui-react";

export const StyledAchievementsWrapper = styled.div`
  &&& {
    margin-top: 5px;
  }
`;

export const StyledStarIcon = styled(Icon)`
  &&& {
    color: #DB1793;
  }
`;

export const StyledAchievementsHeader = styled(HeaderContent)`
  &&& {
    font-size: 20px;
  }
`;

export const StyledAwards = styled(HeaderContent)`
  &&& {
    border-left: #DB1793;
    border-left-style: dotted;
    border-left-width: 4px;
    padding-left: 35px;
    font-size: 15px;
    margin-left: 25px;
    line-height: 1.8rem;
  }
`;