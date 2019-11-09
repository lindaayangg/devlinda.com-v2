import styled from "styled-components";
import {Card, GridColumn, Icon, Image, LabelGroup, Segment} from "semantic-ui-react";

export const StyledWorkExperienceWrapper = styled.div`
  &&& {
    margin-top: 30px;
  }
`;

export const StyledSegment = styled(Segment)`
  &&& {
    margin-top: -14px;
  }
`;

export const StyledCircleIcon = styled(Icon)`
  &&& {
    color: #DB1793;
  }
`;

export const StyledLeftColumn = styled(GridColumn)`
  &&& {
    display: flex !important;
    flex-direction: column !important;
    align-items: flex-end !important;
  }
`;

export const StyledCard = styled(Card)`
  &&& {
    width: 100% !important;
  }
`;

export const StyledToolsLabelGroup = styled(LabelGroup)`
  &&& {
    margin-top: 10px;
  }
`;

export const StyledImage = styled(Image)`
  &&& {
    width: 80px !important;
  }
`;

export const StyledCompanyWrapperLeft = styled(GridColumn)`
  &&& {
    text-align: end;
    border-right-style: solid;
    border-right-color: #DB1793;
    padding-right: 5px;
    margin-top: 15px;
  }
`;

export const StyledCompanyWrapperRight = styled(GridColumn)`
  &&& {
    border-left-style: solid;
    border-left-color: #DB1793;
    padding-left: 8px;
    margin-top: 15px;
  }
`;

export const StyledCompanyName = styled.div`
  &&& {
    font-weight: 900;
    color: #DB1793;
    font-size: 18px !important;
  }
`;

export const StyledTitleName = styled(Card.Header)`
  &&& {
    color: #DB1793 !important;
  }
`;