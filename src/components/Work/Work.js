import React, {Component} from 'react';
import {Card, Divider, Grid, Label, Responsive, Segment} from "semantic-ui-react";
import {
  StyledCard, StyledCardWrapper,
  StyledCircleIcon,
  StyledCompanyName,
  StyledCompanyWrapperLeft,
  StyledCompanyWrapperRight,
  StyledImage,
  StyledLeftColumn,
  StyledLeftColumnReversed,
  StyledSegment,
  StyledTitleName,
  StyledToolsLabelGroup,
  StyledWorkExperienceWrapper
} from "./styles";
import skip from '../../res/images/skip.jpg';
import formlabs from '../../res/images/formlabs.png';
import sydneystone from '../../res/images/sydneystone.jpg';
import shoppers from '../../res/images/shoppers.png';
import strings from "../../res/strings";

class Work extends Component {
  render() {
    return (
      <StyledWorkExperienceWrapper>
        <Segment basic>
          <Grid columns={2} relaxed='very'>
            <StyledLeftColumn verticalAlign='middle' mobile={16} tablet={5} computer={8}>
              <StyledImage src={skip}
                           circular/>
              <StyledCompanyWrapperLeft>
                <StyledCompanyName>{strings.work.skip.company}</StyledCompanyName>
                <div>{strings.work.skip.location}</div>
              </StyledCompanyWrapperLeft>
            </StyledLeftColumn>
            <StyledCardWrapper mobile={16} tablet={11} computer={8}>
              <StyledCard>
                <Card.Content>
                  <StyledTitleName>{strings.work.skip.position}</StyledTitleName>
                  <Card.Meta>{strings.work.skip.date}</Card.Meta>
                  <Card.Description>{strings.work.skip.tasks}</Card.Description>
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
                    <Label>HTML | CSS</Label>
                    <Label>Git</Label>
                    <Label>Jenkins</Label>
                  </StyledToolsLabelGroup>
                </Card.Content>
              </StyledCard>
            </StyledCardWrapper>
          </Grid>
          <Responsive {...Responsive.onlyComputer}>
            <Divider vertical><StyledCircleIcon name='dot circle'/></Divider>
          </Responsive>
        </Segment>

        <StyledSegment basic>
          <Grid columns={2} relaxed='very' reversed='computer'>
            <StyledLeftColumnReversed mobile={16} tablet={5} computer={8} verticalAlign='middle'>
              <StyledImage
                src={formlabs}
                circular/>
              <StyledCompanyWrapperRight>
                <StyledCompanyName>{strings.work.formlabs.company}</StyledCompanyName>
                <div>{strings.work.formlabs.location}</div>
              </StyledCompanyWrapperRight>
            </StyledLeftColumnReversed>
            <StyledCardWrapper verticalAlign='middle' mobile={16} tablet={11} computer={8}>
              <StyledCard>
                <Card.Content>
                  <StyledTitleName>{strings.work.formlabs.position}</StyledTitleName>
                  <Card.Meta>{strings.work.formlabs.date}</Card.Meta>
                  <Card.Description>
                    {strings.work.formlabs.tasks}
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
            </StyledCardWrapper>
          </Grid>
          <Responsive {...Responsive.onlyComputer}>
            <Divider vertical><StyledCircleIcon name='dot circle'/></Divider>
          </Responsive>
        </StyledSegment>

        <StyledSegment basic>
          <Grid columns={2} relaxed='very'>
            <StyledLeftColumn verticalAlign='middle' mobile={16} tablet={5} computer={8}>
              <StyledImage src={sydneystone}
                           circular/>
              <StyledCompanyWrapperLeft>
                <StyledCompanyName>{strings.work.sydneystone.company}</StyledCompanyName>
                <div>{strings.work.sydneystone.location}</div>
              </StyledCompanyWrapperLeft>
            </StyledLeftColumn>
            <StyledCardWrapper mobile={16} tablet={11} computer={8}>
              <StyledCard>
                <Card.Content>
                  <StyledTitleName>{strings.work.sydneystone.position}</StyledTitleName>
                  <Card.Meta>{strings.work.sydneystone.date}</Card.Meta>
                  <Card.Description>
                    {strings.work.sydneystone.tasks}
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
            </StyledCardWrapper>
          </Grid>
          <Responsive {...Responsive.onlyComputer}>
            <Divider vertical><StyledCircleIcon name='dot circle'/></Divider>
          </Responsive>
        </StyledSegment>

        <StyledSegment basic>
          <Grid columns={2} relaxed='very' reversed='computer'>
            <StyledLeftColumnReversed mobile={16} tablet={5} computer={8} verticalAlign='middle'>
              <StyledImage src={shoppers} circular/>
              <StyledCompanyWrapperRight>
                <StyledCompanyName>{strings.work.shoppers.company}</StyledCompanyName>
                <div>{strings.work.shoppers.location}</div>
              </StyledCompanyWrapperRight>
            </StyledLeftColumnReversed>
            <StyledCardWrapper verticalAlign='middle' mobile={16} tablet={11} computer={8}>
              <StyledCard>
                <Card.Content>
                  <StyledTitleName>{strings.work.shoppers.position}</StyledTitleName>
                  <Card.Meta>{strings.work.shoppers.date}</Card.Meta>
                  <Card.Description>
                    {strings.work.shoppers.tasks}
                  </Card.Description>
                  <StyledToolsLabelGroup>
                    <Label>HealthWatch</Label>
                    <Label>MMS Software System</Label>
                  </StyledToolsLabelGroup>
                </Card.Content>
              </StyledCard>
            </StyledCardWrapper>
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