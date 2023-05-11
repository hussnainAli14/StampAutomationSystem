import React, {useEffect,useRef} from 'react'
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import NotificationItem from './NotificationItem';
import ScrollToTop from '../ScrollToTop';


const Notifications = (props) => {
  // useEffect(() => {
  //   document.addEventListener("click", handleClickOutside, true)
  //   //eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [])
  
  const refOne = useRef(null);

  // const handleClickOutside = (e)=>{
  //   if(!refOne.current.contains(e.target)){
  //     console.log('clicked outside')
  //     props.setNotificationbar(false)
  //   }
  //   else{
  //     console.log('clicked inside')
  //   }
  // }
  // const  notify = [props.notification];
  return (
    
    <div className=' d-flex justify-content-end me-2'>
    <div className='notificationPanel '>
    <ScrollToTop/>
      <CloseRoundedIcon className='closeIcon mt-1 me-3' ref={refOne} onClick={()=>{
          props.setNotificationbar(false)
        }}/>
      
        <h3 className='Notification-heading mt-5 text-center underline '>Notifications</h3> 
        <div className='notificationContent '>
          {/* {          console.log(notify.length)} */}
        {

          props.notification.length === 0? 
          <NotificationItem desc='No New Notifications'/>:
        props.notification.map((element)=>{
          return <div className='' key={element._id}>
          <NotificationItem desc={element.message} id={element._id} notification={props.notification}  />
          </div>
        })}
        </div>
    </div>
    </div>
  )
}

export default Notifications