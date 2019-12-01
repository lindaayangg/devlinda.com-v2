import React, {Component} from 'react';
import StickySidebar from "../../components/StickySidebar/StickySidebar";
import About from "../About/About";
import Knowledge from "../Knowledge/Knowledge";
import Experience from "../Experience/Experience";
import Projects from "../Projects/Project";
import {Responsive} from "semantic-ui-react";
import Navbar from "../../components/Narbar/Navbar";
import CopyRight from "../CopyRight/CopyRight";
import Particles from "react-particles-js";
import profile from "../../res/images/profile.jpg";
import strings from "../../res/strings";
import Typical from "react-typical";
import {
  StyledArticle,
  StyledContentWrapper,
  StyledEnterButton,
  StyledHeader,
  StyledImage,
  StyledLandingWrapper
} from "./styles";
import Fun from "../Fun/Fun";
import {Sugar} from 'react-preloaders';

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
          height='100vh'
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
          // particles
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
            {strings.landing.intro}
          </StyledHeader>
          <StyledHeader>
            {strings.landing.whatIAm}
            <Typical
              steps={[
                strings.landing.backend, 1500,
                strings.landing.frontend, 1500,
                strings.landing.hackathon, 1500,
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
      <React.Fragment>
        {enter ?
          <div id="home" name="home">
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
              <Fun/>
            </StyledArticle>
            <Responsive maxWidth={1183}>
              <CopyRight/>
            </Responsive>
          </div>
          : this.renderLanding()
        }
        <Sugar
          background="#000"
          color='#fff'
        />
      </React.Fragment>
    )
  }
}

export default Home;
