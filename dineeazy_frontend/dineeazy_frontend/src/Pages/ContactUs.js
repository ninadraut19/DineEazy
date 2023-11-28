import { useEffect, useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import Footer from "../Components/Footer";

function ContactUs() {

    const navigate = useNavigate()
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
                            <Link to="/contact" className="nav-item nav-link active">Contact</Link>
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
                        <h1 className="display-3 text-white mb-3 animated slideInDown">Contact Us</h1>
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb justify-content-center text-uppercase">
                                <li className="breadcrumb-item"><a href="#">Home</a></li>
                                <li className="breadcrumb-item text-white active" aria-current="page">Contact</li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </div>

            {/* <!-- Contact Start --> */}
            <div className="container-xxl py-5">
                <div className="container">
                    <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                        <h5 className="section-title ff-secondary text-center text-primary fw-normal">Contact Us</h5>
                        <h1 className="mb-5">Contact For Any Query</h1>
                    </div>
                    <div className="row g-4">
                        <div className="col-12">
                            <div className="row gy-4">
                                <div className="col-md-4">
                                    <h5 className="section-title ff-secondary fw-normal text-start text-primary">Booking</h5>
                                    <p><i className="fa fa-envelope-open text-primary me-2"></i>team.dineeazy@gmail.com</p>
                                </div>
                                <div className="col-md-4">
                                    <h5 className="section-title ff-secondary fw-normal text-start text-primary">General</h5>
                                    <p><i className="fa fa-envelope-open text-primary me-2"></i>team.dineeazy@gmail.com</p>
                                </div>
                                <div className="col-md-4">
                                    <h5 className="section-title ff-secondary fw-normal text-start text-primary">Technical</h5>
                                    <p><i className="fa fa-envelope-open text-primary me-2"></i>team.dineeazy@gmail.com</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 wow fadeIn" data-wow-delay="0.1s">
                            <iframe className="position-relative rounded w-100 h-100"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3001156.4288297426!2d-78.01371936852176!3d42.72876761954724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ccc4bf0f123a5a9%3A0xddcfc6c1de189567!2sNew%20York%2C%20USA!5e0!3m2!1sen!2sbd!4v1603794290143!5m2!1sen!2sbd"
                                frameBorder="0" style={{minHeight:350, border:0}} allowFullScreen="" aria-hidden="false"
                                tabIndex="0"></iframe>
                        </div>
                        <div className="col-md-6">
                            <div className="wow fadeInUp" data-wow-delay="0.2s">
                                <form>
                                    <div className="row g-3">
                                        <div className="col-md-6">
                                            <div className="form-floating">
                                                <input type="text" className="form-control" id="name" placeholder="Your Name"/>
                                                <label for="name">Your Name</label>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-floating">
                                                <input type="email" className="form-control" id="email" placeholder="Your Email"/>
                                                <label for="email">Your Email</label>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-floating">
                                                <input type="text" className="form-control" id="subject" placeholder="Subject"/>
                                                <label for="subject">Subject</label>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-floating">
                                                <textarea className="form-control" placeholder="Leave a message here" id="message" style={{height:150}}></textarea>
                                                <label for="message">Message</label>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <button className="btn btn-primary w-100 py-3" type="submit">Send Message</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Contact End --> */}
            <Footer></Footer>
            <a href="#" className="btn btn-lg btn-primary btn-lg-square back-to-top"><i className="bi bi-arrow-up"></i></a>
            <div>
            <Outlet></Outlet>
            </div>
    </div>
    )
}

export default ContactUs;