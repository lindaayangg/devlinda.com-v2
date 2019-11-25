import React, {Component} from 'react';
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import {Card, Image, Label, LabelGroup} from "semantic-ui-react";
import {StyledArrows, StyledCardWrapper, StyledProjectName} from "./styles";
import budgetbuddy from '../../res/images/budgetbuddy.png';
import wave from '../../res/images/wave.png';
import groshare from '../../res/images/groshare.png';
import safeme from '../../res/images/safeme.png';
import distractic from '../../res/images/distractic.png'
import {StyledLinkButton} from "./styles";
import strings from "../../res/strings";

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
    const carouselSettings = (width < 1335) ?
      (width < 768) ? {
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
                {strings.projects.wave.title}
              </StyledProjectName>
              <Card.Meta>
                <span>{strings.projects.wave.date}</span>
              </Card.Meta>
              <Card.Description>
                {strings.projects.wave.description}
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
              <StyledProjectName>{strings.projects.budgetbuddy.title}</StyledProjectName>
              <Card.Meta>
                <span>{strings.projects.budgetbuddy.date}</span>
              </Card.Meta>
              <Card.Description>
                {strings.projects.budgetbuddy.description}
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
              <StyledProjectName>{strings.projects.distractic.title}</StyledProjectName>
              <Card.Meta>
                <span>{strings.projects.distractic.date}</span>
              </Card.Meta>
              <Card.Description>
                {strings.projects.distractic.description}
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
              <StyledProjectName>{strings.projects.safeme.title}</StyledProjectName>
              <Card.Meta>
                <span>{strings.projects.safeme.date}</span>
              </Card.Meta>
              <Card.Description>
                {strings.projects.safeme.description}
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
              <StyledProjectName>{strings.projects.groshare.title}</StyledProjectName>
              <Card.Meta>
                <span>{strings.projects.groshare.date}</span>
              </Card.Meta>
              <Card.Description>
                {strings.projects.groshare.description}
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