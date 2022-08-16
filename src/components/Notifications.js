import React  from 'react'
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import NotificationItem from './NotificationItem';
import ScrollToTop from './ScrollToTop';


const Notifications = (props) => {
  // useEffect(() => {
  //   document.addEventListener("click", handleClickOutside, true)
  // }, [])
  
  // const refOne = useRef(null);

  // const handleClickOutside = (e)=>{
  //   if(!refOne.current.contains(e.target)){
  //     console.log('clicked outside')
  //     props.setNotificationbar(false)
  //   }
  //   else{
  //     console.log('clicked inside')
  //   }
  // }
  const  notify = [
    {
       number:1,
       desc:"Some quick example text to build on the card title and make up the bulk of the card's content."      
    },
    {
       number:2,
       desc:"Some quick example text to build on the card title and make up the bulk of the card's content."

    },
    {
       number:3,
       desc:"Some quick example text to build on the card title and make up the bulk of the card's content."
    },
    {
       number:4,
       desc:"Some quick example text to build on the card title and make up the bulk of the card's content."
    }
    ,{
      number:5,
      desc:"Some quick example text to build on the card title and make up the bulk of the card's content."
   }
   ]

  return (
    
    <div className=' d-flex justify-content-end me-2'>
    <div className='notificationPanel '>
    <ScrollToTop/>
      <CloseRoundedIcon className='closeIcon mt-1 me-3' onClick={()=>{
          props.setNotificationbar(false)
        }}/>
      
        <h3 className='Notification-heading mt-5 text-center underline '>Notifications</h3> 
        <div className='notificationContent '>
        {notify.map((element)=>{
          return <div className='' key={element.number}>
          <NotificationItem desc={element.desc}  />
          </div>
        })}
        </div>
    </div>
    </div>
  )
}

export default Notifications