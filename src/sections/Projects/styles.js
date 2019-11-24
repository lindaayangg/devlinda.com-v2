import styled from "styled-components";
import {CardHeader, Icon} from "semantic-ui-react";

export const StyledProjectContainer = styled.div`
  &&& {
    margin-top: 60px;
    width: 100%;
    @media (max-width: 1183px) {
      width: 90%;
    }
    @media (max-width: 450px) {
      width: 100%;
      padding: 5px;
    }
  }
`;

export const StyledCarouselWrapper = styled.div`
  &&& {
    margin-top: 30px;
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
    @media (max-width: 360px) {
      width: 230px;
    }
  }
`;

export const StyledProjectName = styled(CardHeader)`
  &&& {
    color: #54B689 !important;
  }
`;