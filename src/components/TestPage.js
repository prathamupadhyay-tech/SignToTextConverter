import React from "react";
import "../css/TestPage.css";

const TestPage = () => {
  return (
    <>
      <div className="testpage-container">
        <div className="testpage-wrapper">
        <div className="test-elements">
            <div className="test-heading">
            <p>practise sign language here</p>
          <h1>Test Your Sign Speed</h1>
            </div>
         

          <div className="test-real-time-results">
          
            <div className="test-real-time-div test-timer"><p>60</p> <span>Seconds</span> </div>
           
           
            
          
            <div className="test-divs"> <div className=" test-real-time-div words-min">0</div> <p>char/min</p></div>
           
            <div className="test-divs">       <div className="test-real-time-div char-min">0</div> <p>words/min</p></div>
     

            <div className="test-divs">
            <div className="test-real-time-div  test-accuracy">0
            
            </div>
            <p>accuracy</p> 
            </div>
          

          </div>
          <div className="test-input-div">
            <input type="text"  placeholder="Start showing signs"/>
          </div>
        </div>
        </div>
       
      </div>
    </>
  );
};
export default TestPage;
