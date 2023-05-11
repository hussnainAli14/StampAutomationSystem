import axios from '../axios/Axios'
const mining = ()=>{
    const publickey = localStorage.getItem('public')
    try{
        let res = axios.post(`/api/v1/blockchain/minigTransactions/${publickey}`)
        if(res.data.status === 'successful'){
            return res;
        }
    }
    catch(error){
        console.log(error)
    }
}

export const addTransaction = ()=>{
    try{
    const id = localStorage.getItem('stampid')
let res = axios.post(`/api/v1/blockchain/addTransaction/${id}`);
if(res.data.status === 'success'){
mining();
}
}
catch(error){
    console.log(error);
}
}

