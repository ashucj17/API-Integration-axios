import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'


const SingleProducts = () => {
    const {id}= useParams();
    const navigate = useNavigate()
    const handleBack =()=>{
      navigate('/products/')
    }
  return (
    <div>
    <h2>SingleProduct - {id}</h2>
    <button onClick={handleBack}>Go Back</button>
    </div>
  )
}

export default SingleProducts