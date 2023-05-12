import { TryOutlined } from '@mui/icons-material'
import axios from '../axios/Axios'
import { emailToast, showToastDisplay } from './ToastDisplay'

export const witness1 = async ()=>{
  const id = localStorage.getItem('stampid')
  const publickey = localStorage.getItem('public')
  // const id = "643d6aac3a38ff89892beed1"
  try{
 let res =await axios.get(`/api/v1/stampTrans/v1/${publickey}/${id}`)
 if(res.data.status === 'success'){
  // setReadable(true)
    showToastDisplay();
 }
  }
  catch(error){
    console.log(error)
  }
}

export const witness2 = async ()=>{
  const publickey = localStorage.getItem('public')

  const id = localStorage.getItem('stampid')

    try{
        let res =await axios.get(`/api/v1/stampTrans/v2/${publickey}/${id}`)
        if(res.data.status === 'success'){
          // setReadable(true)
           showToastDisplay();
        }
         }
         catch(error){
           console.log(error)
         }
}

export const emailSender = async (email,setReadable)=>{
  try{
    const stampId = localStorage.getItem('stampIds')
    let res = await axios.post(`/api/v1/users/sendAuthDoc/`,{"id":stampId,"email":email})
    if(res.data.status==='success'){
      setReadable(true)
      emailToast();
    }
  }
  catch(error){
    console.log(error)
  }
}

export const emailCheck = (value)=>{
  if( value.includes('@')){
    emailSender(value)
  }
  else{
    witness1();
  }
  }

  export const emailCheck2 = (value)=>{
    if( value.includes('@')){
      emailSender(value)
    }
    else{
      witness2();
    }
  }