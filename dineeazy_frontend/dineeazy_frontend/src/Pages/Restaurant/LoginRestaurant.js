import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import imglogin from '../../assets/cafe-mozaic.webp';
import Footer from '../../Components/Footer';
import { URL } from "../../config";


const LoginRestaurant = props =>{

    let [mobileNo, setMobileNo] = useState("")
    let [password, setPassword] = useState("")

    const [restLoginStatus, setRestLoginStatus] = useState(0);

    useEffect(() => {
      const data = window.sessionStorage.getItem('restLoginStatus');
      if ( data !== null ) setRestLoginStatus(JSON.parse(data));
    }, [restLoginStatus]);

    const Logout = (e) =>{

        e.preventDefault()
        window.sessionStorage.setItem('restLoginStatus', JSON.stringify(0));
        window.sessionStorage.setItem('restaurantId', 0);
        window.sessionStorage.setItem('restaurantInfoId', 0);
        navigate("/restaurant")
    }

  const navigate = useNavigate()

  const signinUser = (event) => {

    event.preventDefault()

    if (mobileNo.length == 0) {
        alert("please enter mobile number")
    } 
    else if(password.length == 0) {
        alert("please enter valid password")
    } 
    else {
      const body = {
        mobileNo: parseInt(mobileNo),
        password:password
      }

      const url = `${URL}/restaurants/login`

      axios.post(url, body).then((response) => {
        const result = response.data
        console.log(result);
        if (result['status'] == 'Success') {
          const {restaurantId} = result['data']
          const {info} = result['data']
          window.sessionStorage.setItem("restLoginStatus", 1)
          window.sessionStorage.setItem("restaurantId", restaurantId)
          navigate('/restaurant')
        } else {
            alert("Invalid credentials, login failed!")
        }
      })
    }
  }

  const forgetPassword = (e) =>{

    e.preventDefault()

    if (mobileNo.length == 0) {
        alert("please enter mobile number")
    } 
    else if(mobileNo.length < 10){
        alert("mobile number should to be 10 digits")
    }else {
        const body = {
          mobileNo:mobileNo
        }
  
        const url2 = `${URL}/restaurants/forgetPassword`
  
        axios.post(url2, body).then((response) => {
          const result = response.data
          console.log(result);
          if (result['status'] == 'Success') {
            alert("Login details has been send to your registered email Id")
          } else {
              alert("Invalid credentials login failed")
          }
        })
      }
  }


   const signUp = () =>{
        navigate("/restSignUp");
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
                            <Link to="/restaurant" className="nav-item nav-link">Restaurant</Link>
                            <Link to="/addRestaurant" className="nav-item nav-link">Add Restaurant</Link>
                            <Link to="/addMenu" className="nav-item nav-link">Add Menu</Link>
                            <Link to="/restAboutUs" className="nav-item nav-link">About Us</Link>
                            <Link to="/restContact" className="nav-item nav-link">Contact</Link>
                            {(restLoginStatus == 1)
                                ? (<Link to="/logout" className="nav-item nav-link" onClick={Logout}>Logout</Link>)
                                : (<Link to="/restLogin" className="nav-item nav-link active">Login</Link>)
                            }
                        </div>
                        <Link to="/restSignUp" className="btn btn-primary py-2 px-4">Sign Up</Link>
                    </div>
                </nav>

                <div className="container-xxl py-5 bg-dark hero-header mb-5">
                    <div className="container text-center my-5 pt-5 pb-4">
                        <h1 className="display-3 text-white mb-3 animated slideInDown">Login</h1>
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb justify-content-center text-uppercase">
                                <li className="breadcrumb-item"><a href="#">Home</a></li>
                                <li className="breadcrumb-item text-white active" aria-current="page">Login</li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </div>
            <div className="container-xxl py-5 px-0" data-wow-delay="0.1s">
                <div className="row g-0">
                    <div className="col-md-6">
                        <div>
                            <img src={imglogin} alt="login-image"></img>
                        </div>
                    </div>
                    <div className="col-md-6 bg-dark d-flex align-items-center">
                        <div className="p-5 wow fadeInUp" >
                            <h5 className="section-title ff-secondary text-start text-primary fw-normal">Welcome</h5>
                            <h1 className="text-white mb-4">Login</h1>
                            <form>
                                <div className="row g-3">
                                    <div className="col-md-9">
                                        <div className="form-floating">
                                            <input type="number" className="form-control" id="number" placeholder="Registered Mobile number"  onChange={(event) => {setMobileNo(event.target.value)}}/>
                                            <label htmlFor="number">Registered Mobile number</label>
                                        </div>
                                    </div>
                                    <div className="col-md-3"></div>
                                    <div className="col-md-9">
                                        <div className="form-floating">
                                            <input type="password" className="form-control" id="datetime" placeholder="password"  onChange={(event) => {setPassword(event.target.value)}}/>
                                            <label htmlFor="password">Password</label>
                                        </div>
                                    </div>
                                    <div className="col-md-3"></div>
                                    <div className="col-md-12"></div>
                                    <div className="col-md-12"></div>
                                    <div className="col-9">
                                        <button onClick={signinUser} className="btn btn-primary w-100 py-3" type="submit" name="b1">login</button>
                                    </div>
                                    <div className="col-4">
                                        <button className="btn btn-primary w-100 py-3" type="submit" onClick={signUp}>Sign Up</button>
                                    </div>
                                    <div className="col-5">
                                        <button className="btn btn-primary w-100 py-3" type="submit" onClick={forgetPassword}>Forgot Password ?</button>
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

export default LoginRestaurant;