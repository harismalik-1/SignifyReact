import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './Homepage.css';

function Homepage() {
  const [sentence, setSentence] = useState("Hello")

  useEffect(() => {
    const intervalId = setInterval(() => {
      // console.log("Checking .....")
      axios.get('http://100.66.64.140:3000/chatbot/response')
        .then(response => setSentence(response.data))
        .catch(error => console.log(error));      
    }, 500);

    return () => clearInterval(intervalId);
  }, [])

  return (
    <div className="home-screen">
      <div className="camera-container">
        {/* Camera container comes here */}
        <iframe className="vid" title={Math.random()} src="http://100.65.108.182:8000/video"></iframe>
      </div>
      <div className="side-container">
      <h1>Translation</h1>
        <div>
          <p>{sentence}</p>
        </div>
        <div className='buttons'>
          <button className='buttonelement1'>Retry</button>
          <button className='buttonelement2'>Send</button>
        </div>

      </div>
    </div>
  );
}

export default Homepage;
