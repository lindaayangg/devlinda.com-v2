import styled from "styled-components";
import {Menu} from "semantic-ui-react";

export const StyledMenu = styled(Menu)`
  &&& {
    overflow-y: auto;
    width: 280px !important;
    background-color: #DB1793 !important;
    border-right: none;
    text-align: center;
    display: flex !important;
    flex-direction: column !important;
    justify-content: space-evenly !important;
  }
`;

export const StyledArticle = styled.div`
  &&& {
    margin-left: 300px;
    @media (max-width: 1183px) {
      margin-left: 20px;
    }
  }
`;
