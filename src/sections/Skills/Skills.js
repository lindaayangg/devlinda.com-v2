import React, {Component} from 'react';
import {StyledContainer, StyledHeader} from "../../res/styles";
import {Grid, GridColumn, Icon, Label, Segment} from "semantic-ui-react";
import {StyledLabelGroup, StyledSpan} from "./styles";
import strings from "../../res/strings";

class Skills extends Component {
  render() {
    return (
      <StyledContainer>
        <StyledHeader>
          What I know
        </StyledHeader>
        <Grid>
          <GridColumn width={5}>
            <Segment raised>
              <Label as='a' color='pink' ribbon>
                <Icon name="code"/>
              </Label>
              <StyledSpan>{strings.skills.frontend}</StyledSpan>
              <StyledLabelGroup size='large'>
                <Label>ReactJS</Label>
                <Label>Redux</Label>
                <Label>GraphQL</Label>
                <Label>HTML | CSS </Label>
                <Label>JavaScript</Label>
                <Label>TypeScript</Label>
                <Label>JQuery</Label>
                <Label>Django Framework</Label>
              </StyledLabelGroup>
            </Segment>
          </GridColumn>

          <GridColumn width={5}>
            <Segment raised>
              <Label as='a' color='pink' ribbon>
                <Icon name="database"/>
              </Label>
              <StyledSpan>{strings.skills.backend}</StyledSpan>
              <StyledLabelGroup size='large'>
                <Label>Java 8</Label>
                <Label>C</Label>
                <Label>Python</Label>
                <Label>SQL</Label>
                <Label>PostgresQL</Label>
                <Label>MySQL System</Label>
                <Label>Spark Framework</Label>
              </StyledLabelGroup>
            </Segment>
          </GridColumn>

          <GridColumn width={5}>
            <Segment raised>
              <Label as='a' color='pink' ribbon>
                <Icon name="laptop"/>
              </Label>
              <StyledSpan>{strings.skills.others}</StyledSpan>
              <StyledLabelGroup size='large'>
                <Label>Git</Label>
                <Label>Jenkins</Label>
                <Label>Magento</Label>
                <Label>DjangoCMS</Label>
                <Label>Android Studio</Label>
                <Label>Photoshop/Illustrator</Label>
              </StyledLabelGroup>
            </Segment>
          </GridColumn>
        </Grid>
      </StyledContainer>
    )
  }
}

export default Skills;