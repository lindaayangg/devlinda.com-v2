import styled from "styled-components";
import {HeaderContent, Icon} from "semantic-ui-react";
import HeaderSubHeader from "semantic-ui-react/dist/commonjs/elements/Header/HeaderSubheader";

export const StyledEducationContainer = styled.div`
  &&& {
    margin-top: 40px;
  }
`;

export const StyledUniversityIcon = styled(Icon)`
  &&& {
    color: #DB1793;
  }
`;

export const StyledSchoolName = styled(HeaderContent)`
  &&& {
    font-size: 18px;
    font-weight: 900;
  }
`;

export const StyledYear = styled(HeaderSubHeader)`
  &&& {
    font-size: 14px !important;
    font-weight: 600 !important;
    line-height: 1rem !important;
  }
`;

export const StyledDegree = styled(HeaderContent)`
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