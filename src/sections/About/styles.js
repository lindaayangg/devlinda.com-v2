import styled from "styled-components";
import {Icon} from "semantic-ui-react";

export const StyledAboutContainer = styled.div`
  &&& {
    padding: 20px;
    margin-top: 10px;
    margin-bottom: 30px;
    @media (max-width: 1183px) {
      margin-top: 65px;
    }
  }
`;

export const StyledIntro = styled.div`
  &&& {
    font-size: 17px;
    line-height: 1.8rem;
    color: #000000;
  }
`;

export const StyledIcon = styled(Icon)`
  &&& {
    color: #DB1793;
  }
`;

