import React, {Component} from 'react';
import {Card, Divider, Grid, Label, Responsive, Segment} from "semantic-ui-react";
import {
  StyledCard,
  StyledCircleIcon, StyledCompanyName,
  StyledCompanyWrapperLeft,
  StyledCompanyWrapperRight,
  StyledImage,
  StyledLeftColumn, StyledLeftColumnReversed,
  StyledSegment, StyledTitleName,
  StyledToolsLabelGroup,
  StyledWorkExperienceWrapper
} from "./styles";

class Work extends Component {
  render() {
    return (
      <StyledWorkExperienceWrapper>
        <Segment basic>
          <Grid columns={2} relaxed='very'>
            <StyledLeftColumn verticalAlign='middle' mobile={16} tablet={5} computer={8}>
              <StyledImage src='https://pbs.twimg.com/profile_images/1002593099829346304/kl4SELak_400x400.jpg'
                           circular/>
              <StyledCompanyWrapperLeft>
                <StyledCompanyName>SkipTheDishes</StyledCompanyName>
                <div>Winnipeg, Manitoba</div>
              </StyledCompanyWrapperLeft>
            </StyledLeftColumn>
            <Grid.Column mobile={16} tablet={11} computer={8}>
              <StyledCard>
                <Card.Content>
                  <StyledTitleName>Junior Software Developer | Internship</StyledTitleName>
                  <Card.Meta>Sep. 2019 - Present</Card.Meta>
                  <Card.Description>Placeholder for task</Card.Description>
                  <StyledToolsLabelGroup>
                    <Label>Java 8</Label>
                    <Label>ReactJS</Label>
                    <Label>Redux</Label>
                    <Label>JavaScript</Label>
                    <Label>TypeScript</Label>
                    <Label>Spark Framework</Label>
                    <Label>MySQL</Label>
                    <Label>SQL</Label>
                    <Label>REST API</Label>
                    <Label>Jooq</Label>
                    <Label>Memcached</Label>
                    <Label>ElasticSearch</Label>
                    <Label>Graphite</Label>
                    <Label>Quartz</Label>
                    <Label>AutoValue</Label>
                    <Label>HTML | CSS</Label>
                    <Label>Git</Label>
                    <Label>Jenkins</Label>
                    <Label>Papertrail</Label>
                    <Label>Jest & Enzyme</Label>
                  </StyledToolsLabelGroup>
                </Card.Content>
              </StyledCard>
            </Grid.Column>
          </Grid>
          <Responsive {...Responsive.onlyComputer}>
            <Divider vertical><StyledCircleIcon name='dot circle'/></Divider>
          </Responsive>
        </Segment>

        <StyledSegment basic>
          <Grid columns={2} relaxed='very' reversed='computer'>
            <StyledLeftColumnReversed mobile={16} tablet={5} computer={8} verticalAlign='middle'>
              <StyledImage
                src='https://res-3.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco/v1483638612/ecf5n21df2g2soxbtar0.png'
                circular/>
              <StyledCompanyWrapperRight>
                <StyledCompanyName>Formlabs</StyledCompanyName>
                <div>Boston, Massachusetts</div>
              </StyledCompanyWrapperRight>
            </StyledLeftColumnReversed>
            <Grid.Column verticalAlign='middle' mobile={16} tablet={11}  computer={8}>
              <StyledCard>
                <Card.Content>
                  <StyledTitleName>Web Developer | Internship</StyledTitleName>
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
                    <Label>GraphQL</Label>
                    <Label>HTML | CSS | SCSS</Label>
                    <Label>Git</Label>
                  </StyledToolsLabelGroup>
                </Card.Content>
              </StyledCard>
            </Grid.Column>
          </Grid>
          <Responsive {...Responsive.onlyComputer}>
            <Divider vertical><StyledCircleIcon name='dot circle'/></Divider>
          </Responsive>
        </StyledSegment>

        <StyledSegment basic>
          <Grid columns={2} relaxed='very'>
            <StyledLeftColumn verticalAlign='middle' mobile={16} tablet={5} computer={8}>
              <StyledImage src='https://pbs.twimg.com/profile_images/1042862952334782464/uXSQsin3_400x400.jpg'
                           circular/>
              <StyledCompanyWrapperLeft>
                <StyledCompanyName>Sydney Stone</StyledCompanyName>
                <div>Mississauga, Ontario</div>
              </StyledCompanyWrapperLeft>
            </StyledLeftColumn>
            <Grid.Column mobile={16} tablet={11} computer={8}>
              <StyledCard>
                <Card.Content>
                  <StyledTitleName>Ecommerce Web Developer | Internship</StyledTitleName>
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
          <Responsive {...Responsive.onlyComputer}>
            <Divider vertical><StyledCircleIcon name='dot circle'/></Divider>
          </Responsive>
        </StyledSegment>

        <StyledSegment basic>
          <Grid columns={2} relaxed='very' reversed='computer'>
            <StyledLeftColumnReversed mobile={16} tablet={5} computer={8} verticalAlign='middle'>
              <StyledImage src='https://pbs.twimg.com/profile_images/461236521689808897/7g4YTWrE.png' circular/>
              <StyledCompanyWrapperRight>
                <StyledCompanyName>Shoppers Drug Mart</StyledCompanyName>
                <div>Scarborough, Ontario</div>
              </StyledCompanyWrapperRight>
            </StyledLeftColumnReversed>
            <Grid.Column verticalAlign='middle' mobile={16} tablet={11} computer={8}>
              <StyledCard>
                <Card.Content>
                  <StyledTitleName>Pharmacy Technician</StyledTitleName>
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
            </Grid.Column>
          </Grid>
          <Responsive {...Responsive.onlyComputer}>
            <Divider vertical><StyledCircleIcon name='dot circle'/></Divider>
          </Responsive>
        </StyledSegment>
      </StyledWorkExperienceWrapper>
    )
  }
}

export default Work;