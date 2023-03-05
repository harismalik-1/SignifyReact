import React from "react";
import Footer from "./components/Footer/Footer";
import TopNav from "./components/TopNav/TopNav";
import Chatbot from "./components/Charbot/Chatbot";
import Header from "./components/TopNav/TopNav";

function App() {
  return (
    <>
    <Header />
    <div>
        <Chatbot />
      </div>
      <Footer />
      </>
  );
}

export default App;
