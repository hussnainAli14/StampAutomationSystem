
import axios from '../axios/Axios'
export const getDocuments = async(setDocuments)=>{
    
    const publickey = localStorage.getItem('public')
    try{
let res = await axios.get(`/api/v1/blockchain/findTransactions/04ebb1dbee333ac5df1e51372f2b89fb5b3bb63b07176c438cbad79ab6e1e87678ad175e07651669d411a37059c549427c30adda183277cc5b94ddf30dd896567b`)
if(res.data.status === 'success'){
setDocuments(res.data.data.stamps)
}
    }
    catch(error){
        console.log(error)
    }
}