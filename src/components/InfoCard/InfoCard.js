import React, {Component} from 'react';
import {Card, Image, Responsive} from "semantic-ui-react";
import {StyledIcon} from "../../sections/About/styles";
import {
  StyledCard,
  StyledCardDescription,
  StyledEmail,
  StyledSocialMediaButtonsInfo,
  StyledSocialMediaButtonsWrapper
} from "./styles";
import strings from "../../res/strings";

class InfoCard extends Component {
  render() {
    return (
      <StyledCard>
        <Image src='https://devlinda.com/assets/img/profile.png' wrapped ui={false}/>
        <Card.Content>
          <Card.Header>Linda Yang</Card.Header>
          <Card.Meta>
            <span>Software Developer</span>
          </Card.Meta>
          <Responsive minWidth={1184}>
            <StyledCardDescription>
              <StyledIcon name="mail" link/>
              <StyledEmail href='mailto:xiaoling.yang@uwaterloo.ca'> {strings.email}</StyledEmail>
            </StyledCardDescription>
            <StyledCardDescription>
              <StyledIcon name="phone"/> {strings.phone}
            </StyledCardDescription>
            <StyledCardDescription>
              <StyledIcon name="map marker alternate"/> {strings.location}
            </StyledCardDescription>
          </Responsive>
          <Responsive maxWidth={1183}>
            <StyledSocialMediaButtonsWrapper>
              <StyledSocialMediaButtonsInfo circular icon='linkedin' size='small'/>
              <StyledSocialMediaButtonsInfo circular icon='github alternate' size='small'/>
              <StyledSocialMediaButtonsInfo circular icon='mail' size='small'/>
              <StyledSocialMediaButtonsInfo circular icon='google play' size='small'/>
              <StyledSocialMediaButtonsInfo circular icon='facebook' size='small'/>
            </StyledSocialMediaButtonsWrapper>
          </Responsive>
        </Card.Content>
      </StyledCard>
    )
  }
}

export default InfoCard;