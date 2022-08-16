import React from 'react'
import { jsPDF } from "jspdf";
import QRCode from "react-qr-code";
const downloadAndQe = () => {
    const pdfGenerator = ()=>{
        const doc = new jsPDF('landscape','px','a4','false');
        doc.save('download.pdf')
    }
  return (
    <div>
         <button className='btn temp-btn-download' onClick={pdfGenerator}>Download</button>
    </div>
  )
}

export default downloadAndQe