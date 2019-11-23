import React, { Component } from "react"
import styled from "styled-components"
import { Link } from "gatsby"

//bringing in media queries from an extrapolated file
import { device } from "../utils/breakpoints"

const AboutWrapper = styled.header`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(3, auto);
  padding: 200px 25px 100px 25px;

  @media ${device.laptop} {
    grid-template-columns: 150px 1fr;

    .introduction {
      grid-column: 2;
    }
  }

  .introduction {
    grid-row: 2;
    padding: 5px;

    .eminem {
      margin: 0;
    }

    h1 {
      margin: 0;
      font-size: 3.5em;
    }

    .secondary_title {
      font-size: 2.5em;
      opacity: 0.8;
    }

    .sub_text {
      max-width: 400px;
    }
  }

  .contactMe {
    margin-top: 50px;
    display: flex;
    width: 100%;

    .getInTouch__button {
      padding: 15px 20px;
      border-radius: 3px;
      border: 2px solid var(--link-color);
      box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);
      margin-right: 30px;

      &:hover,
      &:focus {
        background: rgba(55, 241, 238, 0.2);
      }
    }

    .moreAboutMe__button {
      padding: 15px 20px;
      border-radius: 3px;
      color: var(--primary-text);
      background: rgba(55, 241, 238, 0.6);
      box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);

      &:hover,
      &:focus {
        background: rgba(55, 241, 238, 0.8);
      }
    }
  }
`

class Introduction extends Component {
  render() {
    return (
      <AboutWrapper>
        <div className="introduction">
          <p className="eminem">Hi, my name is</p>
          <h1>Joshua Belknap.</h1>
          <h2 className="secondary_title">
            I like to build things that live on the web.
          </h2>
          <p className="sub_text">
            I'm a Web Developer based in{" "}
            <a
              href="https://www.google.com/maps/place/Columbus,+OH/@39.9829514,-82.990829,11z/data=!4m2!3m1!1s0x883889c1b990de71:0xe43266f8cfb1b533"
              aria-label="Google map of Columbus Ohio"
            >
              Columbus, Ohio.
            </a>{" "}
            I specialize in designing and building websites for fun and profit.
          </p>
          <div className="contactMe">
            <a
              className="getInTouch__button"
              href="mailto:seejoshcode@gmail.com"
              arai-label="mailto link to Joshua's inbox"
            >
              Get in Touch
            </a>
            <Link to="/about" className="moreAboutMe__button">
              About me →
            </Link>
          </div>
        </div>
      </AboutWrapper>
    )
  }
}

export default Introduction
