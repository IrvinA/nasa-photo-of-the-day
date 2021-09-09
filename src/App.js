import React, { useState, useEffect } from "react";
import axios from 'axios';
import "./App.css";
import Image from './Image';
// import { Button } from "reactstrap";
import styled from "styled-components";

const StyledHeader = styled.header`
  
  background-image: linear-gradient(to left, ${pr => pr.theme.secondaryColor}, ${pr => pr.theme.primaryColor});
  margin: 0 3%;
  
  h1 {
    margin: 2% 2% 0 2%;
    padding-top: 2%;
    font-size: 4rem;
    font-weight: 700;
  }

  h2 {
    opacity: 50%;
    color: ${pr => pr.theme.black};
    margin: 0 5%;
    padding: 1% 25% 5%;

  }
`
const StyledImageContainer = styled.div`

  background-image: linear-gradient(to left, ${pr => pr.theme.secondaryColor}, ${pr => pr.theme.primaryColor});
  margin: 0 3%;
  
  h2 {
    opacity: 90%;
    margin: 0 26%;
    padding: 1% 0 .5% 0;
    border-bottom: 3px solid ${pr => pr.theme.black};
  }

  button {
    opacity: 90%;
    margin: 1% 0;
    padding: 1% 5%;
    color: white;
    font-weight: 600;
    letter-spacing: 1px;
    font-size: 1rem;
    border-radius: 10px;
    background-image: linear-gradient(to right, ${pr => pr.theme.secondaryColor}, ${pr => pr.theme.primaryColor});
    &:hover {
      color: black;
      background-image: linear-gradient(to left, ${pr => pr.theme.secondaryColor}, ${pr => pr.theme.primaryColor});
      transition: 2s;
    }
  }
`

const StyledDiv = styled.div`
  
  background-image: linear-gradient(to left, ${pr => pr.theme.secondaryColor}, ${pr => pr.theme.primaryColor});
  margin: 0 3%;

  button {
    opacity: 90%;
    margin: 1% 0;
    padding: 1% 5%;
    color: white;
    font-weight: 600;
    letter-spacing: 1px;
    font-size: 1rem;
    border-radius: 10px;
    background-image: linear-gradient(to right, ${pr => pr.theme.secondaryColor}, ${pr => pr.theme.primaryColor});
    &:hover {
      color: black;
      background-image: linear-gradient(to left, ${pr => pr.theme.secondaryColor}, ${pr => pr.theme.primaryColor});
      transition: 2s;
    }
  }
  
  .Description{
    background-color: ${pr => pr.theme.black};
    border: 2px solid ${pr => pr.theme.black};
    border-radius: 10px;
  }

  p {
    margin: 0 25%;
    color: white;
    padding: 1% 5%;
  }

  h3 {
    opacity: 90%;
    margin: 0 25% 1%;
    padding: .5% 5%;
    border-bottom: 2px solid black;
  }
`

const StyledFooter = styled.footer`
  background-image: linear-gradient(to left, ${pr => pr.theme.secondaryColor}, ${pr => pr.theme.primaryColor});
  margin: 0 3%;

  p {
    margin: 0 0 2% 0;
    color: ${pr => pr.theme.black};
    font-weight: 600;
    font-style: italic;
  }
`

function App() {
  const [image, setImage] = useState([])
  const [currentImage, setCurrentImage] = useState(null);

  useEffect(() => {
    const config = {
      method: 'get',
      url: 'https://api.nasa.gov/planetary/apod?api_key=f38NJsXFhN9sE9Xx26GqMN3nzfbCe2oaSqK7Zfrh',
      headers: {}
    };
    axios(config)
      .then(res => {
        console.log(res);
        setImage(res.data);
      }).catch(err => console.log(err))
  }, [])

  const openImage = url => {
    setCurrentImage(url);
  }
  const closeImage = () => {
    setCurrentImage(null)
  }
 
  
  
  return (
    <div className="App">
      <StyledHeader>
        <h1>NASA's Astronomy Picture of the Day</h1>
        <h2>Every day a new picture of the wonderful mysteries of the depths of space!</h2>
      </StyledHeader>
      <StyledImageContainer className="Image-container">
        <h2>{image.title}</h2>
        <button onClick={() => openImage(image.url)}>View Standard Quality</button> 
        <button onClick={() => openImage(image.hdurl)}>View HD Quality</button>
        {<Image image={currentImage}/>}
      </StyledImageContainer>
      <StyledDiv>
        <button onClick={() => closeImage()}>Close Picture</button>
      </StyledDiv>
      <StyledDiv >
        <h3>This image is:</h3> 
        <p className="Description">{image.explanation}</p>
      </StyledDiv>
      <StyledFooter>
        <p>Image date: {image.date}</p>
      </StyledFooter>
    </div>
  );
}

export default App;
