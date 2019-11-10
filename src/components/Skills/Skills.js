import React, {Component} from 'react';
import {GridColumn, GridRow, Icon, Label, List} from "semantic-ui-react";
import {StyledCheckIcon, StyledGridContainer, StyledSegmentBox, StyledSkillsWrapper, StyledSpan} from "./styles";
import strings from "../../res/strings";

class Skills extends Component {
  render() {
    return (
      <StyledGridContainer relaxed='very'>
        <GridRow width={5}>
          <StyledSegmentBox raised>
            <Label as='a' color='pink' ribbon>
              <Icon name="code"/>
            </Label>
            <StyledSpan>{strings.skills.frontend}</StyledSpan>
            <StyledSkillsWrapper columns={2}>
              <GridColumn>
                <List>
                  <List.Item>
                    <StyledCheckIcon name='check circle' size='large'/>
                    <List.Content>ReactJs</List.Content>
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
          </StyledSegmentBox>
        </GridRow>

        <GridRow width={5}>
          <StyledSegmentBox raised>
            <Label as='a' color='pink' ribbon>
              <Icon name="database"/>
            </Label>
            <StyledSpan>{strings.skills.backend}</StyledSpan>
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
          </StyledSegmentBox>
        </GridRow>
      </StyledGridContainer>
    )
  }
}

export default Skills;