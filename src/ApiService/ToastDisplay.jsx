
import {toast} from 'react-toastify'
export const showToastf= (e)=>{
    e.preventDefault();
    toast('Notification Sent Successfully!',{
      theme:'dark',
      position:"top-center",
    })}
    export const showToastDisplay= ()=>{
      // e.preventDefault(
      toast('Document Signed Successfully!',{
        theme:'dark',
        position:"top-center",
      })}
      export const showToastDisplay1= ()=>{
        // e.preventDefault(
        toast('Document Sent Successfully!' ,{
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          })}

        export const NotificationToast= ()=>{
          // e.preventDefault(
          toast.error('User Not found!Please enter a valid public key',{
            theme:'dark',
            position:"top-center",
          })}
  export const paymentToast = ()=>{
    toast('Payment Recieved Successfully!',{
      theme:'dark',
      position:'top-center'
    })
    setTimeout(() => {
      toast('Your Agreement will be uploaded in almost 2 or 3 hours and you can download it from your document panel',{
        theme:'dark',
        position:'top-center'
      })
    }, 5000);
  }

  export const emailToast= ()=>{
    // e.preventDefault(
    toast('Email Sent Successfully! Check your email',{
      theme:'dark',
      position:"top-center",
    })}

    export const signupSuccess = ()=>{
      toast.success('Signup Successfully', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        })
    }

    export const signuperrorToast = ()=>{
      toast.error('Email Already Registered', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        });
    }

    export const codeToast = ()=>{
      toast.success('Code Sent Successfully', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        })
    }

    export const codeErrorToast = ()=>{
      toast.error('Incorrect Code', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        })
    }

    export const accountVerifyToast = ()=>{
      toast.success('Account Successfully', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        })
    }