import React from 'react'
import { Alert, AlertTitle } from '@mui/material'
const AlertHandler = (props) => {
  return (
   <Alert onClose={() => {}} variant="outlined" severity={props.severity}>
    <AlertTitle>{props.title}</AlertTitle>
  {props.message}
</Alert>
  )
}

export default AlertHandler