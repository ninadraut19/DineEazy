import { useEffect, useState } from "react";
import { Link, Navigate, Outlet, useNavigate } from "react-router-dom";
import About from "../Components/About";
import Footer from "../Components/Footer";

function Restaurant(){

    const [restLoginStatus, setRestLoginStatus] = useState(0);

    const navigate = useNavigate()

    useEffect(() => {
      const data = window.sessionStorage.getItem('restLoginStatus');
      if ( data !== null ) setRestLoginStatus(JSON.parse(data));
    }, [restLoginStatus]);

    const Logout = (e) =>{

        e.preventDefault()
        window.sessionStorage.setItem('restLoginStatus', JSON.stringify(0));
        window.sessionStorage.setItem('restaurantId', 0);
        window.sessionStorage.setItem('restaurantInfoId', 0);
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
                            <Link to="/restaurant" className="nav-item nav-link active">Restaurant</Link>
                            <Link to="/addRestaurant" className="nav-item nav-link">Add Restaurant</Link>
                            <Link to="/addMenu" className="nav-item nav-link">Add Menu</Link>
                            <Link to="/aboutUs" className="nav-item nav-link">About Us</Link>
                            <Link to="/contact" className="nav-item nav-link">Contact</Link>
                            {(restLoginStatus == 1)
                                ? (<Link to="/logout" className="nav-item nav-link" onClick={Logout}>Logout</Link>)
                                : (<Link to="/restLogin" className="nav-item nav-link">Login</Link>)
                            }
                        </div>
                            <Link to="/restSignUp" className="btn btn-primary py-2 px-4">Sign Up</Link>
                    </div>
                </nav>

                <div className="container-xxl py-4 bg-dark hero-header mb-5">
                    <div className="container text-center my-5 pt-5 pb-4">
                        <h1 className="display-3 text-white mb-3 animated slideInDown">Restaurant</h1>
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb justify-content-center text-uppercase">
                                <li className="breadcrumb-item"><a href="#">Home</a></li>
                                <li className="breadcrumb-item text-white active" aria-current="page">Restaurant</li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </div>
            <About></About>
            <Footer></Footer>
            <a href="#" className="btn btn-lg btn-primary btn-lg-square back-to-top"><i className="bi bi-arrow-up"></i></a>
            <div>
                <Outlet></Outlet>
            </div>
        </div>
    )
}

export default Restaurant;