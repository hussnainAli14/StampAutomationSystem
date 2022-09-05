import React,{useState} from 'react'
import * as yup from 'yup';
import { Formik } from 'formik';
const PersonAddress = () => {
    const [pressed, setpressed] = useState(false)
    const [Checked, setChecked] = useState(false)
    const [CheckedBuyer, setCheckedBuyer] = useState(false)
    const [value, setvalue] = useState()
    const validate = yup.object({
      Name: yup.string().required('Required'),
      FatherName: yup.string().required('Required'),
      CnicNo: yup.string().required('Required'),
      desc: yup.string().required('Required'),
      issueDate: yup.string().required('Required'),
      StampDuty: yup.string().required('Required'),
      ChallanNo: yup.string().required('Required'),
      Amount: yup.string().required('Required'),

  })
  return (
    <Formik
            initialValues={{
                accountName: '',
                BuyerKey: '',
                sellerWitnessAccName: '',
                sellerWitnessKey: '',
                sellerWitnessEmail: '',
                buyerWitnessAccName: '',
                buyerWitnessKey: '',
                buyerWitnessEmail: ''
            }}
            validate={values => {
                const errors = {};
                if (!values.CnicNo) {
                    errors.Cni = 'Required';
                } else if (
                    !/^[0-9]{5}-[0-9]{7}-[0-9]$/i.test(values.CnicNo)
                ) {
                    errors.CnicNo = 'Invalid Cnic No.';
                }
                if (!values.issueDate) {
                    errors.issueDate = 'Required'
                }
                else if (
                    !/^(((0[1-9]|[12]\d|3[01])\/(0[13578]|1[02])\/((19|[2-9]\d)\d{2}))|((0[1-9]|[12]\d|30)\/(0[13456789]|1[012])\/((19|[2-9]\d)\d{2}))|((0[1-9]|1\d|2[0-8])\/02\/((19|[2-9]\d)\d{2}))|(29\/02\/((1[6-9]|[2-9]\d)(0[48]|[2468][048]|[13579][26])|((16|[2468][048]|[3579][26])00))))$/i.test(values.issueDate)
                ) {
                    errors.issueDate = 'Invalid Date Format';
                }
                return errors;
            }}
            validationSchema={validate}

        >
            {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,

            }) => (
                <div className='AddressBg'>
    <div className='personAddress'> 
         <section className='personAddressContent'>
            <h2 className='mb-5 text-center mt-5 fw-bold' id='h2'>Add Buyer's Information</h2>
            <label className='fw-bold ms-5 mb-3'>Buyer's Account Name:</label>
            <input name='accountName' className='mb-3 tempInputs bg-white' id='AddressInput' type='text'/><br/>
            <label className='fw-bold mb-3 ms-5'>Buyer's Public Key:</label>
            <input name='BuyerKey' className='mb-5 tempInputs bg-white' id='AddressInput1' type='text'/>
         
            {!pressed?<button className='btn address-btn mb-5' onClick={()=>{setpressed(true) }} >Send</button>:<button className='btn address-btn mb-5 disabled' >Send</button>}
         </section>
        { pressed && <section className='personAddressContent' id='personAddressMagrin'>
            <div><h2 className='mb-5 text-center mt-5 fw-bold'>Add Witness's Information</h2>
            <label className='fw-bold mb-3 ms-5'>Seller's Witness Account Name:</label>
            <input name='sellerWitnessAccName' className='tempInputs bg-white' id='AddressInput3' value={!Checked?values.sellerWitnessAccName:value} type='text'/><br/>
            <label className='fw-bold mb-3 ms-5'>Seller's Witness Public Key:</label>
            <input name='sellerWitnessKey' className='mx-5 tempInputs bg-white' id='AddressInput3' value={!Checked?values.sellerWitnessKey:value} type='text'/><br/>
            </div>
            <input class="form-check-input ms-5" type="checkbox" value="" id="flexCheckDefault" onClick={()=>{setChecked(true); setvalue('')}}/>
            
  <label className="form-check-label fw-bold mb-3 mt-1 mx-2" for="flexCheckDefault">
    Seller's Witness Email:
  </label>
  <input name='sellerWitnessEmail' className='ms-5 mb-5 pe-1 tempInputs bg-white' id='AddressInput3' type='text'/>
            <label className='fw-bold mb-3 ms-5'>Buyer's Witness Account Name:</label>
            <input name='buyerWitnessAccName' className='tempInputs bg-white' id='AddressInput3' value={!CheckedBuyer?values.buyerWitnessAccName:value} onChange={handleChange} type='text'/><br/>
            <label className='fw-bold mb-3 ms-5'>Buyer's Witnees Public Key:</label>
            <input name='buyerWitnessKey' className='mx-5 tempInputs bg-white' id='AddressInput3' value={!CheckedBuyer?values.buyerWitnessKey:value} type='text' onChange={handleChange}/><br/>
            <input class="form-check-input ms-5" type="checkbox" value="" id="flexCheckDefault" onClick={()=>setCheckedBuyer(true)}/>
            
  <label className="form-check-label fw-bold mb-3 mt-1 mx-2" for="flexCheckDefault">
    Buyer's Witness Email:
  </label>
  <input name='sellerWitnessEmail' className='mx-5 mb-5 tempInputs bg-white' id='AddressInput3' type='text'/>
            <button className='btn address-btn mb-5' >Send</button>
         </section>}
    </div>
    </div>
    )}
    </Formik>
  )
}

export default PersonAddress