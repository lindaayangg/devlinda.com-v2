import React, {Component} from 'react';
import {Card, Divider, Grid, Label, Segment} from "semantic-ui-react";
import {
  StyledCard,
  StyledCircleIcon, StyledCompanyName,
  StyledCompanyWrapperLeft,
  StyledCompanyWrapperRight,
  StyledImage,
  StyledLeftColumn,
  StyledSegment,
  StyledToolsLabelGroup,
  StyledWorkExperienceWrapper
} from "./styles";

class Work extends Component {
  render() {
    return (
      <StyledWorkExperienceWrapper>
        <Segment basic>
          <Grid columns={2} relaxed='very'>
            <StyledLeftColumn verticalAlign='middle'>
              <StyledImage src='https://pbs.twimg.com/profile_images/1002593099829346304/kl4SELak_400x400.jpg'
                           circular/>
              <StyledCompanyWrapperLeft>
                <StyledCompanyName>SkipTheDishes</StyledCompanyName>
                <div>Winnipeg, Manitoba</div>
              </StyledCompanyWrapperLeft>
            </StyledLeftColumn>
            <Grid.Column>
              <StyledCard>
                <Card.Content>
                  <Card.Header>Junior Software Developer</Card.Header>
                  <Card.Meta>Sep. 2019 - Present</Card.Meta>
                  <Card.Description>Placeholder for task</Card.Description>
                  <StyledToolsLabelGroup>
                    <Label>Java 8</Label>
                    <Label>ReactJS</Label>
                    <Label>JavaScript</Label>
                    <Label>TypeScript</Label>
                    <Label>Spark</Label>
                    <Label>MySQL</Label>
                    <Label>SQL</Label>
                    <Label>REST API</Label>
                    <Label>HTML | CSS</Label>
                    <Label>Git</Label>
                  </StyledToolsLabelGroup>
                </Card.Content>
              </StyledCard>
            </Grid.Column>
          </Grid>
          <Divider vertical><StyledCircleIcon name='dot circle'/></Divider>
        </Segment>
        <StyledSegment basic>
          <Grid columns={2} relaxed='very'>
            <StyledLeftColumn>
              <StyledCard>
                <Card.Content>
                  <Card.Header>Web Developer</Card.Header>
                  <Card.Meta>Jan. 2019 - Apr. 2019</Card.Meta>
                  <Card.Description>
                    Involved in building the brand new static customer facing website www.formlabs.com with focus on
                    performance and usability.
                  </Card.Description>
                  <StyledToolsLabelGroup>
                    <Label>ReactJS</Label>
                    <Label>D3.js</Label>
                    <Label>Python</Label>
                    <Label>Django</Label>
                    <Label>DjangoCMS</Label>
                    <Label>PostgreSQL</Label>
                    <Label>REST API</Label>
                    <Label>JavaScript</Label>
                    <Label>JQuery</Label>
                    <Label>HTML | CSS | SCSS</Label>
                    <Label>Git</Label>
                  </StyledToolsLabelGroup>
                </Card.Content>
              </StyledCard>
            </StyledLeftColumn>
            <Grid.Column verticalAlign='middle'>
              <StyledImage
                src='https://res-3.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco/v1483638612/ecf5n21df2g2soxbtar0.png'
                circular/>
              <StyledCompanyWrapperRight>
                <StyledCompanyName>Formlabs</StyledCompanyName>
                <div>Boston, Massachusetts</div>
              </StyledCompanyWrapperRight>
            </Grid.Column>
          </Grid>
          <Divider vertical><StyledCircleIcon name='dot circle'/></Divider>
        </StyledSegment>
        <StyledSegment basic>
          <Grid columns={2} relaxed='very'>
            <StyledLeftColumn verticalAlign='middle'>
              <StyledImage src='https://pbs.twimg.com/profile_images/1042862952334782464/uXSQsin3_400x400.jpg'
                           circular/>
              <StyledCompanyWrapperLeft>
                <StyledCompanyName>Sydney Stone</StyledCompanyName>
                <div>Mississauga, Ontario</div>
              </StyledCompanyWrapperLeft>
            </StyledLeftColumn>
            <Grid.Column>
              <StyledCard>
                <Card.Content>
                  <Card.Header>Web Developer, Ecommerce</Card.Header>
                  <Card.Meta>Jun. 2018 - Aug. 2018</Card.Meta>
                  <Card.Description>
                    Responsible for developing a front-end web application on Magento Ecommerce platform.
                  </Card.Description>
                  <StyledToolsLabelGroup>
                    <Label>HTML | CSS</Label>
                    <Label>JavaScript</Label>
                    <Label>JQuery</Label>
                    <Label>Magento</Label>
                    <Label>PHP</Label>
                    <Label>Photoshop</Label>
                  </StyledToolsLabelGroup>
                </Card.Content>
              </StyledCard>
            </Grid.Column>
          </Grid>
          <Divider vertical><StyledCircleIcon name='dot circle'/></Divider>
        </StyledSegment>
        <StyledSegment basic>
          <Grid columns={2} relaxed='very'>
            <StyledLeftColumn>
              <StyledCard>
                <Card.Content>
                  <Card.Header>Pharmacy Technician</Card.Header>
                  <Card.Meta>Oct. 2015 - Aug. 2017</Card.Meta>
                  <Card.Description>
                    Provided professional healthcare and customer service.
                  </Card.Description>
                  <StyledToolsLabelGroup>
                    <Label>HealthWatch</Label>
                    <Label>MMS Software System</Label>
                  </StyledToolsLabelGroup>
                </Card.Content>
              </StyledCard>
            </StyledLeftColumn>
            <Grid.Column verticalAlign='middle'>
              <StyledImage src='https://pbs.twimg.com/profile_images/461236521689808897/7g4YTWrE.png' circular/>
              <StyledCompanyWrapperRight>
                <StyledCompanyName>Shoppers Drug Mart</StyledCompanyName>
                <div>Scarborough, Ontario</div>
              </StyledCompanyWrapperRight>
            </Grid.Column>
          </Grid>
          <Divider vertical><StyledCircleIcon name='dot circle'/></Divider>
        </StyledSegment>
      </StyledWorkExperienceWrapper>
    )
  }
}

export default Work;