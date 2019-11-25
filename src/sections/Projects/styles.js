import styled from "styled-components";
import {CardHeader, Icon} from "semantic-ui-react";

export const StyledProjectContainer = styled.div`
  &&& {
    margin-top: 60px;
    margin-bottom: 60px;
    width: 100%;
    @media (max-width: 450px) {
      padding: 5px;
    }
  }
`;

export const StyledCarouselWrapper = styled.div`
  &&& {
    margin-top: 50px;
    width: 100%;
  }
`;