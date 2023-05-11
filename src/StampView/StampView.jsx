import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import './viewStamp.css'
import { sendResponse } from '../ApiService/NotificationFunction'
import { showToastDisplay, showToastf } from '../ApiService/ToastDisplay'
import { ToastContainer } from 'react-toastify'
const StampView = () => {
    const location = useLocation();
    console.log('view Stamp',location)
useEffect(() => {
  document.getElementById('view').innerHTML = location.state.content
}, [location.state.content])

  return (
    <>
    <div id='view' className='viewStamp'>
       
       
    </div>
    <button className='viewBtn' onClick={(e)=>{
    
      e.preventDefault();
      const data = document.getElementById('view').innerHTML
      showToastDisplay();
      sendResponse(data)
      
    }}>Sign</button>
    <ToastContainer/>
    </>
  )
}

export default StampView