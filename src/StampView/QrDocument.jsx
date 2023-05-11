import React, { useState } from 'react'
import { useEffect } from 'react'
import axios from '../axios/Axios'
import './viewStamp.css'
const QrDocument = () => {
    const [id,setId] = useState('')
    const [adress,setAddress] = useState([])
    let currentUrl;
    useEffect(()=>{
         currentUrl = window.location.href;
        console.log(currentUrl, "url");
        setId(currentUrl.split('/').pop());
      console.log('sdadsad',id)
    },[])

    console.log(currentUrl, "urfsdfl");
    const getStampahainstQr = async()=>{
        try{
            let res = await axios.get(`http://127.0.0.1:200/api/v1/blockchain/getonestamp/${id}`)
        //    console.log(res,'res')
        if(res.data.status === 'success'){
            console.log(res,'res')
            setAddress(res.data.data)
            console.log(adress,'afds')
            const newText = res.data.data.stampDetail;
    const wordToRemove = '<div class="col-md-4">';
    const index = newText.indexOf(wordToRemove);
    let result = newText.substring(0, index + wordToRemove.length);
    console.log(result);
    document.getElementById("view").innerHTML = result;
    // return res.data.data;
    document.getElementById('view').innerHTML = res.data.data.stampDetail
        }
        }
        catch(error){
            console.log(error)
        }
    }
useEffect(()=>{
    getStampahainstQr()
    console.log(getStampahainstQr,'sdfsdfsfdsf')
    console.log('address',adress)
},[id])
const downloadStamp = async () => {
    const stampId = localStorage.getItem("stampid");

    try {
      window.open(
        `http://127.0.0.1:200/api/v1/blockchain/downloadStamp/${id}`,
        "_blank"
      );
      console.log("downloaded");
    } catch (error) {
      console.log("error", error);
    }
  };
console.log(id,'dsada');

  return (
    <>
    <div id='view' className='viewStamp document' ></div>
    <div className="document">
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          marginLeft: "20%",
          paddingTop: "20px",
          marginBottom: "20px",
          width:'50%',
        }}
      >
        <div style={{ display: "flex", flexDirection: "row",justifyContent:'space-evenly',marginBottom:'15px'}}>
          <label style={{fontWeight:'bold',width:'30%'}}>Seller's Signature: </label>
          <input
            // style={{borderBottom:'10px'}}
            className="viewDocumentField"
            // style={{paddingLeft:'50px'}}
            value={adress?.fromAddress}
            readOnly={true}
          />
        </div>

        <div style={{ display: "flex", flexDirection: "row",justifyContent:'space-evenly',marginBottom:'15px' }}>
          <label style={{fontWeight:'bold',width:'30%'}}>Buyer's Signature: </label>
          <input
            // style={{borderBottom:'10px'}}
            className="viewDocumentField"
            value={adress.signatureTo}
            readOnly={true}
          />
        </div>

        <div style={{ display: "flex", flexDirection: "row",justifyContent:'space-evenly',marginBottom:'15px' }}>
          <label style={{fontWeight:'bold',width:'30%'}}>First Witness's Signature: </label>
          <input
            // style={{borderBottom:'10px'}}
            className="viewDocumentField"
            value={adress?.signatureV1}
            readOnly={true}
          />
        </div>

        <div style={{ display: "flex", flexDirection: "row",justifyContent:'space-evenly',marginBottom:'15px' }}>
          <label style={{fontWeight:'bold',width:'30%'}}>Second Witness's Signature: </label>
          <input
            // style={{borderBottom:'10px'}}
            className="viewDocumentField"
            value={adress?.signatureV2}
            readOnly={true}
          />
        </div>

        <div style={{ display: "flex", flexDirection: "row",justifyContent:'space-evenly' }}>
          <label style={{fontWeight:'bold',width:'30%'}}>Lawyer's Signature: </label>
          <input
            // style={{borderBottom:'10px'}}
            className="viewDocumentField"
            value={adress?.signatureLawyer}
            readOnly={true}
          />
        </div>
      </div>
      {/* </div> */}
      <div>
        <button
          onClick={downloadStamp}
          style={{
            marginLeft: "45%",
            borderRadius: "10px",
            backgroundColor: "black",
            color: "white",
            padding: "12px",
            marginBottom: "20px",
            marginTop: "30px",
          }}
        >
          Download
        </button>
        </div>
      </div>
    </>
  )
}

export default QrDocument