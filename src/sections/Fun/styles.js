import styled from "styled-components";
import {Icon} from "semantic-ui-react";

export const StyledFunContainer = styled.div`
  &&& {
    margin-top: 60px;
    @media (max-width: 450px) {
      padding: 5px;
      margin-top: 30px;
      margin-bottom: 30px;
    }
  }
`;

export const StyledBodyContainer = styled.div`
  &&& {
    margin-top: 30px;
  }
`;

export const StyledFactWrapper = styled.div`
  &&& {
    margin-bottom: 20px;
  }
`;

export const StyledIcon = styled(Icon)`
  &&& {
    color: #54B689;
  }
`;

export const StyledFact = styled.span`
  &&& {
    font-size: 15px;
  }
`;