import React from 'react'
import { useNavigate } from 'react-router-dom'

const NotificationItem = (props) => {
  
  const navigate = useNavigate();
  let newarray
  const showNotificationDocument=(a)=>{
    console.log(props.notification)
    
    newarray = props.notification.filter((i)=>i._id===a.target.value)
    localStorage.setItem('writer',newarray[0].sender)
    console.log(newarray)
    
  }
  return (
    <> 
    <div>
 <p className='Notification-item underline' ><button value={props.id} onClick={(e)=>{
   showNotificationDocument(e)
   navigate('/viewStamp',{state:{content:newarray[0].stamp}})
 }}>{props.desc}</button>         
 </p>
    </div>
    
    </>
  )
}

export default NotificationItem 