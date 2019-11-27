import React, {Component} from 'react';
import {StyledContainer, StyledHeader, StyledHeaderWrapper} from "../../res/styles";
import {StyledCarouselWrapper} from "./styles";
import ProjectCarousel from "../../components/ProjectCarousel/ProjectCarousel";
import strings from "../../res/strings";

class Projects extends Component {
  render() {
    return (
      <StyledContainer id="projects" name="projects">
        <StyledHeaderWrapper>
          <StyledHeader>
            {strings.sections.projects}
          </StyledHeader>
        </StyledHeaderWrapper>
        <StyledCarouselWrapper>
          <ProjectCarousel/>
        </StyledCarouselWrapper>
      </StyledContainer>
    )
  }
}

export default Projects;