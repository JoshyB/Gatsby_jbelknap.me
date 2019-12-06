import React, { Component } from "react"
import styled from "styled-components"

//bringing in media queries from an extrapolated file
// import { device } from "../utils/breakpoints"

//bringing in the fandin on enter animation component that wraps the entire child component

//images used in header
import portrait from "../images/JoshyB.jpg"

const AboutWrapper = styled.section`
  padding: 200px 20px 100px 20px;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(3, auto);
  justify-self: center;
  max-width: 575px;

  > h2 {
    grid-column: 2;
    justify-self: flex-start;
    margin-bottom: 50px;
  }

  .portrait {
    justify-self: center;
    width: 300px;
    text-align: center;
    grid-column: 2;
    margin-bottom: 100px;

    h2 {
      margin: 20px 0 0 0;
    }
    p {
      margin: 0;
    }

    img {
      width: 100%;
      box-shadow: 20px 20px var(--text-shadow-primary),
        30px -30px var(--text-shadow-secondary);
    }
  }

  .about_body {
    width: 100%;
    grid-column: 2;

    ul {
      li {
        list-style: none;
        margin: 5px;
        &:before {
          content: "\\25b6";
          color: var(--link-color);
          margin-right: 10px;
        }
      }
    }
  }
`

class AboutMe extends Component {
  render() {
    return (
      <AboutWrapper>
        <h2>About</h2>
        <div className="portrait">
          <img src={portrait} alt="Headshot of Joshua" />
          <h2>I'm Joshua Belknap.</h2>
          <p>Web Developer | Occasional Designer</p>
        </div>
        <div className="about_body">
          <h2>What I do professionally...</h2>
          <p>
            I'm an independent freelance web developer based in Ohio. I have 4
            years of experience building things on the web, and I typically work
            with front-end technologies such as HTML, CSS, JavaScript and
            React.js but I also do full-stack development on occasion—everything
            from designing to coding to deploying.
          </p>
          <p>Here are a few technolgies I have worked with recently:</p>
          <ul>
            <li>HTML</li>
            <li>CSS & SCSS</li>
            <li>JavaScript (ES6+)</li>
            <li>React.js</li>
            <li>GraphQL</li>
            <li>Express.js</li>
            <li>Node.js</li>
            <li>Version Control (Git)</li>
          </ul>
          <h2>What I do for fun...</h2>
          <p>
            I, of course love to spend time with my family, be it going to
            parks, hiking, or just hanging out at home. I like to travel as
            often as I possibly can. I really enjoy seeing new places and having
            new experiences. I also very much enjoy cooking. I like trying out
            new recipes or just experimenting and coming up with my own. I like
            to code things. Before I started doing this to make money, I built
            things just for fun, and I still do.
          </p>
        </div>
      </AboutWrapper>
    )
  }
}

export default AboutMe
