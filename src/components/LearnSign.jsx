import { useState, useRef } from "react";
import Webcam from "react-webcam";
import '../css/LearnSign.css';


export const LearnSign = () => {
    const [video, videoToggle] = useState(false);
    const videoRef = useRef(null);
    return (
        <div className='container'>
            <div id='left'>
                <h1>Hand Signs would be shown here</h1>
                <button id='recordBtn' onClick={() => { videoToggle(!video); }}>Click here to start recording</button>
            </div>
            <div id='right' ref={videoRef}>
                {video && <Webcam height={videoRef.current.clientHeight} width={videoRef.current.clientWidth} />}
            </div>
        </div >
    )
}
