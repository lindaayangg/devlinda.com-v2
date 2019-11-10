import React, {Component} from 'react';
import {StyledDegree, StyledSchoolName, StyledUniversityIcon, StyledYear} from "./styles";
import {Header, HeaderContent} from "semantic-ui-react";

class Education extends Component {
  render() {
    return (
      <div>
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
      </div>
    )
  }
}

export default Education;