import React, {Component} from 'react';
import {StyledContainer, StyledHeader, StyledHeaderWrapper} from "../../res/styles";
import {Card, Divider, Grid, Icon, Segment} from "semantic-ui-react";
import {StyledCircleIcon, StyledExperienceContainer, StyledLeftColumn} from "./styles";

class Experience extends Component {
  render() {
    return (
      <StyledExperienceContainer>
        <StyledHeaderWrapper>
          <StyledHeader>
            Where I have been
          </StyledHeader>
        </StyledHeaderWrapper>
        <Segment basic>
          <Grid columns={2} relaxed='very'>
            <StyledLeftColumn>
              SkipTheDishes | Winnipeg, Manitoba
            </StyledLeftColumn>
            <Grid.Column>
              <Card>
                <Card.Content>
                  <Card.Header>Junior Software Developer</Card.Header>
                  <Card.Meta>Sep. 2019 - Present</Card.Meta>
                  <Card.Description>Placeholder for task</Card.Description>
                </Card.Content>
              </Card>
            </Grid.Column>
          </Grid>
          <Divider vertical><StyledCircleIcon name='dot circle'/></Divider>
        </Segment>
        <Segment basic>
          <Grid columns={2} relaxed='very'>
            <StyledLeftColumn>
              <Card>
                <Card.Content>
                  <Card.Header>Web Developer</Card.Header>
                  <Card.Meta>Jan. 2019 - Apr. 2019</Card.Meta>
                  <Card.Description>Placeholder for task</Card.Description>
                </Card.Content>
              </Card>
            </StyledLeftColumn>
            <Grid.Column>
              Formlabs | Boston, Massachusetts
            </Grid.Column>
          </Grid>
          <Divider vertical><StyledCircleIcon name='dot circle'/></Divider>
        </Segment>
        <Segment basic>
          <Grid columns={2} relaxed='very'>
            <StyledLeftColumn>
              Sydney Stone | Mississauga, Ontario
            </StyledLeftColumn>
            <Grid.Column>
              <Card>
                <Card.Content>
                  <Card.Header>Web Developer, Ecommerce</Card.Header>
                  <Card.Meta>Jun. 2018 - Aug. 2018</Card.Meta>
                  <Card.Description>Placeholder for task</Card.Description>
                </Card.Content>
              </Card>
            </Grid.Column>
          </Grid>
          <Divider vertical><StyledCircleIcon name='dot circle'/></Divider>
        </Segment>
        <Segment basic>
          <Grid columns={2} relaxed='very'>
            <StyledLeftColumn>
              <Card>
                <Card.Content>
                  <Card.Header>Pharmacy Technician</Card.Header>
                  <Card.Meta>Oct. 2015 - Aug. 2017</Card.Meta>
                  <Card.Description>Placeholder for task</Card.Description>
                </Card.Content>
              </Card>
            </StyledLeftColumn>
            <Grid.Column>
              Shoppers Drug Mart | Scarborough, Ontario
            </Grid.Column>
          </Grid>
          <Divider vertical><StyledCircleIcon name='dot circle'/></Divider>
        </Segment>
      </StyledExperienceContainer>
    )
  }
}

export default Experience;