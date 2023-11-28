import React, { useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
import imgsignin from '../assets/cafe-mozaic.webp';
import Footer from '../Components/Footer';
import { useState } from 'react'
import { toast } from 'react-toastify'
import axios from 'axios'
import { useNavigate } from 'react-router'
import { URL } from '../config'

const SignUp = props =>{

    const [custLoginStatus, setCustLoginStatus] = useState(0);

    useEffect(() => {
      const data = window.sessionStorage.getItem('custLoginStatus');
      if ( data !== null ) setCustLoginStatus(JSON.parse(data));
    }, [custLoginStatus]);
  
    const Logout = (e) =>{
  
        e.preventDefault()
        window.sessionStorage.setItem('custLoginStatus', JSON.stringify(0));
        window.sessionStorage.setItem('customerId', 0);
        navigate("/home");
    }

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [mobileNo, setMobileNo] = useState('')
    const [emailId, setEmailId] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
  
    // used to navigate from one component to another
    const navigate = useNavigate()
  
    const signupUser = (event) => {

        event.preventDefault()

        if (firstName.length == 0) {
        alert('Please enter first name')
      } else if (lastName.length == 0) {
        alert('Please enter last name')
      } else if (mobileNo.length == 0) {
        alert('Please enter mobileNo.')
      } else if (emailId.length == 0) {
        alert('Please enter emailId')
      } else if (password.length == 0) {
        alert('Please enter password')
      } else if (confirmPassword.length == 0) {
        alert('Please confirm your password')
      } else if (password != confirmPassword) {
        alert('Passwords do not match')
      } else {
        const body = {
          firstName,
          lastName,
          mobileNumber:parseInt(mobileNo),
          emailId,
          password
        }
  
        const url = `${URL}/customers/signUp`
  
        axios.post(url, body).then((response) => {
          const result = response.data
          console.log(result)
          if (result['status'] == 'Success') {
            alert('Successfully signed up new user')
            navigate('/login')
          } else {
            alert(result['error'])
          }
        })
      }
    }

    return(
            <div className="container-xxl bg-white p-0">
                <div className="container-xxl position-relative p-0">
                    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4 px-lg-5 py-3 py-lg-0">
                        <a href="" className="navbar-brand p-0">
                            <h1 className="text-primary m-0"><i className="fa fa-utensils me-3"></i>DineEazy</h1>
                        </a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                            <span className="fa fa-bars"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarCollapse">
                            <div className="navbar-nav ms-auto py-0 pe-4">
                                <Link to="/home" className="nav-item nav-link">Home</Link>
                                <Link to="/tableBooking" className="nav-item nav-link">Book A Table</Link>
                                <Link to="/restaurant" className="nav-item nav-link" >Restaurant</Link>
                                <Link to="/aboutUs" className="nav-item nav-link">About Us</Link>
                                <Link to="/contact" className="nav-item nav-link">Contact</Link>
                                {(custLoginStatus == 1)
                                    ? (<Link to="/logout" className="nav-item nav-link" onClick={Logout}>Logout</Link>)
                                    : (<Link to="/login" className="nav-item nav-link">Login</Link>)
                                }
                            </div>
                            {(custLoginStatus == 1)
                            ? (<Link to="/myBookings" className="btn btn-primary py-2 px-4">My Bookings</Link>)
                            : (<Link to="/signUp" className="btn btn-primary py-2 px-4">Sign Up</Link>)
                            }
                        </div>
                    </nav>

                    <div className="container-xxl py-4 bg-dark hero-header mb-3">
                        <div className="container text-center my-5 pt-5 pb-4">
                            <h1 className="display-3 text-white mb-3 animated slideInDown">Register</h1>
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb justify-content-center text-uppercase">
                                    <li className="breadcrumb-item"><a href="#">Home</a></li>
                                    <li className="breadcrumb-item text-white active" aria-current="page">Sign Up</li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
                <div className="container-xxl py-5 px-0 wow fadeInUp" data-wow-delay="0.1s">
                    <div className="row g-0">
                        <div className="col-md-6">
                            <div>
                                <img src={imgsignin} alt="login-image"></img>
                            </div>
                        </div>
                        <div className="col-md-6 bg-dark d-flex align-items-center">
                            <div className="p-5 wow fadeInUp" data-wow-delay="0.2s">
                                <h5 className="section-title ff-secondary text-start text-primary fw-normal">Please Register Here</h5>
                                <h1 className="text-white mb-4">Sign Up</h1>
                                <form > 
                                    <div className="row g-3">
                                        <div className="col-md-9">
                                            <div className="form-floating">
                                                <input type="text" className="form-control" id="text1" placeholder="First name"  onChange={(e) => {setFirstName(e.target.value) }}/>
                                                <label htmlFor="text">First Name</label>
                                            </div>
                                        </div>
                                        <div className="col-md-3"></div>
                                        <div className="col-md-9">
                                            <div className="form-floating">
                                                <input type="text" className="form-control" id="text2" placeholder="Last name" onChange={(e) => {setLastName(e.target.value)}}/>
                                                <label htmlFor="text">Last Name</label>
                                            </div>
                                        </div>
                                        <div className="col-md-3"></div>
                                        <div className="col-md-9">
                                            <div className="form-floating">
                                                <input type="number" className="form-control" id="number" placeholder="Mobile number" onChange={(e) => {setMobileNo(e.target.value)}}/>
                                                <label htmlFor="number">Mobile number</label>
                                            </div>
                                        </div>
                                        <div className="col-md-3"></div>
                                        <div className="col-md-9">
                                            <div className="form-floating">
                                            <input type="text" className="form-control" id="emailId" placeholder="Email Id"  onChange={(e) => {setEmailId(e.target.value)}}/>
                                            <label htmlFor="password">Email Id</label>
                                            </div>
                                        </div>
                                        <div className="col-md-3"></div>
                                        <div className="col-md-9">
                                            <div className="form-floating">
                                            <input type="password" className="form-control datetimepicker-input" id="password" placeholder="set password"   onChange={(e) => {setPassword(e.target.value)}}/>
                                            <label htmlFor="password">Set Password</label>
                                            </div>
                                        </div>
                                        <div className="col-md-3"></div>
                                        <div className="col-md-9">
                                            <div className="form-floating">
                                            <input type="password" className="form-control datetimepicker-input" id="ConfirmPassword" placeholder="Conform password"  onChange={(e) => {setConfirmPassword(e.target.value)}}/>
                                            <label htmlFor="password">Confirm Password</label>
                                            </div>
                                        </div>
                                        <div className="col-md-3"></div>
                                        <div className="col-md-12"></div>
                                        <div className="col-md-12"></div>
                                    <div className="col-9">
                                            <button className="btn btn-primary w-100 py-3" type="submit" onClick={signupUser}>Signup</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer></Footer>
                <div>
                    <Outlet></Outlet>
                </div>
                
            </div>

    );
}

export default SignUp;