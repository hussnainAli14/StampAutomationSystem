import React from 'react'

const NotificationItem = (props) => {
  return (
    <div>
 <p className='Notification-item underline'>{props.desc}</p>
    </div>
  )
}

export default NotificationItem