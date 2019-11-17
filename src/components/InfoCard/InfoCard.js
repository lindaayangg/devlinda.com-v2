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
import profile from '../../res/images/profile.jpg';

class InfoCard extends Component {
  render() {
    return (
      <StyledCard>
        <Image src={profile} wrapped ui={false}/>
        <Card.Content>
          <Card.Header>{strings.infoCard.name}</Card.Header>
          <Card.Meta>
            <span>{strings.infoCard.title}</span>
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
              <StyledSocialMediaButtonsInfo circular icon='linkedin' size='small' href="https://www.linkedin.com/in/lindaayangg/"
                                            target="_blank"/>
              <StyledSocialMediaButtonsInfo circular icon='github alternate' size='small' href="https://github.com/lindaayangg"
                                            target="_blank"/>
              <StyledSocialMediaButtonsInfo circular icon='mail' size='small' href='mailto:xiaoling.yang@uwaterloo.ca'/>
              <StyledSocialMediaButtonsInfo circular icon='google play' size='small' href='https://play.google.com/store/apps/details?id=com.waveitover.waveit&rdid=com.waveitover.waveit'
                                            target="_blank"/>
              <StyledSocialMediaButtonsInfo circular icon='facebook' size='small' href='https://www.facebook.com/lindayanggg'
                                            target="_blank"/>
            </StyledSocialMediaButtonsWrapper>
          </Responsive>
        </Card.Content>
      </StyledCard>
    )
  }
}

export default InfoCard;