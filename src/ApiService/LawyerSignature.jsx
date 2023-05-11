import axios from '../axios/Axios'
import { showToastDisplay } from './ToastDisplay'
export const LawyerSign = async(setReadable)=>{
    const id=localStorage.getItem('stampid')
    try{
     let res =await axios.post(`/api/v1/stampTrans/lawyer/042d2bbde5832f8d9c3525887b0971fc8d85d897efbc8b7f96159f8efcdf3a1ff90aa78fdb6f0fd56cfa3360dec3483f350b15f582d5eb80bc30ad8b9c0f544d3f/${id}`)
    if(res.data.status === 'success'){
        setReadable(true)
        showToastDisplay();
    }
    }
    catch(error){
        console.log(error)
    }
}