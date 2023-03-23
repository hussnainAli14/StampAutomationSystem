import React from 'react'
// import Skeleton, { SkeletonTheme }  from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { ClipLoader } from 'react-spinners'

const Spinner = () => {
  return (
    <ClipLoader 
    size={80}
    color='#36d7b7'
    cssOverride={{marginLeft:'48%', marginTop:'15%'}}
    />
  )
}

export default Spinner