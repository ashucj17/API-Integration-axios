import React from 'react'
import { useParams } from 'react-router-dom'


const SingleProducts = () => {
    const {id}= useParams();
  return (
    <div>
    <h2>SingleProduct - {id}</h2>
    </div>
  )
}

export default SingleProducts