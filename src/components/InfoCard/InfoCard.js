import React, {Component} from 'react';
import {Card, Image} from "semantic-ui-react";
import {StyledIcon} from "../../sections/About/styles";
import {StyledCardDescription, StyledCard, StyledEmail} from "./styles";

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
          <StyledCardDescription>
            <StyledIcon name="mail" link/>
            <StyledEmail href='mailto:xiaoling.yang@uwaterloo.ca'> xiaoling.yang@uwaterloo.ca</StyledEmail>
          </StyledCardDescription>
          <StyledCardDescription>
            <StyledIcon name="phone"/> 416-990-8432
          </StyledCardDescription>
          <StyledCardDescription>
            <StyledIcon name="map marker alternate"/> Toronto, ON • Waterloo, ON • Boston, MA • Winnipeg, MB
          </StyledCardDescription>
        </Card.Content>
      </StyledCard>
    )
  }
}

export default InfoCard;