import { useState } from "react";
import ImgArrow from "./assets/arrow.svg";
import ImgFastener from "./assets/fastener.svg";
import ImgInstagram from "./assets/Instagram.png";
import './App.css';


function App() {
  return (
   <>
   <div className="main">
      <div className="header_menu">
        <div className="tabs">
         <p className="tab">Contact Me</p>
        </div>
      </div>
      <div className="header_texts">
         <h1 className="header_text">Let me know if you want to talk about a potential collaboration. I'm available for freelance work.</h1>
         <a className="email" href="mailto:mail@example.com">infoname@mail.com</a>
      </div>
      <div className="form">
         <div className="inputs">
         </div>
         <div className="buttons">
         </div>
      </div>
      
   </div>
   <div className="footer">
   </div>
   </>
  );
}

export default App;
