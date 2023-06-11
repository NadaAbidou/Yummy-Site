import React from 'react'
import {useFormik} from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import Submission from '../Submission/Submission';

 
export default function Contact() {
  let navigate = useNavigate()
  
  let validationSchema = Yup.object({
      name: Yup.string().required('Name is required').min(3, 'Name must be more than 2 characters').max(21, "Name can't be more than 20 characers"),
      email:Yup.string().required('E-mail is required').matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[A-Za-z]{2,4}$/i,'Invalid e-mail address'),
      // email('Invalid e-mail address'),
      age:Yup.number().required('Age is required').min(16, "You must be  at least 16 years old").max(80, "You must be at most 80 years old"),
      password:Yup.string().required('Password is required').matches(/^[A-Z][a-z0-9]{7,}$/, 'Password must start with a Capital letter and at least 8 character'),
      rePassword:Yup.string().required('rePassword is required').oneOf([Yup.ref('password')],'rePassword does not match'),
      phone:Yup.string().required('Phone is required').matches(/^01[0125][0-9]{8}$/, 'Invalid Phone number'),
    }
  )
  let formik = useFormik({
    initialValues:{
      name:'',
      age:'',
      phone:'',
      email:'',
      password:'',
      rePassword:'',
    },
    validationSchema,
    onSubmit: checker,
  })

  function checker() {

    {formik.values ? navigate ('/submission') :''}
    console.log(formik.values);
  }


  return <>
  <form onSubmit={formik.handleSubmit}>
        <div className="row g-3 justify-content-center py-5">
          <div className="col-md-6">
            <input type="text" className="form-control" placeholder="Enter Your Name" onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.name}
              name="name"
              id="name"
            />
            {formik.errors.name && formik.touched.name ? (
              <div className="alert alert-danger my-2 py-1">
                {formik.errors.name}
              </div>
            ) : (
              ""
            )}
          </div>
          <div className="col-md-6">
            <input
              type="email"
              className="form-control"
              placeholder="Enter Your Email"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.email}
              name="email"
              id="email"
            />
            {formik.errors.email && formik.touched.email ? (
              <div className="alert alert-danger my-2 py-1">
                {formik.errors.email}
              </div>
            ) : (
              ""
            )}
          </div>
          <div className="col-md-6">
            <input
              type="tel"
              className="form-control"
              placeholder="Enter Your Phone"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.phone}
              name="phone"
              id="phone"
            />
            {formik.errors.phone && formik.touched.phone ? (
              <div className="alert alert-danger my-2 py-1">
                {formik.errors.phone}
              </div>
            ) : (
              ""
            )}
          </div>
          <div className="col-md-6">
            <input
              type="text"
              inputMode="numeric"
              className="form-control"
              placeholder="Enter your Age"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.age}
              name="age"
              id="age"
            />
            {formik.errors.age && formik.touched.age ? (
              <div className="alert alert-danger my-2 py-1">
                {formik.errors.age}
              </div>
            ) : (
              ""
            )}
          </div>
          <div className="col-md-6">
            <input
              type="password"
              className="form-control"
              placeholder="Enter Your Password"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.password}
              name="password"
              id="password"
            />
            {formik.errors.password && formik.touched.password ? (
              <div className="alert alert-danger my-2 py-1">
                {formik.errors.password}
              </div>
            ) : (
              ""
            )}
          </div>
          <div className="col-md-6">
            <input
              type="password"
              className="form-control"
              placeholder="RePassword"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.rePassword}
              name="rePassword"
              id="rePassword"
            />
            {formik.errors.rePassword && formik.touched.rePassword ? (
              <div className="alert alert-danger my-2 py-1">
                {formik.errors.rePassword}
              </div>
            ) : (
              ""
            )}
          </div>
          <button
            className="btn btn-outline-danger flex-grow-0 fit-content"
            type="submit"
            disabled={!(formik.isValid && formik.dirty) ? true : false}
          >
            Submit
          </button>
        </div>
      </form>
  
  
  </>
    
  
  }
