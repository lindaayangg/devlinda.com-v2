import React, {Component} from 'react';
import {StyledDegree, StyledSchoolName, StyledUniversityIcon, StyledYear} from "./styles";
import {Header, HeaderContent} from "semantic-ui-react";
import strings from "../../res/strings";

class Education extends Component {
  render() {
    return (
      <div>
        <Header as='h1'>
          <StyledUniversityIcon name='graduation'/>
          <StyledSchoolName>
            {strings.education.school}
            <StyledYear>{strings.education.date}</StyledYear>
          </StyledSchoolName>
        </Header>
        <StyledDegree>
          <HeaderContent>
            {strings.education.degree}
          </HeaderContent>
          <HeaderContent>
            {strings.education.major}
          </HeaderContent>
        </StyledDegree>
      </div>
    )
  }
}

export default Education;