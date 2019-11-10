import React, {Component} from 'react';
import {GridColumn, Icon, Label, List} from "semantic-ui-react";
import {StyledCheckIcon, StyledGridContainer, StyledSegmentBox, StyledSkillsWrapper, StyledSpan} from "./styles";
import strings from "../../res/strings";

class Skills extends Component {
  render() {
    return (
      <StyledGridContainer relaxed='very'>
        <GridColumn width={5}>
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
                    <List.Content>GraphQL</List.Content>
                  </List.Item>
                  <List.Item>
                    <StyledCheckIcon name='check circle' size='large'/>
                    <List.Content>JavaScript</List.Content>
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
                    <List.Content>TypeScript</List.Content>
                  </List.Item>
                  <List.Item>
                    <StyledCheckIcon name='check circle' size='large'/>
                    <List.Content>HTML | CSS</List.Content>
                  </List.Item>
                </List>
              </GridColumn>
            </StyledSkillsWrapper>
          </StyledSegmentBox>
        </GridColumn>

        <GridColumn width={5}>
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
                    <List.Content>PostgresQL</List.Content>
                  </List.Item>
                  <List.Item>
                    <StyledCheckIcon name='check circle' size='large'/>
                    <List.Content>MySQL</List.Content>
                  </List.Item>
                  <List.Item>
                    <StyledCheckIcon name='check circle' size='large'/>
                    <List.Content>Spark</List.Content>
                  </List.Item>
                  <List.Item>
                    <StyledCheckIcon name='check circle' size='large'/>
                    <List.Content>Django</List.Content>
                  </List.Item>
                </List>
              </GridColumn>
            </StyledSkillsWrapper>
            {/*<StyledLabelGroup size='large'>*/}
            {/*  <Label>Java 8</Label>*/}
            {/*  <Label>C</Label>*/}
            {/*  <Label>Python</Label>*/}
            {/*  <Label>SQL</Label>*/}
            {/*  <Label>PostgresQL</Label>*/}
            {/*  <Label>MySQL System</Label>*/}
            {/*  <Label>Spark Framework</Label>*/}
            {/*  <Label>Django Framework</Label>*/}
            {/*</StyledLabelGroup>*/}
          </StyledSegmentBox>
        </GridColumn>

        <GridColumn width={5}>
          <StyledSegmentBox raised>
            <Label as='a' color='pink' ribbon>
              <Icon name="laptop"/>
            </Label>
            <StyledSpan>{strings.skills.others}</StyledSpan>
            <StyledSkillsWrapper columns={2}>
              <GridColumn>
                <List>
                  <List.Item>
                    <StyledCheckIcon name='check circle' size='large'/>
                    <List.Content>Git</List.Content>
                  </List.Item>
                  <List.Item>
                    <StyledCheckIcon name='check circle' size='large'/>
                    <List.Content>Jenkins</List.Content>
                  </List.Item>
                  <List.Item>
                    <StyledCheckIcon name='check circle' size='large'/>
                    <List.Content>Magento</List.Content>
                  </List.Item>
                </List>
              </GridColumn>
              <GridColumn>
                <List>
                  <List.Item>
                    <StyledCheckIcon name='check circle' size='large'/>
                    <List.Content>Android Studio</List.Content>
                  </List.Item>
                  <List.Item>
                    <StyledCheckIcon name='check circle' size='large'/>
                    <List.Content>PhotoShop</List.Content>
                  </List.Item>
                  <List.Item>
                    <StyledCheckIcon name='check circle' size='large'/>
                    <List.Content>DjangoCMS</List.Content>
                  </List.Item>
                </List>
              </GridColumn>
            </StyledSkillsWrapper>
          </StyledSegmentBox>
        </GridColumn>
      </StyledGridContainer>
    )
  }
}

export default Skills;