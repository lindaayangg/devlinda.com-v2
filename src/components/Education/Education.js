import React, {Component} from 'react';
import {StyledDegree, StyledEducationContainer, StyledSchoolName, StyledUniversityIcon, StyledYear} from "./styles";
import {Header, HeaderContent} from "semantic-ui-react";

class Education extends Component {
  render() {
    return (
      <StyledEducationContainer>
        <Header as='h1'>
          <StyledUniversityIcon name='graduation'/>
          <StyledSchoolName>
            UNIVERSITY OF WATERLOO
            <StyledYear>2017 - Present</StyledYear>
          </StyledSchoolName>
        </Header>
        <StyledDegree>
          <HeaderContent>Candidate for Bachelor of Mathematics</HeaderContent>
          <HeaderContent>Computational Mathematics Major</HeaderContent>
        </StyledDegree>
      </StyledEducationContainer>
    )
  }
}

export default Education;