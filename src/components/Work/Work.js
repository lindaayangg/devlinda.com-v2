import React, {Component} from 'react';
import {Card, Divider, Grid, Responsive, Segment} from "semantic-ui-react";
import {
  StyledCard,
  StyledCardWrapper,
  StyledCircleIcon,
  StyledCompanyName,
  StyledCompanyWrapperLeft,
  StyledCompanyWrapperRight,
  StyledImage,
  StyledLeftColumn,
  StyledLeftColumnReversed,
  StyledSegment,
  StyledTitleName,
  StyledTools,
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
                    <StyledTools>Java 8</StyledTools>
                    <StyledTools>ReactJS</StyledTools>
                    <StyledTools>Redux</StyledTools>
                    <StyledTools>JavaScript</StyledTools>
                    <StyledTools>TypeScript</StyledTools>
                    <StyledTools>Spark Framework</StyledTools>
                    <StyledTools>MySQL</StyledTools>
                    <StyledTools>PostgreSQL</StyledTools>
                    <StyledTools>REST API</StyledTools>
                    <StyledTools>Jooq</StyledTools>
                    <StyledTools>Memcached</StyledTools>
                    <StyledTools>Redis</StyledTools>
                    <StyledTools>ElasticSearch</StyledTools>
                    <StyledTools>Graphite</StyledTools>
                    <StyledTools>Amazon SQS</StyledTools>
                    <StyledTools>HTML | CSS</StyledTools>
                    <StyledTools>Git</StyledTools>
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
                    <StyledTools>ReactJS</StyledTools>
                    <StyledTools>D3.js</StyledTools>
                    <StyledTools>Python</StyledTools>
                    <StyledTools>Django</StyledTools>
                    <StyledTools>DjangoCMS</StyledTools>
                    <StyledTools>PostgreSQL</StyledTools>
                    <StyledTools>REST API</StyledTools>
                    <StyledTools>JavaScript</StyledTools>
                    <StyledTools>JQuery</StyledTools>
                    <StyledTools>GraphQL</StyledTools>
                    <StyledTools>HTML | CSS | SCSS</StyledTools>
                    <StyledTools>Git</StyledTools>
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
                    <StyledTools>HTML | CSS</StyledTools>
                    <StyledTools>JavaScript</StyledTools>
                    <StyledTools>JQuery</StyledTools>
                    <StyledTools>Magento</StyledTools>
                    <StyledTools>PHP</StyledTools>
                    <StyledTools>Photoshop</StyledTools>
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
                    <StyledTools>HealthWatch</StyledTools>
                    <StyledTools>MMS Software System</StyledTools>
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