import styled from "styled-components";
import {Card, GridColumn, Icon, Image, LabelGroup, Segment} from "semantic-ui-react";

export const StyledWorkExperienceWrapper = styled.div`
  &&& {
    margin-top: 30px;
    width: 96%;
    @media (max-width: 1060px) {
      width: 100%;
    }
  }
`;

export const StyledSegment = styled(Segment)`
  &&& {
    margin-top: -14px;
  }
`;

export const StyledCircleIcon = styled(Icon)`
  &&& {
    color: #54B689;
  }
`;

export const StyledLeftColumn = styled(GridColumn)`
  &&& {
    display: flex !important;
    flex-direction: column !important;
    align-items: flex-end !important;
    @media (max-width: 991px) {
      align-items: flex-end !important;
    }
    @media (max-width: 767px) {
      align-items: center !important;
    }
  }
`;

export const StyledLeftColumnReversed = styled(GridColumn)`
  &&& {
    display: flex !important;
    flex-direction: column !important;
    align-items: flex-start !important;
    @media (max-width: 991px) {
      align-items: flex-end !important;
    }
    @media (max-width: 767px) {
      align-items: center !important;
    }
  }
`;

export const StyledCardWrapper = styled(GridColumn)`
  &&& {
    @media (max-width: 450px) {
      padding: 20px !important;
    }
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
    border-right-color: #54B689;
    padding-right: 8px;
    margin-top: 15px;
    @media (max-width: 767px) {
      border-right-style: none;
      border-left-style: none;
      border-right-color: transparent;
      border-left-color: transparent;
      text-align: center;
    }
  }
`;

export const StyledCompanyWrapperRight = styled(GridColumn)`
  &&& {
    border-left-style: solid;
    border-left-color: #54B689;
    padding-left: 8px;
    margin-top: 15px;
    @media (max-width: 991px) {
      border-right-style: solid;
      border-right-color: #54B689;
      padding-right: 8px;
      border-left-style: none;
      border-left-color: transparent;
      text-align: end;
    }
    @media (max-width: 767px) {
      border-right-style: none;
      border-left-style: none;
      border-right-color: transparent;
      border-left-color: transparent;
      text-align: center;
    }
  }
`;

export const StyledCompanyName = styled.div`
  &&& {
    font-weight: 900;
    color: #54B689;
    font-size: 18px !important;
  }
`;

export const StyledTitleName = styled(Card.Header)`
  &&& {
    color: #54B689 !important;
  }
`;