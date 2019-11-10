import React, {Component} from 'react';
import {
  StyledAchievementsHeader,
  StyledAchievementsWrapper,
  StyledAwards,
  StyledSingleAward,
  StyledStarIcon
} from "./styles";
import {Header, List} from "semantic-ui-react";

class Awards extends Component {
  render() {
    return (
      <StyledAchievementsWrapper>
        <Header as='h1'>
          <StyledStarIcon name='star'/>
          <StyledAchievementsHeader>ACHIEVEMENTS</StyledAchievementsHeader>
        </Header>
        <StyledAwards>
          <List>
            <StyledSingleAward>
              <List.Icon name='trophy'/>
              <List.Content>Hack The 6ix Top 10 Finalist</List.Content>
            </StyledSingleAward>
            <StyledSingleAward>
              <List.Icon name='trophy'/>
              <List.Content>1B Term Dean's Honours List</List.Content>
            </StyledSingleAward>
            <StyledSingleAward>
              <List.Icon name='certificate'/>
              <List.Content>Customer Service and Leadership Certification</List.Content>
            </StyledSingleAward>
            <StyledSingleAward>
              <List.Icon name='certificate'/>
              <List.Content>Gold Level Pharmacy Assistant Training</List.Content>
            </StyledSingleAward>
            <StyledSingleAward>
              <List.Icon name='certificate'/>
              <List.Content>Standard First Aid and Cardiopulmonary Resuscitation</List.Content>
            </StyledSingleAward>
            <StyledSingleAward>
              <List.Icon name='certificate'/>
              <List.Content>Infection Control</List.Content>
            </StyledSingleAward>
          </List>
        </StyledAwards>
      </StyledAchievementsWrapper>
    )
  }
}

export default Awards;