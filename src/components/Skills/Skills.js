import React, {Component} from 'react';
import {GridColumn, List, Segment, Grid} from "semantic-ui-react";
import {
  StyledCheckIcon,
  StyledSkillsIcon,
  StyledSkillsTitleWrapper,
  StyledSkillsWrapper,
  StyledSkillsWrapperContainer,
  StyledSpan
} from "./styles";
import strings from "../../res/strings";

class Skills extends Component {

  render() {
    return (
      <StyledSkillsWrapperContainer>
        <Grid columns={2}>
          <GridColumn computer={8} tablet={8} mobile={16}>
            <Segment raised>
              <StyledSkillsTitleWrapper>
                <StyledSkillsIcon name="code"/>
                <StyledSpan>{strings.skills.frontend}</StyledSpan>
              </StyledSkillsTitleWrapper>
              <StyledSkillsWrapper columns={2}>
                <GridColumn>
                  <List>
                    <List.Item>
                      <StyledCheckIcon name='check circle' size='large'/>
                      <List.Content>ReactJS</List.Content>
                    </List.Item>
                    <List.Item>
                      <StyledCheckIcon name='check circle' size='large'/>
                      <List.Content>Redux</List.Content>
                    </List.Item>
                    <List.Item>
                      <StyledCheckIcon name='check circle' size='large'/>
                      <List.Content>JavaScript</List.Content>
                    </List.Item>
                    <List.Item>
                      <StyledCheckIcon name='check circle' size='large'/>
                      <List.Content>TypeScript</List.Content>
                    </List.Item>
                  </List>
                </GridColumn>
                <GridColumn>
                  <List>
                    <List.Item>
                      <StyledCheckIcon name='check circle' size='large'/>
                      <List.Content>JQuery</List.Content>
                    </List.Item>
                    <List.Item>
                      <StyledCheckIcon name='check circle' size='large'/>
                      <List.Content>HTML | CSS</List.Content>
                    </List.Item>
                    <List.Item>
                      <StyledCheckIcon name='check circle' size='large'/>
                      <List.Content>Magento</List.Content>
                    </List.Item>
                  </List>
                </GridColumn>
              </StyledSkillsWrapper>
            </Segment>
          </GridColumn>

          <GridColumn computer={8} tablet={8} mobile={16}>
            <Segment raised>
              <StyledSkillsTitleWrapper>
                <StyledSkillsIcon name="database"/>
                <StyledSpan>{strings.skills.backend}</StyledSpan>
              </StyledSkillsTitleWrapper>
              <StyledSkillsWrapper columns={2}>
                <GridColumn>
                  <List>
                    <List.Item>
                      <StyledCheckIcon name='check circle' size='large'/>
                      <List.Content>Java 8</List.Content>
                    </List.Item>
                    <List.Item>
                      <StyledCheckIcon name='check circle' size='large'/>
                      <List.Content>Python</List.Content>
                    </List.Item>
                    <List.Item>
                      <StyledCheckIcon name='check circle' size='large'/>
                      <List.Content>C</List.Content>
                    </List.Item>
                    <List.Item>
                      <StyledCheckIcon name='check circle' size='large'/>
                      <List.Content>SQL</List.Content>
                    </List.Item>
                  </List>
                </GridColumn>
                <GridColumn>
                  <List>
                    <List.Item>
                      <StyledCheckIcon name='check circle' size='large'/>
                      <List.Content>Spark</List.Content>
                    </List.Item>
                    <List.Item>
                      <StyledCheckIcon name='check circle' size='large'/>
                      <List.Content>Django</List.Content>
                    </List.Item>
                    <List.Item>
                      <StyledCheckIcon name='check circle' size='large'/>
                      <List.Content>Android</List.Content>
                    </List.Item>
                  </List>
                </GridColumn>
              </StyledSkillsWrapper>
            </Segment>
          </GridColumn>
        </Grid>
      </StyledSkillsWrapperContainer>
    )
  }
}

export default Skills;