import React from 'react'
import SumbImg from '../../assets/images/thankyou-foodie.jpg'
import { Link } from 'react-router-dom'

export default function Submission() {
  return <>
  <div className="row align-items-center d-flex justify-content-center">
  <div className=' w-75 '>
  
    <img src={SumbImg} className='w-100 align-items-center d-flex justify-content-center' alt="SumbImg"/>
    </div>

    <div className='pt-5 align-items-center d-flex justify-content-center'>
    <Link className="btn btn-warning w-75 " to="/">
              Back To Home
            </Link>
    </div>
  </div>

  </>
}
