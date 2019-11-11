import React, {Component} from 'react';
import {StyledHeader, StyledHeaderWrapper} from "../../res/styles";
import {StyledCarouselWrapper, StyledProjectContainer} from "./styles";
import ProjectCarousel from "../../components/ProjectCarousel/ProjectCarousel";

class Projects extends Component {
  render() {
    return (
      <StyledProjectContainer id="projects" name="projects">
        <StyledHeaderWrapper>
          <StyledHeader>
            What I have done
          </StyledHeader>
        </StyledHeaderWrapper>
        <StyledCarouselWrapper>
          <ProjectCarousel/>
        </StyledCarouselWrapper>
      </StyledProjectContainer>
    )
  }
}

export default Projects;