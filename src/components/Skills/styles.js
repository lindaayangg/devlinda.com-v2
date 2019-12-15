import styled from "styled-components";
import {Grid, Icon} from "semantic-ui-react";

export const StyledSkillsWrapperContainer = styled.div`
  &&& {
    width: 95%;
    margin-top: 40px;
    @media (max-width: 1060px) {
      width: 100%;
    }
  }
`;

export const StyledSkillsTitleWrapper = styled.div`
  &&& {
    padding: 5px 10px 0 10px;
  }
`;

export const StyledSpan = styled.span`
  &&& {
    font-size: 18px;
    font-weight: 500;
    color: #54B689;
    margin-left: 5px;
  }
`;

export const StyledSkillsWrapper = styled(Grid)`
  &&& {
    padding: 20px 10px 10px 10px;
  }
`;

export const StyledCheckIcon = styled(Icon)`
  &&& {
    color: #54B689;
  }
`;

export const StyledSkillsIcon = styled(Icon)`
  &&& {
    color: #54B689;
  }
`;