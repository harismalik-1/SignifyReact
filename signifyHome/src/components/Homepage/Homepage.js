import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './Homepage.css';

function Homepage() {
  const [sentence, setSentence] = useState("")

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
      </div>
      <div className="side-container">
      <h1>Translation</h1>
        <div>
        <p>Sentence 1</p><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
        </div>
        <button>Retry</button><br />
        <button>Send</button>
      </div>
    </div>
  );
}

export default Homepage;
