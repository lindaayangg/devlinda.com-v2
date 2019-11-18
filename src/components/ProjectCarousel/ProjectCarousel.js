import React, {Component} from 'react';
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import {Button, Card, Image, Label, LabelGroup} from "semantic-ui-react";
import {StyledArrows, StyledCardWrapper, StyledProjectName} from "../../sections/Projects/styles";
import budgetbuddy from '../../res/images/budgetbuddy.png';
import wave from '../../res/images/wave.png';
import groshare from '../../res/images/groshare.png';
import safeme from '../../res/images/safeme.png';
import distractic from '../../res/images/distractic.png'
import {StyledLinkButton} from "./styles";
import {StyledSocialMediaButtonsInfo} from "../InfoCard/styles";

class ProjectCarousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: 0,
      height: 0
    };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({width: window.innerWidth, height: window.innerHeight});
  }

  render() {
    const {width} = this.state;
    const carouselSettings = (width < 1300) ?
      (width < 767) ? {
        infinite: true,
        animationSpeed: 1000,
        slidesPerPage: 1,
        arrowLeft: <StyledArrows name="angle double left" size='large'/>,
        arrowRight: <StyledArrows name="angle double right" size='large'/>,
        addArrowClickHandler: true,
      } : {
        infinite: true,
        animationSpeed: 1000,
        slidesPerPage: 2,
        arrowLeft: <StyledArrows name="angle double left" size='large'/>,
        arrowRight: <StyledArrows name="angle double right" size='large'/>,
        addArrowClickHandler: true,
      } : {
        infinite: true,
        animationSpeed: 1000,
        slidesPerPage: 3,
        arrowLeft: <StyledArrows name="angle double left" size='large'/>,
        arrowRight: <StyledArrows name="angle double right" size='large'/>,
        addArrowClickHandler: true,
      };
    return (
      <Carousel
        {...carouselSettings}
      >
        <StyledCardWrapper>
          <Card>
            <Image src={wave} wrapped ui={false}/>
            <Card.Content>
              <StyledProjectName>
                Wave
              </StyledProjectName>
              <Card.Meta>
                <span>Sep. 2018</span>
              </Card.Meta>
              <Card.Description>
                A suite of applications that uses sound wave technology to provide cross-platform file and data
                transfer.
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <StyledLinkButton
                icon='github alternate'
                href="https://github.com/lindaayangg/Wave-Web"
                target="_blank"
                circular/>
              <StyledLinkButton
                icon='apple'
                href=""
                target="_blank"
                circular/>
              <StyledLinkButton
                icon='android'
                href=""
                target="_blank"
                circular/>
              <StyledLinkButton
                icon='window maximize outline'
                href="https://waveitover.com/"
                target="_blank"
                circular/>
            </Card.Content>
            <Card.Content extra>
              <LabelGroup>
                <Label>Flutter</Label>
                <Label>Chirp API</Label>
                <Label>Android Studio</Label>
                <Label>Ruby</Label>
                <Label>Ruby On Rails</Label>
                <Label>MySQL</Label>
                <Label>ReactJS</Label>
                <Label>JavaScript</Label>
                <Label>HTML | CSS</Label>
              </LabelGroup>
            </Card.Content>
          </Card>
        </StyledCardWrapper>
        <StyledCardWrapper>
          <Card>
            <Image src={budgetbuddy} wrapped ui={false}/>
            <Card.Content>
              <StyledProjectName>BudgetBuddy</StyledProjectName>
              <Card.Meta>
                <span>Sep. 2018</span>
              </Card.Meta>
              <Card.Description>
                An Android application that recommends shopping alternatives to help one to achieve their desired
                budgets.
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <StyledLinkButton
                icon='github alternate'
                href="https://github.com/lindaayangg/BudgetBuddy"
                target="_blank"
                circular/>
              <StyledLinkButton
                icon='android'
                href=""
                target="_blank"
                circular/>
            </Card.Content>
            <Card.Content extra>
              <LabelGroup>
                <Label>Java</Label>
                <Label>TD Da Vinci API</Label>
                <Label>Yelp Fusion API</Label>
                <Label>Android Studio</Label>
              </LabelGroup>
            </Card.Content>
          </Card>
        </StyledCardWrapper>
        <StyledCardWrapper>
          <Card>
            <Image src={distractic} wrapped ui={false}/>
            <Card.Content>
              <StyledProjectName>Distractic</StyledProjectName>
              <Card.Meta>
                <span>May 2018</span>
              </Card.Meta>
              <Card.Description>
                An Android application that reduces road accidents caused by distracted driving.
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <StyledLinkButton
                icon='github alternate'
                href="https://github.com/lindaayangg/Distractic"
                target="_blank"
                circular/>
              <StyledLinkButton
                icon='android'
                href=""
                target="_blank"
                circular/>
            </Card.Content>
            <Card.Content extra>
              <LabelGroup>
                <Label>Java</Label>
                <Label>Google ML Kit API</Label>
                <Label>AI</Label>
                <Label>Android Studio</Label>
              </LabelGroup>
            </Card.Content>
          </Card>
        </StyledCardWrapper>
        <StyledCardWrapper>
          <Card>
            <Image src={safeme} wrapped ui={false}/>
            <Card.Content>
              <StyledProjectName>SafeMe</StyledProjectName>
              <Card.Meta>
                <span>May 2018</span>
              </Card.Meta>
              <Card.Description>
                A web application that provides women a better and safer way to plan their trips at night.
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <StyledLinkButton
                icon='github alternate'
                href="https://github.com/lindaayangg/SafeMe"
                target="_blank"
                circular/>
              <StyledLinkButton
                icon='window maximize outline'
                href=""
                target="_blank"
                circular/>
            </Card.Content>
            <Card.Content extra>
              <LabelGroup>
                <Label>MongoDB</Label>
                <Label>NodeJS</Label>
                <Label>HTML | CSS (Bootstrap)</Label>
                <Label>HERE Maps API</Label>
                <Label>Google Places</Label>
              </LabelGroup>
            </Card.Content>
          </Card>
        </StyledCardWrapper>
        <StyledCardWrapper>
          <Card>
            <Image src={groshare} wrapped ui={false}/>
            <Card.Content>
              <StyledProjectName>GroShare</StyledProjectName>
              <Card.Meta>
                <span>Mar. 2018</span>
              </Card.Meta>
              <Card.Description>
                A web application that provides a sustainable and communal grocery shopping experience.
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <StyledLinkButton
                icon='github alternate'
                href="https://github.com/davidhqr/GroShare"
                target="_blank"
                circular/>
              <StyledLinkButton
                icon='window maximize outline'
                href=""
                target="_blank"
                circular/>
            </Card.Content>
            <Card.Content extra>
              <LabelGroup>
                <Label>HTML | CSS (Bootstrap)</Label>
                <Label>JavaScript</Label>
                <Label>JQuery</Label>
                <Label>LAMP</Label>
              </LabelGroup>
            </Card.Content>
          </Card>
        </StyledCardWrapper>
      </Carousel>
    )
  }
}

export default ProjectCarousel;