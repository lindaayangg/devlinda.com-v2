import styled from "styled-components";
import {HeaderContent, Icon} from "semantic-ui-react";
import HeaderSubHeader from "semantic-ui-react/dist/commonjs/elements/Header/HeaderSubheader";

export const StyledUniversityIcon = styled(Icon)`
  &&& {
    color: #54B689;
  }
`;

export const StyledSchoolName = styled(HeaderContent)`
  &&& {
    font-size: 17px;
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
    border-left: #54B689;
    border-left-style: solid;
    border-left-width: 2px;
    padding-left: 35px;
    font-size: 15px;
    margin-left: 25px;
    line-height: 1.8rem;
  }
`;