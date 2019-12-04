import styled from "styled-components";
import {GridColumn, Header, HeaderSubheader, Icon, Image} from "semantic-ui-react";

export const StyledAboutContainer = styled.div`
  &&& {
    margin-top: 30px;
    @media (max-width: 1183px) {
      margin-top: 65px;
    }
  }
`;

export const StyledIntro = styled.div`
  &&& {
    font-size: 15px;
    line-height: 1.5rem;
    color: #4F4F4F;
    margin-top: 20px;
  }
`;

export const StyledIcon = styled(Icon)`
  &&& {
    color: #54B689;
  }
`;

export const StyledLocationWrapper = styled.div`
  &&& {
    margin-top: 25px;
    font-size: 15px;
    line-height: 1.5rem;
    color: #4F4F4F;
  }
`;

export const StyledEducationWrapper = styled.div`
  &&& {
    margin-top: 20px;
    font-size: 15px;
    line-height: 1.5rem;
    color: #4F4F4F;
  }
`;

export const StyledInfoGridWrapper = styled(GridColumn)`
  &&& {
    @media (max-width: 450px) {
      display: flex !important;
      flex-direction: column !important;
      align-items: center !important;
    }
  }
`;

export const StyledNameHeader = styled(Header)`
  &&& {
    font-size: 35px;
  }
`;

export const StyledSubHeaderRole = styled(HeaderSubheader)`
  &&& {
    color: #4f4f4f;
    font-size: 20px;
    font-weight: 400;
  }
`;

export const StyledImage = styled(Image)`
  &&& {
    @media (max-width: 450px) {
      width: 100% !important;
    }
  }
`;

