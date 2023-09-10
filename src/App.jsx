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
            <div className="group">      
               <input type="text" required/>
               <span className="highlight"></span>
               <span className="bar"></span>
               <label className="label_input">What’s your name?</label>
            </div>
            <div className="group">      
               <input type="text" required />
               <span className="highlight"></span>
               <span className="bar"></span>
               <label className="label_input">Your email</label>
            </div>
            <div className="group">      
               <input type="text" required />
               <span className="highlight"></span>
               <span className="bar"></span>
               <label className="label_input">Tell me about your project</label>
            </div>
         </div>
         <div className="buttons">
            <button className="button_send">Get a Quote</button>
            <div className="image_upload">
               <label className="file_label" htmlFor="file_input">
                  <img src={ImgFastener}/>
                  <img src={ImgArrow}/>
               </label>
               <input id="file_input" type="file"/>
            </div>
         </div>
      </div>
   </div>
   <div className="footer">
      <h1 className="footer_text">Let’s be Friends</h1>
      <div className="footer_logos">
         <a className="footer_logo" href="http://www.instagram.com/creator_it_academy/"><img  src={ImgInstagram}/></a>
         <a className="footer_logo" href="http://www.instagram.com/creator_it_academy/"><img  src={ImgInstagram}/></a>
         <a className="footer_logo" href="http://www.instagram.com/creator_it_academy/"><img  src={ImgInstagram}/></a>
      </div>
   </div>
   </>
  );
}

export default App;
