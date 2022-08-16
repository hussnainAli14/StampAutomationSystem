import React,{useState} from 'react'
import { useReactMediaRecorder } from 'react-media-recorder';
// eslint-disable-next-line
import { ReactMediaRecorder } from "react-media-recorder";
const MediaRecorder = () => {
    // eslint-disable-next-line
    const { status, startRecording, stopRecording, mediaBlobUrl } =
    useReactMediaRecorder({ video: true });
    const [stopped, setstopped] = useState(false)
    const recordingStopped = ()=>{
        stopRecording();
        setstopped(true)
    }
  return (
    <div className='media-recorder'>
        <div className='witness-oath'>
        <h3 className='text-center fw-bold mt-4 text-success'>Start Recording and read the text below</h3>
         <p className='text-center witness-oath-text'> "I declare under the  oath that I have read this argument and I assure that I am participating as a witness with my full will without any pressure. I will be available in any time of need regarding this agreement."</p> 
        </div>
        
        <div className='recording-section'>
    
      
        <div className='d-flex'>
          {/* <p>{status}</p> */}
          <button className='btn rounded-pill bg-primary text-white recording-btn' onClick={startRecording}>Start Recording</button>
          <button className='btn rounded-pill bg-primary text-white ms-2' onClick={recordingStopped}>Stop Recording</button>
          
        </div>
        <div className='recording-screen'>
                 { stopped&&<video className='screen' src={mediaBlobUrl} controls autoPlay loop />}
        </div>
      
    
    </div>
  </div>
  )
}

export default MediaRecorder