import axios from '../axios/Axios'

export const getuser = async () => {
  // e.preventDefault();
  const userId = localStorage.getItem('userId')
  let res = await axios.get(`/api/v1/users/${userId}`);
  console.log(res);
  if (res.data.status === "success") {
    // setpublicKey(res.data.data.user.publicKey);
    localStorage.setItem('public',res.data.data.user.publicKey)
    
    // setClicked(true);
    // localStorage.setItem('values',JSON.stringify(formik.values))
   
  }
};

