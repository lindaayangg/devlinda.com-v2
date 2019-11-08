import styled from "styled-components";
import {GridColumn, Icon} from "semantic-ui-react";

export const StyledCircleIcon = styled(Icon)`
  &&& {
    color: #DB1793;
  }
`;

export const StyledExperienceContainer = styled.div`
  &&& {
    width: 80%;
  }
`;

export const StyledLeftColumn = styled(GridColumn)`
  &&& {
    display: flex !important;
    flex-direction: column !important;
    align-items: flex-end !important;
  }
`;