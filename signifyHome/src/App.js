import React, {useState, useEffect} from "react";
import Footer from "./components/Footer/Footer";
import Homepage from "./components/Homepage/Homepage";
import TopNav from "./components/TopNav/TopNav";
import axios from 'axios';

function App() {
  const [status, setStatus] = useState(0)
  const [data, setData] = useState()

  useEffect(() => {
    const intervalId = setInterval(() => {
      // console.log("Checking .....")
      axios.get('http://100.66.64.140:3000/getresponse')
        .then(response => {
          console.log(data)
          if (response.data !== "" || response.data != null) {
            setData(data)
            setStatus(1)
          }
        })
        .catch(error => console.log(error));  
        
      axios.get('http://100.66.64.140:3000/reset')
        .then(response => {
          console.log(response)
          if (response.data == true) {
            setStatus(0)
          }
        })
        .catch(error => console.log(error));  
    }, 500);

    return () => clearInterval(intervalId);
  }, [])

  return (
    <>
      <TopNav />
      {status === 0 && <Homepage />}
      {status === 1 && data}
      <Footer />
    </>
  );
}

export default App;
