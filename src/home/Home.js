import React, {Component} from 'react';
import StickySidebar from "../components/StickySidebar/StickySidebar";
import About from "../sections/About/About";
import Knowledge from "../sections/Knowledge/Knowledge";
import Experience from "../sections/Experience/Experience";
import Projects from "../sections/Projects/Project";
import {Responsive} from "semantic-ui-react";
import Navbar from "../components/Narbar/Navbar";
import CopyRight from "../sections/CopyRight/CopyRight";
import Particles from "react-particles-js";
import profile from "../res/images/profile.jpg";
import strings from "../res/strings";
import Typical from "react-typical";
import {
  StyledArticle,
  StyledContentWrapper,
  StyledEnterButton,
  StyledHeader,
  StyledImage,
  StyledLandingWrapper
} from "./styles";

class Home extends Component {
  state = {
    enter: false,
  };

  handleExploreOnClick = () => {
    this.setState({
      enter: true
    })
  };

  renderLanding = () => {
    return (
      <StyledLandingWrapper>
        <Particles
          params={{
            "particles": {
              "number": {
                "value": 160,
                "density": {
                  "enable": false
                }
              },
              "size": {
                "value": 5,
                "random": true,
                "anim": {
                  "speed": 4,
                  "size_min": 0.3
                }
              },
              "line_linked": {
                "enable": false
              },
              "move": {
                "random": true,
                "speed": 1,
                "direction": "top",
                "out_mode": "out"
              }
            },
            "interactivity": {
              "events": {
                "onhover": {
                  "enable": true,
                  "mode": "bubble"
                },
                "onclick": {
                  "enable": true,
                  "mode": "repulse"
                }
              },
              "modes": {
                "bubble": {
                  "distance": 250,
                  "duration": 2,
                  "size": 0,
                  "opacity": 0
                },
                "repulse": {
                  "distance": 400,
                  "duration": 4
                }
              }
            }
          }}
          // params={{
          //   "particles": {
          //     "number": {
          //       "value": 50
          //     },
          //     "size": {
          //       "value": 3
          //     }
          //   },
          //   "interactivity": {
          //     "events": {
          //       "onhover": {
          //         "enable": true,
          //         "mode": "repulse"
          //       }
          //     }
          //   }
          // }}
        />
        <StyledContentWrapper>
          <StyledImage src={profile}/>
          <StyledHeader>
            {strings.landing.whatIAm}
            <Typical
              steps={[
                strings.landing.backend, 1500,
                strings.landing.frontend, 1500,
                strings.landing.web, 1500,
                strings.landing.business, 1500,
                strings.landing.software, 1500,
                strings.landing.pharmacy, 1500
              ]}
              loop={Infinity}
              wrapper="span"
            />
          </StyledHeader>
          <StyledEnterButton
            circular
            onClick={this.handleExploreOnClick}
          >
            {strings.landing.explore}
          </StyledEnterButton>
        </StyledContentWrapper>
      </StyledLandingWrapper>
    )
  };

  render() {
    const {enter} = this.state;
    return (
      <div>
        {enter ?
          <div>
            <Responsive maxWidth={1183}>
              <Navbar/>
            </Responsive>
            <Responsive minWidth={1184}>
              <StickySidebar/>
            </Responsive>
            <StyledArticle>
              <About/>
              <Knowledge/>
              <Experience/>
              <Projects/>
              <Responsive maxWidth={1183}>
                <CopyRight/>
              </Responsive>
            </StyledArticle>
          </div>
          : this.renderLanding()
        }
      </div>
    )
  }
}

export default Home;
