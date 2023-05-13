
import axios from '../axios/Axios'
import { NotificationToast, showToastDisplay, showToastDisplay1, showToastf } from './ToastDisplay';
const senderkey = localStorage.getItem('public')
console.log(senderkey)
let newarray;
export const valueSetter = (values,setClick)=>{

    localStorage.setItem('values',JSON.stringify(values))
    setClick(true)
}
// delete notification
const deleteNotification = (id)=>{
try{
 axios.delete(`/api/v1/notification/${id}`);
  console.log('Deleted Successfully')
}
catch(error){
  console.log(error)
}
}

// Send Notifications

export const sendNotification = async(message,recieverkey,details,setReadable)=>{
        console.log('sdad',recieverkey)
    try{
    let res = await axios.post(`/api/v1/notification/`,
    {
      "message":message,
      "sender":senderkey,
      "reciever":recieverkey,   
      "stamp":details,
  })
  if(res.data.status === 'success'){
    showToastDisplay1();
    // NotificationToast();
    setReadable(true)
    console.log(res)
    console.log('API MEssage',res.data.message)
  }
}
catch(error){
    NotificationToast();

  console.log(error)
}
}

//Get Notifications
export const getNotification = async(setNotification)=>{
    try{
    let res = await axios.get(`/api/v1/notification/${senderkey}`)
    console.log('Get Notification',res)
  //  newarray = await res.data.data.notification;

    if(res.data.status === 'success'){
      console.log('Get Notification',res.data.data.notification)
      
    setNotification(res.data.data.notification)
      console.log(res.data.data.notification[res.data.data.notification.length-1].message)
      if(res.data.data.notification[res.data.data.notification.length-1].message == 'Document Signed'){
        const id = res.data.data.trans._id;
      console.log(id)
        localStorage.setItem('stampid',id)
            alert('Signed Successfully' )
             deleteNotification(res.data.data.notification[res.data.data.notification.length-1]._id)
            
      }
      
    }
    }
    catch(error){
      console.log(error)
    }
  }

  //API Response

  export const sendResponse = async(stamp)=>{
    try{
      const writer = localStorage.getItem('public')
    let res = await axios.post(`/api/v1/stampTrans/${writer}`,{"stamp":stamp, "publicKey":senderkey})
    if(res.data.status === 'success'){
      
      console.log('Response',res)
      const id = res.data.data.trans._id;
      sendNotification("Document Signed",writer,id)
      // showToastf();
      deleteNotification(id)
    }
    }
    catch(error){
      console.log(error)
    }
  }

  export const sendNoti1 = async(stamp,setReadable)=>{
    try{
      // const writer = localStorage.getItem('writer')
      console.log('Function mai',senderkey);
      const stampName = localStorage.getItem('AgreementName')
    let res = await axios.post(`/api/v1/stampTrans/`,{
      "stampDetail":stamp, 
      "toPublicKey":"042d2bbde5832f8d9c3525887b0971fc8d85d897efbc8b7f96159f8efcdf3a1ff90aa78fdb6f0fd56cfa3360dec3483f350b15f582d5eb80bc30ad8b9c0f544d3f",
      "fromPublicKey":senderkey,
      "stampName":stampName
    })
    if(res.data.status === 'success'){
      console.log('stamp',stamp)
      // showToastDisplay();
      console.log('Response',res)
      const id = res.data.data.trans._id;
      console.log(id)
      localStorage.setItem('stampid',id)
      sendNotification("Document Signed",senderkey,id)
setReadable(true)
      // showToastf();
      // deleteNotification(id)
    }
    }
    catch(error){
      console.log(error)
    }
  }
  export const array1 = newarray;