import styled from "styled-components";
import {CardHeader, Icon} from "semantic-ui-react";

export const StyledProjectContainer = styled.div`
  &&& {
    margin-top: 50px;
    margin-bottom: 30px;
    width: 98%;
    @media (max-width: 1183px) {
      width: 90%;
    }
    @media (max-width: 450px) {
      width: 100%;
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
    color: #DB1793;
  }
`;

export const StyledCardWrapper = styled.div`
  &&& {
    padding: 10px 0;
    @media (max-width: 350px) {
      width: 230px;
    }
  }
`;

export const StyledProjectName = styled(CardHeader)`
  &&& {
    color: #DB1793 !important;
  }
`;