import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import img1 from '../assets/addmenu.jpg';
import Booking from "../Components/Booking";
import Footer from "../Components/Footer";
import { URL } from "../config";

const Mybookings = props =>{

    const [bookings, setBookings] = useState([]);
    const [customerId, setCustomerId] = useState(window.sessionStorage.getItem('customerId'));

    const [custLoginStatus, setCustLoginStatus] = useState(0);
    const navigate = useNavigate()

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

    const getAllBookings = () => {

        let url = `${URL}/tableBooking/getAllTableBooking/${customerId}`

        axios.get(url).then((response) => {
            const result = response.data;
            console.log(result);

            if (result['status'] === "Success") {
                const data = result['data'];
                setBookings(data);
                console.log(data);
            }
        })

    }

    useEffect(() => {
        getAllBookings()
    }, []);

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

                    <div className="container-xxl py-4 bg-dark hero-header mb-5">
                        <div className="container text-center my-5 pt-5 pb-4">
                            <h1 className="display-3 text-white mb-3 animated slideInDown">My Bookings</h1>
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb justify-content-center text-uppercase">
                                    <li className="breadcrumb-item"><a href="#">Home</a></li>
                                    <li className="breadcrumb-item text-white active" aria-current="page">My Bookings</li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
            <div className="container-xxl py-5 px-0 wow fadeInUp" data-wow-delay="0.1s">
                <div className="row g-0">
                    <div className="col-md-4">
                        <div>
                            <img src={img1} alt="login-image" height={800} width={1200}></img>
                        </div>
                    </div>
                    <div className="col-md-8 bg-dark d-flex align-items ">
                        <div className="p-5 wow fadeInUp" data-wow-delay="0.2s">
                            <h1 className="section-title ff-secondary text-start text-primary fw-normal">My Bookings</h1><br/><br/><br/>
                
                            <form>
                                <div className="row g-3">
                                    <div className="col-md-12">
                                        {(bookings.length > 0)
                                            ? (<div className="form-floating">
                                                {bookings.map(booking =><Booking booking={booking} key={booking.bookingId}></Booking>)}
                                            </div>)
                                            : (<div className="card">
                                                <div className="card-body">
                                                    No Bookings
                                                </div>
                                            </div>)
                                        }
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
}

export default Mybookings;