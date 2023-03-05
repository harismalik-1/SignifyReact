import React, {useState, useEffect} from "react";
import Footer from "./components/Footer/Footer";
import Homepage from "./components/Homepage/Homepage";
import Recieved from "./components/Homepage/Recieved";

import TopNav from "./components/TopNav/TopNav";
import axios from 'axios';
import './static/style.css'
import LandingPage from "./components/LandingPage/LandingPage";
function App() {
  const [status, setStatus] = useState(0)
  const [data, setData] = useState()
  const [html, setHtml] = useState('')

  useEffect(() => {
    const intervalId = setInterval(() => {
      // console.log("Checking .....")
      fetch('http://100.66.64.140:8000/getresponse')
      .then(response => response.text())
      .then(html => {
        if (html !== undefined) {
          setHtml(html);

        }
      });
      
      // axios.get('http://100.65.108.182:8000/getresponse')
      //   .then(response => {
      //     console.log(data)
      //     if (response.data !== "" || response.data != undefined) {
      //       setData(data)
      //       setStatus(1)
      //     }
      //   })
      //   .catch(error => console.log(error));  
        
      axios.get('http://100.66.64.140:3000/getstatus')
        .then(response => {
          console.log(response)
          setStatus(response.data)
        })
        .catch(error => console.log(error));  
    }, 1000);

    return () => clearInterval(intervalId);
  }, [])

  return (
    <>
    
      <TopNav />
      {status === 0 && <Homepage />}
      {status === 1 && <Recieved html={html}/>} 
      {/* /* <Recieved html={html}/> */}


      <Footer />
    </>
  );
}

export default App;
