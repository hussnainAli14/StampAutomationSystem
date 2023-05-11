import React from "react";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./viewStamp.css";

const ViewDocuments = () => {
  const location = useLocation();
  const navigate = useNavigate();
  console.log("location", location.state.content);
  console.log("id", location.state.id);

  useEffect(() => {
    // document.querySelector('div').innerHTML = location.state
  console.log("id", location.state.id);

    const currentUrl = window.location.href;
    console.log(currentUrl, "url");
    const newText = location.state.content;
    console.log('saddsa',location.state.content)
    // const wordToRemove = '<div class="col-md-4">';
    // const index = newText.indexOf(wordToRemove);
    // let result = newText.substring(0, index + wordToRemove.length);
    // console.log(result);
    document.getElementById("view").innerHTML = newText;
    console.log("transaction", location.state.transaction);
    
  }, []);
  const downloadStamp = async () => {
    const stampId = localStorage.getItem("stampid");

    try {
      window.open(
        `http://127.0.0.1:200/api/v1/blockchain/downloadStamp/${location.state.id}`,
        "_blank"
      );
      console.log("downloaded");
    } catch (error) {
      console.log("error", error);
    }
  };
  return (
    <>
      <div id="view" className="viewStamp document">
      </div>
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
            value={location.state.transaction.transaction.fromAddress}
            readOnly={true}
          />
        </div>

        <div style={{ display: "flex", flexDirection: "row",justifyContent:'space-evenly',marginBottom:'15px' }}>
          <label style={{fontWeight:'bold',width:'30%'}}>Buyer's Signature: </label>
          <input
            // style={{borderBottom:'10px'}}
            className="viewDocumentField"
            value={location.state.transaction.transaction.signatureTo}
            readOnly={true}
          />
        </div>

        <div style={{ display: "flex", flexDirection: "row",justifyContent:'space-evenly',marginBottom:'15px' }}>
          <label style={{fontWeight:'bold',width:'30%'}}>First Witness's Signature: </label>
          <input
            // style={{borderBottom:'10px'}}
            className="viewDocumentField"
            value={location.state.transaction.transaction.signatureV1}
            readOnly={true}
          />
        </div>

        <div style={{ display: "flex", flexDirection: "row",justifyContent:'space-evenly',marginBottom:'15px' }}>
          <label style={{fontWeight:'bold',width:'30%'}}>Second Witness's Signature: </label>
          <input
            // style={{borderBottom:'10px'}}
            className="viewDocumentField"
            value={location.state.transaction.transaction.signatureV2}
            readOnly={true}
          />
        </div>

        <div style={{ display: "flex", flexDirection: "row",justifyContent:'space-evenly' }}>
          <label style={{fontWeight:'bold',width:'30%'}}>Lawyer's Signature: </label>
          <input
            // style={{borderBottom:'10px'}}
            className="viewDocumentField"
            value={location.state.transaction.transaction.signatureLawyer}
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
      {/* <button>Testing</button> */}
    </>
    // <div>
    //     {location.state}
    //     </div>
  );
};

export default ViewDocuments;
