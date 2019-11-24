import styled from "styled-components";
import {Grid, Icon} from "semantic-ui-react";

export const StyledSkillsWrapperContainer = styled.div`
  &&& {
    width: 95%;
  }
`;

export const StyledGridContainer = styled(Grid)`
  &&& {
    margin-top: 20px !important;
    @media (max-width: 859px) {
      margin-top: 0px !important;
      margin-left: 0px !important;
      padding: 0px !important
    }
    @media (max-width: 450px) {
      width: 98% !important; 
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
    font-weight: 700;
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