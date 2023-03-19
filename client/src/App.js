import React, { useState } from 'react';
import './App.css';
import image1 from './clover.png';
import image2 from './logo192.png';
import image3 from './logo192.png';
import image4 from './logo192.png';

function App() {
  const [slide, setSlide] = useState(1);
  const [bgColor, setBgColor] = useState('#354348');

  const handleSlideChange = (newSlide) => {
    setSlide(newSlide);

    if (newSlide === 1) {
      setBgColor('#354348');const [backendData, setBackendData] = useState([{}]);

      useEffect(() => {
        fetch("/api").then(
          response => response.json()
        ).then(
          data => {
            const [backendData, setBackendData] = useState([{}]);
          
            useEffect(() => {
              fetch("/api").then(
                response => response.json()
              ).then(
                data => {
                  setBackendData(data)
                  console.log(data)
                }
              )
            }, []);
            setBackendData(data)
            console.log(data)
          }
        )
      }, []);
    } else if (newSlide === 2) {
      setBgColor('#677289');
    } else if (newSlide === 3) {
      setBgColor('#728581');
    } else if (newSlide === 4) {
      setBgColor('#8b9599');
    }
  };
  /*
    if (newSlide === 1) {
      setBgColor('#007ea7');
    } else if (newSlide === 2) {
      setBgColor('#00c9a7');
    } else if (newSlide === 3) {
      setBgColor('#ff3e41');
    } else if (newSlide === 4) {
      setBgColor('#ffeb7f');
    }
  */

  return (
    <div className="App" style={{ backgroundColor: bgColor }}> {/* MAIN DIV --------------------------------------------------------------------------------*/}

      {/* IMAGE CONTAINER --------------------------------------------------------------------------------*/}
      <div className="image-container">
        <img
          className="image"
          src={image1}
          alt=""
        />
        {/* {slide === 1 ? image1 : slide === 2 ? image2 : slide === 3 ? image3 : image4} */}
        {slide === 1 && (
          <div className="text-container">
            <h1 id="main-text">Recovery</h1>
            <p>Non è mai troppo tardi per prendersi cura di sè.</p>
          </div>
        )}
        {slide === 2 && (
          <div className="text-container">
            <h1 id="main-text">Page2</h1>
            <p>Lorem Ipsum</p>
          </div>
        )}
        {slide === 3 && (
          <div className="text-container">
            <h1 id="main-text">Page3</h1>
            <p>Lorem Ipsum</p>
          </div>
        )}
        {slide === 4 && (
          <div className="text-container">
            <h1 id="main-text">Page4</h1>
            <p>Lorem Ipsum</p>
          </div>
        )}
      </div>

      {/* DOTS CONTAINER and DOTS LAYOUT --------------------------------------------------------------------------------*/}
      <div className="dots-container">
        <div
          className={`dot ${slide === 1 ? 'active' : ''}`}
          onClick={() => handleSlideChange(1)}
        />
        <div
          className={`dot ${slide === 2 ? 'active' : ''}`}
          onClick={() => handleSlideChange(2)}
        />
        <div
          className={`dot ${slide === 3 ? 'active' : ''}`}
          onClick={() => handleSlideChange(3)}
        />
        <div
          className={`dot ${slide === 4 ? 'active' : ''}`}
          onClick={() => handleSlideChange(4)}
        />
      </div>

      {/* ARROW CONTAINER and ARROW POSITIONING --------------------------------------------------------------------------------*/}
      <div className="arrow-container">
        <div
          className="arrow-button left-arrow"
          onClick={() => handleSlideChange(slide > 1 ? slide - 1 : 4)}
        >
          &#60;
        </div>
        <div
          className="arrow-button right-arrow"
          onClick={() => handleSlideChange(slide < 4 ? slide + 1 : 1)}
        >
          &#62;
        </div>
      </div>

    {/* END MAIN DIV ----------------------------------------------------------------------------------------------------------*/}
    </div>
  );
}

export default App;

/*
const [backendData, setBackendData] = useState([{}]);

  useEffect(() => {
    fetch("/api").then(
      response => response.json()
    ).then(
      data => {
        setBackendData(data)
        console.log(data)
      }
    )
  }, []);
*/