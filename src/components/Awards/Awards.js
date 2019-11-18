import React, {Component} from 'react';
import {
  StyledAchievementsHeader,
  StyledAchievementsWrapper,
  StyledAwards,
  StyledSingleAward,
  StyledStarIcon
} from "./styles";
import {Header, List} from "semantic-ui-react";
import strings from "../../res/strings";

class Awards extends Component {
  render() {
    return (
      <StyledAchievementsWrapper>
        <Header as='h1'>
          <StyledStarIcon name='star'/>
          <StyledAchievementsHeader>{strings.achievements.title}</StyledAchievementsHeader>
        </Header>
        <StyledAwards>
          <List>
            <StyledSingleAward>
              <List.Icon name='trophy'/>
              <List.Content>{strings.achievements.hackthe6ix}</List.Content>
            </StyledSingleAward>
            <StyledSingleAward>
              <List.Icon name='trophy'/>
              <List.Content>{strings.achievements.deans}</List.Content>
            </StyledSingleAward>
            <StyledSingleAward>
              <List.Icon name='certificate'/>
              <List.Content>{strings.achievements.customer}</List.Content>
            </StyledSingleAward>
            <StyledSingleAward>
              <List.Icon name='certificate'/>
              <List.Content>{strings.achievements.pharmacy}</List.Content>
            </StyledSingleAward>
            <StyledSingleAward>
              <List.Icon name='certificate'/>
              <List.Content>{strings.achievements.cpr}</List.Content>
            </StyledSingleAward>
            <StyledSingleAward>
              <List.Icon name='certificate'/>
              <List.Content>{strings.achievements.infection}</List.Content>
            </StyledSingleAward>
          </List>
        </StyledAwards>
      </StyledAchievementsWrapper>
    )
  }
}

export default Awards;