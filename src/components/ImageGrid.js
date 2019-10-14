import React, { Component } from "react"
import styled from "styled-components"

const ImageGridWrapper = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(2, auto);
  grid-gap: 15px;
  justify-items: center;
  margin-top: 50px;

  img {
    width: 100%;
    max-width: 600px;
    filter: drop-shadow(5px 5px 5px #222);
  }
`

class ImageGrid extends Component {
  render() {
    const projectImage = this.props.images.publicURL
    return (
      <ImageGridWrapper>
        {projectImage ? <img src={projectImage} alt="" /> : null}
      </ImageGridWrapper>
    )
  }
}

export default ImageGrid
