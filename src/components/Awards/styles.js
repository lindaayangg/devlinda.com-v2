import styled from "styled-components";
import {HeaderContent, Icon, ListItem} from "semantic-ui-react";

export const StyledAchievementsWrapper = styled.div`
  &&& {
    margin-top: 5px;
  }
`;

export const StyledStarIcon = styled(Icon)`
  &&& {
    color: #54B689;
  }
`;

export const StyledAchievementsHeader = styled(HeaderContent)`
  &&& {
    font-size: 17px;
  }
`;

export const StyledAwards = styled(HeaderContent)`
  &&& {
    border-left: #54B689;
    border-left-style: solid;
    border-left-width: 2px;
    padding-left: 35px;
    font-size: 15px;
    margin-left: 25px;
  }
`;

export const StyledSingleAward = styled(ListItem)`
  &&& {
    padding-bottom: 10px !important;
  }
`;