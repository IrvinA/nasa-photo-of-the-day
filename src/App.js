import React, { useState, useEffect } from "react";
import axios from 'axios';
import "./App.css";
import Image from './Image';

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
      <header>
        <h1>{image.title}</h1>
      </header>
      <div className="Image-container">
        <button onClick={() => openImage(image.url)}>View Standard Quality</button> 
        <button onClick={() => openImage(image.hdurl)}>View HD Quality</button>
        {<Image image={currentImage}/>}
      </div>
      <div>
        <button onClick={() => closeImage()}>Close Picture</button>
      </div>
      <div className="Description">
        <p>{image.explanation}</p>
      </div>
      <footer>
        <p>{image.date}</p>
      </footer>
    </div>
  );
}

export default App;
